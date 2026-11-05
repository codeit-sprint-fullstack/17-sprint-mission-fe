// API 명세: https://panda-market-api-crud.vercel.app/docs/
const BASE_URL = "https://panda-market-api-crud.vercel.app";

// GET /articles
export function getArticleList(page = 1, pageSize = 10, keyword = "") {
  const params = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    keyword,
  });
  return fetch(`${BASE_URL}/articles?${params}`, { method: "GET" })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`getArticleList 실패: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
}

// GET /articles/{articleId}
export function getArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articleId}`, { method: "GET" })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`getArticle 실패: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
}

// POST /articles
export function createArticle({ title, content, image }) {
  return fetch(`${BASE_URL}/articles`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, image }),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`createArticle 실패: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
}

// PATCH /articles/{articleId}
export function patchArticle(articleId, updates) {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`patchArticle 실패: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
}

// DELETE /articles/{articleId}
export function deleteArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articleId}`, { method: "DELETE" })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`deleteArticle 실패: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
}

