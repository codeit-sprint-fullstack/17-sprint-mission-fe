const apiUrl = (import.meta.env.VITE_API_URL ?? '').trim().replace(/\/+$/, '')
const productsUrl = `${apiUrl}/products`

export async function getProducts({ page, pageSize, keyword, signal }) {
  const query = new URLSearchParams({
    offset: (page - 1) * pageSize,
    limit: pageSize,
    orderBy: 'recent',
    keyword,
  })
  const response = await fetch(`${productsUrl}?${query}`, { signal })

  if (!response.ok) throw new Error('상품을 불러오지 못했습니다.')
  return response.json()
}

export async function createProduct(product) {
  const response = await fetch(productsUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  })
  if (!response.ok) throw new Error('상품 등록에 실패했습니다.')
  return response.json()
}
