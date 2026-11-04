import { getArticle } from "./ArticleService.js";

getArticle(7364)
  .then((data) => {
    console.log("조회된 게시글:", data);
  })
  .catch(() => {
    console.log("조회 실패를 catch에서 처리했습니다");
  });
