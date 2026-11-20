import { apiClient } from "./baseURL";

export default async function getProduct(page, pageSize, orderBy, keyword) {
  const response = await apiClient.get("/items", {
    params: { page, pageSize, orderBy, keyword },
  });
  return response.data;
}

export async function createProduct(product) {
  const response = await apiClient.post("/items", product);
  return response.data;
}
