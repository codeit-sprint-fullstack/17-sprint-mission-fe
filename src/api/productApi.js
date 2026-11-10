import { apiUrl } from "./baseURL";

export default async function getProduct() {
  const response = await apiUrl.get("/products");
  return response.data;
}
