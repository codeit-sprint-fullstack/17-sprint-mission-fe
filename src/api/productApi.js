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
