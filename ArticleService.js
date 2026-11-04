// 게시글 목록 가져오기
export function getArticleList(page = 1, pageSize = 10, keyword = "") {
  const query = new URLSearchParams({ page, pageSize, keyword });

  return fetch(`https://panda-market-api-crud.vercel.app/articles?${query}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`게시글 조회 실패: ${response.status}`);
      }

      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
}

// 게시글 하나 가져오기
export function getArticle(articleId) {
  return fetch(`https://panda-market-api-crud.vercel.app/articles/${articleId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`게시글 상세 조회 실패: ${response.status}`);
      }

      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
}
