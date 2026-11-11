export async function getProducts({ page, pageSize, orderBy, keyword = '', signal }) {
  const query = new URLSearchParams({ page, pageSize, orderBy, keyword })
  const response = await fetch(`https://panda-market-api.vercel.app/products?${query}`, { signal })

  if (!response.ok) throw new Error('상품을 불러오지 못했습니다.')
  return response.json()
}
