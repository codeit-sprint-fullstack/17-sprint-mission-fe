import axios from "axios";

const baseURL = "https://panda-market-api-crud.vercel.app";

export function getArticleList(
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword,
) {
  const params = {
    page,
    pageSize,
    orderBy,
  };
  if (keyword) {
    params.keyword = keyword;
  }
  return axios
    .get(`${baseURL}/articles`, { params, timeout: 30_000 })
    .then((res) => res.data)
    .catch((e) => {
      if (e.response) {
        console.log(e.response.status);
        console.log(e.response.data);
      } else {
        console.log("게시글을 불러오는데 실패했습니다.");
      }
    });
}

export function getArticle(id) {
  return axios
    .get(`${baseURL}/articles/${id}`, { timeout: 3_000 })
    .then((res) => res.data)
    .catch((e) => {
      if (e.response) {
        console.log(e.response.status);
        console.log(e.response.data);
      } else {
        console.log("게시글을 불러오는데 실패했습니다.");
      }
    });
}

export function createArticle(title, content, image) {
  return axios
    .post(
      `${baseURL}/articles`,
      {
        title,
        content,
        image,
      },
      { timeout: 10_000 },
    )
    .then((res) => res.data)
    .catch((e) => {
      if (e.response) {
        console.log(e.response.status);
        console.log(e.response.data);
      } else {
        console.log("게시글을 추가하는데 실패했습니다.");
      }
    });
}

export function patchArticle(id, articleData) {
  return axios
    .patch(`${baseURL}/articles/${id}`, articleData, { timeout: 10_000 })
    .then((res) => res.data)
    .catch((e) => {
      if (e.response) {
        console.log(e.response.status);
        console.log(e.response.data);
      } else {
        console.log("게시글을 수정하는데 실패했습니다.");
      }
    });
}

export function deleteArticle(id) {
  return axios
    .delete(`${baseURL}/articles/${id}`, { timeout: 10_000 })
    .then((res) => res.data)
    .catch((e) => {
      if (e.response) {
        console.log(e.response.status);
        console.log(e.response.data);
      } else {
        console.log("게시글을 삭제하는데 실패했습니다.");
      }
    });
}
