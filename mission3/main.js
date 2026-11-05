import * as articles from "./ArticleService.js";
import * as products from "./ProductService.js";

function show(label, data) {
  console.log(label, data);
  document.querySelector("#result").textContent += `${label}\n${JSON.stringify(data, null, 2)}\n\n`;
}
function check(condition, message) {
  if (!condition) throw new Error(message);
}

// 게시글 실행은 .then()과 .catch()로 연결합니다.
function runArticles() {
  let id;
  const title = `미션3 게시글 ${Date.now()}`;
  return articles.createArticle({ title, content: "API 연습 게시글", image: "https://placehold.co/600x400/png" })
    .then((data) => {
      id = data.id;
      show("게시글 생성", data);
      return articles.getArticleList(1, 10, title);
    })
    .then((data) => {
      check(data.list.some((item) => item.id === id), "게시글 검색 확인 실패");
      show("게시글 검색", data);
      return articles.getArticle(id);
    })
    .then((data) => {
      check(data.id === id, "게시글 ID 불일치");
      show("게시글 상세", data);
      return articles.patchArticle(id, { content: "수정 확인 완료" });
    })
    .then(() => articles.getArticle(id))
    .then((data) => {
      check(data.content === "수정 확인 완료", "게시글 수정 확인 실패");
      show("게시글 수정 후 재조회", data);
    })
    .finally(() => {
      // 이번 실행에서 직접 만든 데이터만 정리합니다.
      if (id !== undefined) return articles.deleteArticle(id).then((data) => {
        check(data.id === id, "게시글 삭제 ID 불일치");
        show("게시글 삭제", data);
      });
    })
    .catch((error) => { throw error; });
}

async function runProducts() {
  let id;
  const name = `미션3상품${Date.now()}`;
  try {
    const created = await products.createProduct({
      name, description: "API 연습 상품", price: 10000,
      tags: ["미션3", "연습"], images: ["https://placehold.co/600x400/png"],
    });
    id = created.id;
    show("상품 생성", created);
    const list = await products.getProductList(1, 10, name);
    check(list.list.some((item) => item.id === id), "상품 검색 확인 실패");
    show("상품 검색", list);
    const detail = await products.getProduct(id);
    check(detail.id === id, "상품 ID 불일치");
    show("상품 상세", detail);
    await products.patchProduct(id, { price: 12000 });
    const updated = await products.getProduct(id);
    check(updated.price === 12000, "상품 수정 확인 실패");
    show("상품 수정 후 재조회", updated);
  } finally {
    if (id !== undefined) {
      const deleted = await products.deleteProduct(id);
      check(deleted.id === id, "상품 삭제 ID 불일치");
      show("상품 삭제", deleted);
    }
  }
}

async function run(mode) {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => { button.disabled = true; });
  document.querySelector("#result").textContent = "";
  try {
    if (mode === "all") {
      await runArticles();
      await runProducts();
      show("완료", "함수 10개의 실행과 수정 결과를 확인했습니다.");
    } else {
      show("게시글 목록", await articles.getArticleList(1, 10, ""));
      show("상품 목록", await products.getProductList(1, 10, ""));
    }
  } catch (error) {
    show("실행 실패", error.message);
  } finally {
    buttons.forEach((button) => { button.disabled = false; });
  }
}

document.querySelector("#list-button").addEventListener("click", () => run("list"));
document.querySelector("#all-button").addEventListener("click", () => run("all"));
run("list");
