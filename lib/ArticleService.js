// 여기에 작성해야 하는 것
// <GET>
// 1. getArticleList() -> page, pageSize, keyword 쿼리 파라미터 이용
// 2. getArticle()
// <POST>
// 1. createArticle() -> request body에 title, content, image 포함
// <PATCH>
// 1. patchArticle()
// <DELETE>
// 1. deleteArticle()
//
// - fetch or axios 이용할 것 => 2XX 응답이 아니면 에러 메세지 콘솔에 출력
// - .then() 메소드로 비동기 처리
// - .catch() 이용해 오류 처리
// - export 사용하기

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://panda-market-api-crud.vercel.app',
    timeout: 10000,
});

export function getArticleList(articleData) {
    return instance.get('/articles', articleData)
        .then(res => {
            console.log('response code: ', res.status)
            return res.data
        })
        .catch(e => {
            console.log('error code: ', e.status)
        });
}

export function getArticle() {
    return instance.get('/articles')
        .then(res => {
            console.log('response code: ', res.status)
            return res.data
        })
        .catch(e => {
            console.log('error code: ', e.status)
        });
}

export function createArticle(articleData) {
    return instance.post('/articles', articleData)
        .then(res => {
            console.log('response code: ', res.status)
            return res.data
        })
        .catch(e => {
            console.log('error code: ', e.status)
        });
}

export function patchArticle(id, productData) {
    return instance.patch(`/articles/${id}`, productData)
        .then(res => {
            console.log('response code: ', res.status)
            return res.data
        })
        .catch(e => {
            console.log('error code: ', e.status)
        });
}

export function deleteArticle(id) {
    return instance.delete(`/articles/${id}`)
        .then(res => {
            console.log('response code: ', res.status)
            return res.data
        })
        .catch(e => {
            console.log('error code: ', e.status)
        });
}