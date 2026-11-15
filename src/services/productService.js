import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL || "https://panda-market-api.vercel.app",
  timeout: 10000,
});

export async function getProducts({
  page = 1,
  pageSize = 10,
  keyword = "",
  orderBy = "recent",
  signal,
} = {}) {
  const { data } = await api.get("/products", {
    params: {
      page,
      pageSize,
      orderBy,
      ...(keyword.trim() ? { keyword: keyword.trim() } : {}),
    },
    signal,
  });

  return {
    list: Array.isArray(data) ? data : (data.list ?? data.products ?? []),
    totalCount: Number(data.totalCount ?? data.total ?? 0),
  };
}

export async function getProduct(id, signal) {
  const { data } = await api.get(`/products/${id}`, { signal });
  return data;
}
