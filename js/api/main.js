import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from './ArticleService.js';
import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from './ProductService.js';

const IMAGE_URL = 'https://example.com/image.png';

async function testArticle() {
  console.log('===== Article =====');

  let created;
  let deleted = false;

  try {
    // 생성에 실패하면 에러가 던져져 바로 catch로 이동
    created = await createArticle({
      title: '테스트 게시글',
      content: '테스트 내용입니다.',
      image: IMAGE_URL,
    });
    console.log('createArticle:', created);

    console.log('getArticleList:', await getArticleList({ page: 1, pageSize: 3, keyword: '테스트' }));
    console.log('getArticle:', await getArticle(created.id));
    console.log('patchArticle:', await patchArticle(created.id, { title: '수정된 게시글' }));
    console.log('deleteArticle:', await deleteArticle(created.id));
    deleted = true;

    // 삭제한 id를 다시 조회해 404 에러 메시지가 콘솔에 출력되는지 확인 (의도한 에러라 무시)
    await getArticle(created.id).catch(() => {});
  } catch (error) {
    console.error('Article 검증 실패:', error.message);
  } finally {
    // 중간에 실패했다면 만든 데이터 삭제
    if (created && !deleted) {
      await deleteArticle(created.id).catch(() => {});
    }
  }
}

async function testProduct() {
  console.log('===== Product =====');

  let created;
  let deleted = false;

  try {
    // 생성에 실패하면 에러가 던져져 바로 catch로 이동
    created = await createProduct({
      name: '테스트 상품',
      description: '테스트 상품 설명입니다.',
      price: 10000,
      tags: ['테스트'],
      images: [IMAGE_URL],
    });
    console.log('createProduct:', created);

    console.log('getProductList:', await getProductList({ page: 1, pageSize: 3, keyword: '테스트' }));
    console.log('getProduct:', await getProduct(created.id));
    console.log('patchProduct:', await patchProduct(created.id, { price: 20000 }));
    console.log('deleteProduct:', await deleteProduct(created.id));
    deleted = true;

    // 삭제한 id를 다시 조회해 404 에러 메시지가 콘솔에 출력되는지 확인 (의도한 에러라 무시)
    await getProduct(created.id).catch(() => {});
  } catch (error) {
    console.error('Product 검증 실패:', error.message);
  } finally {
    // 중간에 실패했다면 만든 데이터 삭제
    if (created && !deleted) {
      await deleteProduct(created.id).catch(() => {});
    }
  }
}

await testArticle();
await testProduct();
