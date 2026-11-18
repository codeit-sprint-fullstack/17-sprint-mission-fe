const endpoint = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "") + "/products";

async function request(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "요청을 처리하지 못했어요.");
  }
  return response.json();
}

export function listProducts(page, limit, keyword, signal) {
  const query = new URLSearchParams({ offset: (page - 1) * limit, limit, orderBy: "recent", keyword });
  return request(`${endpoint}?${query}`, { signal });
}

export function createProduct(product) {
  return request(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
}
