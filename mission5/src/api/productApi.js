import api from './api.js';
export async function getProducts(params,signal) {
  const response=await api.get('/products',{params,signal});
  return response.data;
}
export async function getProduct(id) {
  const response=await api.get(`/products/${id}`);
  return response.data;
}
export async function createProduct(payload) {
  const response=await api.post('/products',payload);
  return response.data;
}
