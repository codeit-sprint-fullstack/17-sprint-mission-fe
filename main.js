import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";

// Article API 테스트
async function testArticle() {
  console.log(" Article API 테스트 ");

  try {
    // 1. Article List 조회 (GET)
    const articleList = await getArticleList(1, 5, "");
    console.log("게시글 목록:", articleList);

    // 2. Article 생성 (POST)
    const newArticle = await createArticle({
      title: "벌써 세번째 미션 ",
      content: "시간이 참 빠르네요.",
      image: "https://example.com/article.jpg",
    });

    console.log("게시글 생성:", newArticle);

    // 생성한 article의 ID 저장
    const articleId = newArticle.id;

    if (articleId == null) {
      throw new Error("게시글 생성 응답에 id가 없습니다.");
    }

    // 3. Article 상세 조회 (GET)
    const article = await getArticle(articleId);
    console.log("게시글 상세:", article);

    // 4. Article 수정 (PATCH)
    const updatedArticle = await patchArticle(articleId, {
      title: "겨울이 오고 있습니다(수정)",
      content: "날씨가 많이 춥네요.(수정)",
    });

    console.log("게시글 수정:", updatedArticle);

    // 5. Article 삭제 (DELETE)
    const deletedArticle = await deleteArticle(articleId);
    console.log("게시글 삭제:", deletedArticle);
  } catch (error) {
    console.error("Article 테스트 실패:", error.message);
  }
}
