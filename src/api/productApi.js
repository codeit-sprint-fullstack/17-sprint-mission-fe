import { request } from './request.js';

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = '',
} = {}) {
  const params = { page, pageSize, orderBy };
  if (keyword) params.keyword = keyword;

  return request({ method: 'GET', url: '/products', params });
}

export async function createProduct({ name, description, price, tags }) {
  return request({
    method: 'POST',
    url: '/products',
    data: { name, description, price, tags },
  });
}
