import axiosInstance from './axiosInstance'
import { ORDER_BY } from '../constants/product'

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = ORDER_BY.RECENT,
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
