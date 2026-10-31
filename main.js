import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";

import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";

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

// Product API 테스트
async function testProduct() {
  console.log(" Product API 테스트 ");

  try {
    // 1. 상품 목록 조회 (GET)
    const productList = await getProductList(1, 5, "");
    console.log("상품 목록:", productList);

    // 2. 상품 생성 (POST)
    const newProduct = await createProduct({
      name: "구두",
      description: "5사이즈 구두입니다.",
      price: 50000,
      tags: ["구두", "5사이즈"],
      images: ["https://example.com/shoes.jpg"],
    });

    console.log("상품 생성:", newProduct);

    // 생성한 상품의 ID 저장
    const productId = newProduct.id;

    if (productId == null) {
      throw new Error("상품 생성 응답에 id가 없습니다.");
    }

    // 3. 상품 상세 조회 (GET)
    const product = await getProduct(productId);
    console.log("상품 상세:", product);

    // 4. 상품 수정 (PATCH)
    const updatedProduct = await patchProduct(productId, {
      name: "구두 (수정)",
      price: 45000,
    });

    console.log("상품 수정:", updatedProduct);

    // 5. 상품 삭제 (DELETE)
    const deletedProduct = await deleteProduct(productId);
    console.log("상품 삭제:", deletedProduct);
  } catch (error) {
    console.error("Product 테스트 실패:", error.message);
  }
}

// 전체 테스트 실행
async function main() {
  await testArticle();
  await testProduct();
}

main().catch((error) => {
  console.error("전체 실행 오류:", error.message);
});
