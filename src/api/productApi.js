import { api } from './client';

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword,
} = {}) {
  const res = await api.get('/products', {
    params: { page, pageSize, orderBy, keyword: keyword || undefined },
  });
  return res.data;
}

export async function createProduct({ name, description, price, tags }) {
  const res = await api.post('/products', { name, description, price, tags });
  return res.data;
}
