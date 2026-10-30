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

  const created = await createArticle({
    title: '테스트 게시글',
    content: '테스트 내용입니다.',
    image: IMAGE_URL,
  });
  console.log('createArticle:', created);

  console.log('getArticleList:', await getArticleList({ page: 1, pageSize: 3, keyword: '테스트' }));
  console.log('getArticle:', await getArticle(created.id));
  console.log('patchArticle:', await patchArticle(created.id, { title: '수정된 게시글' }));
  console.log('deleteArticle:', await deleteArticle(created.id));

  // 삭제한 id를 다시 조회해 404 에러 메시지가 콘솔에 출력되는지 확인
  await getArticle(created.id);
}

async function testProduct() {
  console.log('===== Product =====');

  const created = await createProduct({
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

  // 삭제한 id를 다시 조회해 404 에러 메시지가 콘솔에 출력되는지 확인
  await getProduct(created.id);
}

await testArticle();
await testProduct();
