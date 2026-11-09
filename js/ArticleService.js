import { makeQuery, parseApiResponse, requestApi } from "./ApiService.js";

function requestArticle(path, options = {}, operation = "Article API") {
  return requestApi(path, options)
    .then((response) => parseApiResponse(response, operation))
    .catch((error) => {
      console.error(`${operation} 오류:`, error.message);
      throw error;
    });
}

export function getArticleList(options = {}) {
  return requestArticle(`/articles${makeQuery(options)}`, {}, "getArticleList()");
}

export function getArticle(articleId) {
  return requestArticle(`/articles/${encodeURIComponent(articleId)}`, {}, "getArticle()");
}

export function createArticle({ title, content, image }) {
  return requestArticle(
    "/articles",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, image }),
    },
    "createArticle()",
  );
}

export function patchArticle(articleId, updates) {
  return requestArticle(
    `/articles/${encodeURIComponent(articleId)}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    },
    "patchArticle()",
  );
}

export function deleteArticle(articleId) {
  return requestArticle(
    `/articles/${encodeURIComponent(articleId)}`,
    { method: "DELETE" },
    "deleteArticle()",
  );
}
