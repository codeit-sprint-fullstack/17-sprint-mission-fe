import {
  createArticle,
  deleteArticle,
  getArticle,
  getArticleList,
  patchArticle,
} from "./ArticleService.js";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProductList,
  patchProduct,
} from "./ProductService.js";

// 읽기 전용 요청은 페이지 로드 시 실행해 API 응답을 확인합니다.
const articleScenarios = [
  {
    given: "게시글 목록 조회 조건(page 1, 10개)이 주어졌을 때",
    when: "getArticleList()를 실행하면",
    then: "게시글 목록이 반환된다",
    run: () => getArticleList({ page: 1, pageSize: 10, keyword: "" }),
    saveAs: "articles",
  },
  {
    given: "게시글 목록에 첫 번째 게시글이 있을 때",
    when: "그 게시글 ID로 getArticle()을 실행하면",
    then: "해당 게시글 정보가 반환된다",
    run: (context) => {
      const articleId = context.articles.list[0]?.id;
      return articleId == null ? null : getArticle(articleId);
    },
  },
];

const productScenarios = [
  {
    given: "상품 목록 조회 조건(page 1, 10개)이 주어졌을 때",
    when: "getProductList()를 실행하면",
    then: "상품 목록이 반환된다",
    run: () => getProductList({ page: 1, pageSize: 10, keyword: "" }),
    saveAs: "products",
  },
  {
    given: "상품 목록에 첫 번째 상품이 있을 때",
    when: "그 상품 ID로 getProduct()를 실행하면",
    then: "해당 상품 정보가 반환된다",
    run: (context) => {
      const productId = context.products.list[0]?.id;
      return productId == null ? null : getProduct(productId);
    },
  },
];

async function runBddScenarios(resourceName, scenarios) {
  const context = {};

  for (const scenario of scenarios) {
    console.group(`${resourceName} BDD 시나리오`);
    console.log(`Given: ${scenario.given}`);
    console.log(`When: ${scenario.when}`);
    console.log(`Then: ${scenario.then}`);

    try {
      const result = await scenario.run(context);
      if (scenario.saveAs) context[scenario.saveAs] = result;
      console.log(
        "실제 결과:",
        result === null ? "조회할 항목이 목록에 없습니다." : result,
      );
    } catch (error) {
      console.error("실행 오류:", error);
    } finally {
      console.groupEnd();
    }
  }
}

runBddScenarios("Article", articleScenarios);
runBddScenarios("Product", productScenarios);

// CRUD 데모는 원격 데이터에 쓰기 때문에 콘솔에서 수동 실행합니다.
window.runArticleCrudDemo = async function runArticleCrudDemo() {
  let articleId;
  try {
    const created = await createArticle({
      title: "CRUD API 확인용 게시글",
      content: "확인 후 삭제되는 테스트 게시글입니다.",
      image: "https://example.com/mission3-crud-test.png",
    });
    articleId = created.id;
    if (articleId == null) throw new Error("게시글 생성 응답에 id가 없습니다.");
    console.log("생성한 Article:", created);
    console.log("상세 Article:", await getArticle(articleId));
    console.log(
      "수정한 Article:",
      await patchArticle(articleId, { title: "수정된 CRUD API 확인용 게시글" }),
    );
  } catch (error) {
    console.error("Article CRUD 데모 실패:", error);
  } finally {
    if (articleId !== undefined) {
      try {
        console.log("Article 삭제 결과:", await deleteArticle(articleId));
      } catch (error) {
        console.error("Article 테스트 데이터 삭제 실패:", error);
      }
    }
  }
};

window.runProductCrudDemo = async function runProductCrudDemo() {
  let productId;
  try {
    const created = await createProduct({
      name: "CRUD 확인 상품",
      description: "확인 후 삭제되는 테스트 상품입니다.",
      price: 1000,
      tags: ["test"],
      images: [],
    });
    productId = created.id;
    if (productId == null) throw new Error("상품 생성 응답에 id가 없습니다.");
    console.log("생성한 Product:", created);
    console.log("상세 Product:", await getProduct(productId));
    console.log(
      "수정한 Product:",
      await patchProduct(productId, { name: "수정된 CRUD 확인 상품" }),
    );
  } catch (error) {
    console.error("Product CRUD 데모 실패:", error);
  } finally {
    if (productId !== undefined) {
      try {
        console.log("Product 삭제 결과:", await deleteProduct(productId));
      } catch (error) {
        console.error("Product 테스트 데이터 삭제 실패:", error);
      }
    }
  }
};
