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

// 게시글 함수 5개를 순서대로 실행하기
function runArticles() {
  let articleId;

  return getArticleList(1, 3, "코드잇")
    .then((data) => {
      console.log("[1/10] 게시글 목록:", data);

      return createArticle({
        title: "WonPro 미션3 테스트",
        content: "게시글 기능을 확인하기 위한 테스트입니다",
        image: "https://example.com/test.png",
      });
    })
    .then((data) => {
      articleId = data.id;
      console.log("[2/10] 게시글 등록:", data);

      return getArticle(articleId);
    })
    .then((data) => {
      console.log("[3/10] 게시글 상세:", data);

      return patchArticle(articleId, {
        title: "WonPro 미션3 수정 테스트",
      });
    })
    .then((data) => {
      console.log("[4/10] 게시글 수정:", data);

      return deleteArticle(articleId);
    })
    .then((data) => {
      console.log("[5/10] 게시글 삭제:", data);
    });
}

// 상품 함수 5개를 순서대로 실행하기
async function runProducts() {
  try {
    const list = await getProductList(2, 2, "상품");
    console.log("[6/10] 상품 목록:", list);

    const product = await createProduct({
      name: "WonPro 미션3 테스트 상품",
      description: "상품 기능을 확인하기 위한 테스트입니다",
      price: 10000,
      tags: ["미션3", "테스트"],
      images: ["https://example.com/product-test.png"],
    });
    console.log("[7/10] 상품 등록:", product);

    const detail = await getProduct(product.id);
    console.log("[8/10] 상품 상세:", detail);

    const updated = await patchProduct(product.id, {
      price: 15000,
    });
    console.log("[9/10] 상품 수정:", updated);

    const deleted = await deleteProduct(product.id);
    console.log("[10/10] 상품 삭제:", deleted);
  } catch (error) {
    console.log("상품 실행 중 오류가 발생했습니다");
    throw error;
  }
}

// 게시글 실행이 끝나면 상품 실행하기
runArticles()
  .then(runProducts)
  .then(() => {
    console.log("10개 함수 실행 완료");
  })
  .catch(() => {
    console.log("실행이 중단됐습니다 위 오류 메시지를 확인해 주세요");
    process.exitCode = 1;
  });
