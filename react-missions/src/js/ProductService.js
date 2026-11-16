import axios from "axios";

// 상품 목록 조회
export async function getProductList(
  page = 1,
  pageSize = 10,
  keyword = "",
  orderBy = "recent",
  signal,
) {
  const response = await axios.get(
    "https://panda-market-api.vercel.app/products",
    {
      params: { page, pageSize, keyword, orderBy },
      signal,
    },
  );

  return response.data;
}

// API의 keyword는 설명도 검색하므로, 모든 후보를 모아 제목으로 필터링한 뒤 페이지를 나눕니다.
export async function getTitleProductList(
  page,
  pageSize,
  keyword,
  orderBy,
  signal,
) {
  const search = keyword.trim();
  if (!search) return getProductList(page, pageSize, "", orderBy, signal);

  const candidates = [];
  let candidatePage = 1;
  let totalCount;
  do {
    const data = await getProductList(
      candidatePage,
      100,
      search,
      orderBy,
      signal,
    );
    candidates.push(...data.list);
    totalCount = data.totalCount;
    if (data.list.length === 0) break;
    candidatePage += 1;
  } while (candidates.length < totalCount);

  const normalizedSearch = search.toLocaleLowerCase("ko-KR");
  const matches = candidates.filter((product) =>
    product.name.toLocaleLowerCase("ko-KR").includes(normalizedSearch),
  );
  const start = (page - 1) * pageSize;
  return {
    list: matches.slice(start, start + pageSize),
    totalCount: matches.length,
  };
}

export async function getProduct(productId) {
  try {
    const response = await axios.get(
      `https://panda-market-api-crud.vercel.app/products/${productId}`,
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("오류 상태 코드:", error.response.status);
      console.error("오류 메시지:", error.message);
    } else {
      console.error("요청 실패:", error.message);
    }
  }
}

// 상품 등록
export async function createProduct(name, description, price, tags, images) {
  try {
    const response = await axios.post(
      "https://panda-market-api-crud.vercel.app/products",
      { name, description, price, tags, images },
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("오류 상태 코드:", error.response.status);
      console.error("오류 메시지:", error.message);
    } else {
      console.error("요청 실패:", error.message);
    }
  }
}

// 상품 수정
export async function patchProduct(
  productId,
  name,
  description,
  price,
  tags,
  images,
) {
  try {
    const response = await axios.patch(
      `https://panda-market-api-crud.vercel.app/products/${productId}`,
      { name, description, price, tags, images },
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("오류 상태 코드:", error.response.status);
      console.error("오류 메시지:", error.message);
    } else {
      console.error("요청 실패:", error.message);
    }
  }
}

// 상품 삭제
export async function deleteProduct(productId) {
  try {
    const response = await axios.delete(
      `https://panda-market-api-crud.vercel.app/products/${productId}`,
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("오류 상태 코드:", error.response.status);
      console.error("오류 메시지:", error.message);
    } else {
      console.error("요청 실패:", error.message);
    }
  }
}
