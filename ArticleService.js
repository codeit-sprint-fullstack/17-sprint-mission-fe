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

// 새 게시글 등록하기
export function createArticle({ title, content, image }) {
  return fetch("https://panda-market-api-crud.vercel.app/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content, image }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`게시글 등록 실패: ${response.status}`);
      }

      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
}

// 게시글 일부 수정하기
export function patchArticle(articleId, updates) {
  return fetch(
    `https://panda-market-api-crud.vercel.app/articles/${articleId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    },
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`게시글 수정 실패: ${response.status}`);
      }

      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
}

// 게시글 삭제하기
export function deleteArticle(articleId) {
  return fetch(
    `https://panda-market-api-crud.vercel.app/articles/${articleId}`,
    {
      method: "DELETE",
    },
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`게시글 삭제 실패: ${response.status}`);
      }

      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
}
