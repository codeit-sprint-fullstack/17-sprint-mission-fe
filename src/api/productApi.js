import { apiUrl } from "./baseURL";

export default async function getProduct(page, pageSize, orderBy, keyword) {
  const response = await apiUrl.get("/products", {
    params: { page, pageSize, orderBy, keyword },
  });
  return response.data;
}
