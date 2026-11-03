// 여기에 작성해야 하는 것
// - import 사용하기
// - 각 함수를 실행하는 코드를 작성, 제대로 동작하는지 확인

import * as article from './ArticleService.js';
import * as product from './ProductService.js';

// Article Test
const searchArticle = {
    page: 1,
    pageSize: 5,
    keyword: '코드잇'
}
const createArticleData = {
    title: '김승범 테스트입니다',
    content: '테스트로 보내보는 createArticle',
    image: 'https://example.com/...',
}
const patchArticleData = {
    title: '김승범 테스트입니다 수정본',
    content: '테스트로 보내보는 createArticle 수정 최최최종',
    image: 'https://example.com/...',
}

async function runArticleTest() {
    const searchedArticleList = await article.getArticleList(searchArticle);
    console.log('getArticleList() code: ', searchedArticleList.status);
    console.log('검색된 아티클: ', searchedArticleList);

    const createdArticle = await article.createArticle(createArticleData);
    console.log('생성된 아티클: ', createdArticle);
    const articleId = createdArticle.id;

    const patchedArticle = await article.patchArticle(articleId, patchArticleData);
    console.log('수정된 아티클: ', patchedArticle);

    if (articleId) {
        console.log(`생성된 아티클 ID(${articleId})로 삭제를 시도합니다.`);

        // 2. 받아온 id를 이용해 삭제 함수 실행
        const deleteResult = await article.deleteArticle(articleId);
        console.log('삭제 성공:', deleteResult);
    } else {
        console.log('아티클 ID를 받아오지 못했습니다.');
    }
}

// Product Test
const searchProduct = {
    page: 1,
    pageSize: 5,
    keyword: '자전거'
}
const createProductData = {
    name: '아이폰 15',
    description: '아이폰 15입니다.',
    price: 500000,
    tags: ['아이폰15', '중고폰'],
    images: ['https://example.com/...']
}
const patchProductData = {
    name: '아이폰 14',
    description: '아이폰 14입니다.',
    price: 500000,
    tags: ['아이폰14', '중고폰'],
    images: ['https://example.com/...']
}

async function runProductTest() {
    const searchedProductList = await product.getProductList(searchProduct);
    console.log('getProductList() code: ', searchedProductList.status);
    console.log('검색된 상품: ', searchedProductList);

    const createdProduct = await product.createProduct(createProductData);
    console.log('생성된 상품: ', createdProduct);
    const productId = createdProduct.id;

    const patchedProduct = await product.patchProduct(productId, patchProductData);
    console.log('수정된 상품: ', patchedProduct);

    if (productId) {
        console.log(`생성된 상품 ID(${productId})로 삭제를 시도합니다.`);

        const deleteProduct = await product.deleteProduct(productId);
        console.log('삭제 성공:', deleteProduct);
    } else {
        console.log('상품 ID를 받아오지 못했습니다.');
    }
}

// run Test
runArticleTest() 
runProductTest()
