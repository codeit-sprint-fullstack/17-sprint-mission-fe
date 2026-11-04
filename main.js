import { getArticle } from "./ArticleService.js";

getArticle(7311)
  .then((data) => {
    console.log("게시글 상세:", data);
  })
  .catch(() => {
    console.log("게시글 상세 조회를 완료하지 못했습니다");
  });
