const BASE_URL = 'https://panda-market-api-crud.vercel.app/articles';

// 응답이 2XX가 아니면 에러를 던져 .catch()로 전달
function checkResponse(res) {
  if (!res.ok) {
    throw new Error(`요청 실패: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export function getArticleList({ page = 1, pageSize = 10, keyword } = {}) {
  const params = new URLSearchParams({ page, pageSize });
  if (keyword) {
    params.set('keyword', keyword);
  }

  return fetch(`${BASE_URL}?${params}`)
    .then(checkResponse)
    .catch((error) => {
      console.error('getArticleList 에러:', error.message);
    });
}

export function getArticle(id) {
  return fetch(`${BASE_URL}/${id}`)
    .then(checkResponse)
    .catch((error) => {
      console.error('getArticle 에러:', error.message);
    });
}

export function createArticle({ title, content, image }) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content, image }),
  })
    .then(checkResponse)
    .catch((error) => {
      console.error('createArticle 에러:', error.message);
    });
}

export function patchArticle(id, data) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(checkResponse)
    .catch((error) => {
      console.error('patchArticle 에러:', error.message);
    });
}

export function deleteArticle(id) {
  return fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
    .then(checkResponse)
    .catch((error) => {
      console.error('deleteArticle 에러:', error.message);
    });
}
