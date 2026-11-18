export async function getProducts({ page, pageSize, keyword, signal }) {
  const query = new URLSearchParams({ page, pageSize, keyword })
  const response = await fetch(`/api/products?${query}`, { signal })

  if (!response.ok) throw new Error('상품을 불러오지 못했습니다.')
  return response.json()
}

export async function createProduct(product) {
  const response = await fetch('/api/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  })
  if (!response.ok) throw new Error('상품 등록에 실패했습니다.')
  return response.json()
}
