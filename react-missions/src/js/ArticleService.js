import axios from 'axios';

// 게시글 목록 조회
export function getArticleList(page, pageSize, keyword) {
  return axios.get('https://panda-market-api-crud.vercel.app/articles', {
    params: { page, pageSize, keyword }
  })
    .then(response => response.data)
    .catch(error => {
      if (error.response) {
        console.error('오류 상태 코드:', error.response.status);
        console.error('오류 메시지:', error.message);
      } else {
        console.error('요청 실패:', error.message);
      }
    });
}
// 게시글 상세 조회
export function getArticle(articleId) {
  return axios.get(`https://panda-market-api-crud.vercel.app/articles/${articleId}`)

    .then(response => response.data)
    .catch(error => {
      if (error.response) {
        console.error('오류 상태 코드:', error.response.status);
        console.error('오류 메시지:', error.message);
      } else {
        console.error('요청 실패:', error.message);
      }
    });
}
// 게시글 등록
export function createArticle(title, content, image) {
  return axios.post('https://panda-market-api-crud.vercel.app/articles', {title,content,image})
    .then(response => response.data)
    .catch(error => {
      if (error.response) {
        console.error('오류 상태 코드:', error.response.status);
        console.error('오류 메시지:', error.message);
      } else {
        console.error('요청 실패:', error.message);
      }
    });
}
// 게시글 수정
export function patchArticle(articleId, title, content, image) {
  return axios.patch(`https://panda-market-api-crud.vercel.app/articles/${articleId}`,{ title, content, image }
  )
    .then(response => response.data)
    .catch(error => {
      if (error.response) {
        console.error('오류 상태 코드:', error.response.status);
        console.error('오류 메시지:', error.message);
      } else {
        console.error('요청 실패:', error.message);
      }
    });
}
// 게시글 삭제
export function deleteArticle(articleId) {
  return axios.delete(`https://panda-market-api-crud.vercel.app/articles/${articleId}`)
    .then(response => response.data)
    .catch(error => {
      if (error.response) {
        console.error('오류 상태 코드:', error.response.status);
        console.error('오류 메시지:', error.message);
      } else {
        console.error('요청 실패:', error.message);
      }
    });
}