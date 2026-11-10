import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";

import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";

// 상품 목록 불러오기
// console.log("상품 목록\n", await getProductList());

// 특정 아이디 상품 찾기
// console.log("\n\n\n 에그타르트 상품", await getProduct(4566));

// 상품 추가하기
// 상품명, 설명, 가격, 태그, 이미지
// const eggtart = await createProduct(
//   "에그타르트",
//   "둘이 먹다 하나 죽어도 모를정도로 존맛",
//   4500,
//   "디저트",
//   "https://wtable.co.kr/recipes/BBammMmQZwMjRrLytGfvqguz",
// );

// console.log("\n\n", eggtart);

// 상품 삭제하기
// console.log("\n\n 삭제 확인: ", await deleteProduct(4582));

// console.log(
//   "\n\n 삭제확인: ",
//   await Promise.all([deleteProduct(4562), deleteProduct(4561)]),
// );

// 상품 수정하기
// const productData = { tags: "간식" };
// const change = await patchProduct(4563, productData);

// console.log("\n\n 수정 확인:", change);

// 게시글 목록 불러오기
// console.log("게시글 목록: ", await getArticleList());

// 특정 게시글 확인
// console.log("특정 게시글 확인: ", await getArticle(7331));

// 게시글 생성
// const like3 = await createArticle(
//   "likelikelike",
//   "'좋아해' 란 그 말, 그 말은 너무 짧아",
//   "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/087/694/887/87694887_1780278093530_1_600x600.JPG/dims/resize/Q_80,0",
// );

// console.log("\n\n 추가한 게시글: ", like3);

// 게시글 수정
// const articleData = { title: "락삼이" };
// console.log("\n\n 수정한 게시글: ", await patchArticle(7333, articleData));

// 게시글 삭제
// console.log("\n\n 삭제한 게시글: ", await deleteArticle(7333));
