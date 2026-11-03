// API 명세: https://panda-market-api-crud.vercel.app/docs/
const BASE_URL = "https://panda-market-api-crud.vercel.app";

// GET /products
export async function getProductList(page = 1, pageSize = 10, keyword = "") {
  const params = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    keyword,
  });
  try {
    const response = await fetch(`${BASE_URL}/products?${params}`, { method: "GET" });
    if (!response.ok) {
      throw new Error(`getProductList 실패: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

// GET /products/{productId}
export async function getProduct(productId) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, { method: "GET" });
    if (!response.ok) {
      throw new Error(`getProduct 실패: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

// POST /products
export async function createProduct({ name, description, price, tags, images }) {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, price, tags, images }),
    });
    if (!response.ok) {
      throw new Error(`createProduct 실패: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

// PATCH /products/{productId}
export async function patchProduct(productId, updates) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    if (!response.ok) {
      throw new Error(`patchProduct 실패: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

// DELETE /products/{productId}
export async function deleteProduct(productId) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error(`deleteProduct 실패: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

