import axios from "axios";

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

  // params에 넣은 값은 Axios가 URL의 쿼리 문자열로 변환해 줍니다.
  const params = {
    page: positiveInteger(page, 1),
    pageSize: positiveInteger(pageSize, 10),
    orderBy,
  };
  const search = String(keyword ?? "").trim();
  if (search) params.keyword = search;

  let response;
  try {
    response = await axios.get(PRODUCTS_URL, { params, signal });
  } catch (error) {
    // 검색어나 페이지가 바뀌어 취소한 요청은 일반 오류로 바꾸지 않습니다.
    if (axios.isCancel(error) || error?.name === "AbortError" || signal?.aborted) {
      throw error;
    }
    const status = error?.response?.status;
    throw new Error(
      status
        ? `상품을 불러오지 못했어요. 잠시 후 다시 시도해 주세요. (${status})`
        : "상품을 불러오지 못했어요. 인터넷 연결을 확인하고 다시 시도해 주세요.",
      { cause: error },
    );
  }

  // Axios는 JSON을 자동 변환하므로 실제 상품 정보는 response.data에 있습니다.
  const data = response.data;
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
