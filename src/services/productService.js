import axios from "axios";

// Express 서버와 통신하기 위한 Axios 인스턴스
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
});

// 상품 목록 조회
export async function getProducts({
  page = 1,
  pageSize = 10,
  keyword = "",
  orderBy = "recent",
  signal,
} = {}) {
  // 페이지 번호를 offset으로 변환
  const offset = (page - 1) * pageSize;

  // Express 서버에 GET 요청
  const { data } = await api.get("/api/products", {
    params: {
      offset,
      limit: pageSize,
      orderBy,
      ...(keyword.trim() ? { keyword: keyword.trim() } : {}),
    },
    signal,
  });

  // 서버의 응답 데이터를 반환
  return {
    list: data.list ?? [],
    totalCount: Number(data.totalCount ?? 0),
  };
}

// 상품 상세 조회
export async function getProduct(id, signal) {
  const { data } = await api.get(`/api/products/${id}`, {
    signal,
  });

  return data;
}
