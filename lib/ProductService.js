// 여기에 작성해야 하는 것
// <GET>
// 1. getProductList() -> page, pageSize, keyword 쿼리 파라미터 이용
// 2. getProduct()
// <POST>
// 1. createProduct() -> request body에 name, description, price, tags, images 포함
// <PATCH>
// 1. patchProduct()
// <DELETE>
// 1. deleteProduct()
//
// - fetch or axios 이용할 것 => 2XX 응답이 아니면 에러 메세지 콘솔에 출력
// - async/await 이용해 비동기 처리
// - try/catch 이용해 오류 처리
// - export 사용하기

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://panda-market-api-crud.vercel.app',
    timeout: 10000,
});

export async function getProductList(productData) {
    try {
        const res = await instance.get('/products', {
            params: productData
        });
        return res.data;
    } catch (e) {
        if (e.response) {
            console.log(e.response.status);
        } else {
            console.log('리퀘스트가 실패했습니다.');
        }
    }
}

export async function getProduct() {
    try {
        const res = await instance.get('/products');
        return res.data;
    } catch (e) {
        if (e.response) {
            console.log(e.response.status);
        } else {
            console.log('리퀘스트가 실패했습니다.');
        }
    }
}

export async function createProduct(productData) {
    try {
        const res = await instance.post('/products', productData);
        return res.data;
    } catch (e) {
        if (e.response) {
            console.log(e.response.status);
        } else {
            console.log('리퀘스트가 실패했습니다.');
        }
    }
}

export async function patchProduct(id, productData) {
    try {
        const res = await instance.patch(`/products/${id}`, productData);
        return res.data;
    } catch (e) {
        if (e.response) {
            console.log(e.response.status);
        } else {
            console.log('리퀘스트가 실패했습니다.');
        }
    }
}

export async function deleteProduct(id) {
    const res = await instance.delete(`/products/${id}`);
    return res.data;
}