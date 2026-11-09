import { makeQuery, parseApiResponse, requestApi } from "./ApiService.js";

async function requestProduct(path, options = {}, operation = "Product API") {
  try {
    const response = await requestApi(path, options);
    return await parseApiResponse(response, operation);
  } catch (error) {
    console.error(`${operation} 오류:`, error.message);
    throw error;
  }
}

export function getProductList(options = {}) {
  return requestProduct(`/products${makeQuery(options)}`, {}, "getProductList()");
}

export function getProduct(productId) {
  return requestProduct(`/products/${encodeURIComponent(productId)}`, {}, "getProduct()");
}

export function createProduct({
  name,
  description,
  price,
  tags = [],
  images = [],
}) {
  return requestProduct(
    "/products",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, price, tags, images }),
    },
    "createProduct()",
  );
}

export function patchProduct(productId, updates) {
  return requestProduct(
    `/products/${encodeURIComponent(productId)}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    },
    "patchProduct()",
  );
}

export function deleteProduct(productId) {
  return requestProduct(
    `/products/${encodeURIComponent(productId)}`,
    { method: "DELETE" },
    "deleteProduct()",
  );
}
