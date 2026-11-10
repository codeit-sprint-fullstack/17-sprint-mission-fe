const PRODUCTS_URL = "https://panda-market-api.vercel.app/products";

function positiveInteger(value, fallback) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(1, Math.trunc(number)) : fallback;
}

function isProduct(product) {
  return (
    product !== null &&
    typeof product === "object" &&
    Number.isInteger(product.id) &&
    typeof product.name === "string" &&
    Number.isFinite(product.price) &&
    product.price >= 0
  );
}

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
  signal,
} = {}) {
  if (!["recent", "favorite"].includes(orderBy)) {
    throw new TypeError("지원하지 않는 상품 정렬 기준입니다.");
  }

  const query = new URLSearchParams({
    page: String(positiveInteger(page, 1)),
    pageSize: String(positiveInteger(pageSize, 10)),
    orderBy,
  });
  const search = String(keyword ?? "").trim();
  if (search) query.set("keyword", search);

  const response = await fetch(`${PRODUCTS_URL}?${query}`, { signal });
  if (!response.ok) {
    throw new Error(
      `상품을 불러오지 못했어요. 잠시 후 다시 시도해 주세요. (${response.status})`,
    );
  }

  const data = await response.json();
  if (
    !data ||
    !Array.isArray(data.list) ||
    !Number.isInteger(data.totalCount) ||
    data.totalCount < 0 ||
    !data.list.every(isProduct)
  ) {
    throw new Error("상품 정보의 형식이 올바르지 않아요. 다시 시도해 주세요.");
  }

  return {
    totalCount: data.totalCount,
    list: data.list.map((product) => ({
      ...product,
      images: Array.isArray(product.images)
        ? product.images.filter((image) => typeof image === "string")
        : [],
      favoriteCount: Number.isFinite(product.favoriteCount)
        ? Math.max(0, product.favoriteCount)
        : 0,
    })),
  };
}
