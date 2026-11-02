import { getArticleList, getArticle, createArticle, patchArticle, deleteArticle } from './ArticleService.js';
import { getProductList, getProduct, createProduct, patchProduct, deleteProduct } from './ProductService.js';


// form: 공백 제거 및 required input 입력 시 버튼 활성화
const form = document.querySelector('form');

if (form) {
    const requiredInput = form.querySelectorAll('input[required]');
    const submitBtn = form.querySelector('.btn-submit');

    requiredInput.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\s/g, '');

            const isAllFilled = [...requiredInput].every(input => input.value.length > 0);
            submitBtn.disabled = !isAllFilled;
        });
    });
}


// 비밀번호 토글 버튼
const togglePwBtn = document.querySelectorAll('.toggle-pw-btn');

togglePwBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const targetBtn = e.currentTarget;
        const targetInput = targetBtn.closest('.field').querySelector('input');
        const isVisible = targetBtn.getAttribute('aria-pressed') === 'true';

        targetInput.setAttribute('type', isVisible ? 'password' : 'text');
        targetBtn.setAttribute('aria-pressed', String(!isVisible));
    });
});


// Article API 테스트
async function testArticleApi() {
    const articleList = await getArticleList({ page: 1, pageSize: 3, keyword: '판다' });
    console.log('getArticleList', articleList);

    if (articleList?.list.length) {
        const article = await getArticle(articleList.list[0].id);
        console.log('getArticle', article);
    }

    const newArticle = await createArticle({
        title: '스프린트 미션 테스트 게시글',
        content: '테스트용 게시글입니다.',
        image: 'https://example.com/test.png',
    });
    console.log('createArticle', newArticle);

    if (!newArticle) return;

    const patchedArticle = await patchArticle(newArticle.id, { title: '수정된 테스트 게시글' });
    console.log('patchArticle', patchedArticle);

    const deletedArticle = await deleteArticle(newArticle.id);
    console.log('deleteArticle', deletedArticle);
}


// Product API 테스트
async function testProductApi() {
    const productList = await getProductList({ page: 1, pageSize: 3, keyword: '노트북' });
    console.log('getProductList', productList);

    if (productList?.list.length) {
        const product = await getProduct(productList.list[0].id);
        console.log('getProduct', product);
    }

    const newProduct = await createProduct({
        name: '스프린트 미션 테스트 상품',
        description: '테스트용 상품입니다.',
        price: 10000,
        tags: ['테스트', '스프린트'],
        images: ['https://example.com/test.png'],
    });
    console.log('createProduct', newProduct);

    if (!newProduct) return;

    const patchedProduct = await patchProduct(newProduct.id, { price: 20000 });
    console.log('patchProduct', patchedProduct);

    const deletedProduct = await deleteProduct(newProduct.id);
    console.log('deleteProduct', deletedProduct);
}


// 에러 처리 테스트
async function testErrorHandling() {
    await getArticle(99999999);
    await getProduct(99999999);
}


// TEST
await testArticleApi();
await testProductApi();
await testErrorHandling();