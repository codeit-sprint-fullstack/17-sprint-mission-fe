import axios from "axios";

// Axios 인스턴스 생성
const instance = axios.create({
  baseURL: "https://panda-market-api-crud.vercel.app",
  timeout: 7000,
});

// 1. 게시글 목록 조회 (GET)
export function getArticleList(page = 1, pageSize = 10, keyword = "") {
  return instance
    .get("/articles", {
      params: {
        page,
        pageSize,
        keyword,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      if (error.response) {
        console.error("상태 코드:", error.response.status);
        console.error("에러 내용:", error.response.data);
      } else {
        console.error("요청 실패:", error.message);
      }
      throw error;
    });
}

// 2. 게시글 상세 조회 (GET)
export function getArticle(id) {
  return instance
    .get(`/articles/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      if (error.response) {
        console.error("상태 코드:", error.response.status);
        console.error("에러 내용:", error.response.data);
      } else {
        console.error("요청 실패:", error.message);
      }
      throw error;
    });
}

// 3. 게시글 생성 (POST)
export function createArticle(data) {
  return instance
    .post("/articles", {
      title: data.title,
      content: data.content,
      image: data.image,
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      if (error.response) {
        console.error("상태 코드:", error.response.status);
        console.error("에러 내용:", error.response.data);
      } else {
        console.error("요청 실패:", error.message);
      }
      throw error;
    });
}

// 4. 게시글 수정 (PATCH)
export function patchArticle(id, data) {
  return instance
    .patch(`/articles/${id}`, data)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      if (error.response) {
        console.error("상태 코드:", error.response.status);
        console.error("에러 내용:", error.response.data);
      } else {
        console.error("요청 실패:", error.message);
      }
      throw error;
    });
}

// 5. 게시글 삭제 (DELETE)
export function deleteArticle(id) {
  return instance
    .delete(`/articles/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      if (error.response) {
        console.error("상태 코드:", error.response.status);
        console.error("에러 내용:", error.response.data);
      } else {
        console.error("요청 실패:", error.message);
      }
      throw error;
    });
}
