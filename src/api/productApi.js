import { apiClient } from "./baseURL";

export default async function getProduct(page, pageSize, orderBy, keyword) {
  const response = await apiClient.get("/items", {
    params: { page, pageSize, orderBy, keyword },
  });
  return response.data;
}
