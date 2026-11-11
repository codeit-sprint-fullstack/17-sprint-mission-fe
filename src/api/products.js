import axiosInstance from './axiosInstance'

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword,
  signal,
} = {}) {
  const params = { page, pageSize, orderBy }
  if (keyword) {
    params.keyword = keyword
  }

  const res = await axiosInstance.get('/products', { params, signal })
  return res.data
}
