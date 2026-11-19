import axiosInstance from './axiosInstance'

export async function getProducts({ page = 1, pageSize = 10, keyword, signal } = {}) {
  const params = { page, pageSize }
  if (keyword) {
    params.keyword = keyword
  }

  const res = await axiosInstance.get('/products', { params, signal })
  return res.data
}

export async function createProduct(body) {
  const res = await axiosInstance.post('/products', body)
  return res.data
}