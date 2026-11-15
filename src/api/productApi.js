import { api } from './client';

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = '',
} = {}) {
  const res = await api.get('/products', {
    params: { page, pageSize, orderBy, keyword },
  });
  return res.data;
}
