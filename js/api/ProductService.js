const BASE_URL = 'https://panda-market-api-crud.vercel.app/products';

// 응답이 2XX가 아니면 에러를 던져 try/catch로 전달
function checkResponse(res) {
  if (!res.ok) {
    throw new Error(`요청 실패: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function getProductList({ page = 1, pageSize = 10, keyword } = {}) {
  try {
    const params = new URLSearchParams({ page, pageSize });
    if (keyword) {
      params.set('keyword', keyword);
    }

    const res = await fetch(`${BASE_URL}?${params}`);
    return await checkResponse(res);
  } catch (error) {
    console.error('getProductList 에러:', error.message);
    throw error;
  }
}

export async function getProduct(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    return await checkResponse(res);
  } catch (error) {
    console.error('getProduct 에러:', error.message);
    throw error;
  }
}

export async function createProduct({ name, description, price, tags, images }) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, price, tags, images }),
    });
    return await checkResponse(res);
  } catch (error) {
    console.error('createProduct 에러:', error.message);
    throw error;
  }
}

export async function patchProduct(id, data) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await checkResponse(res);
  } catch (error) {
    console.error('patchProduct 에러:', error.message);
    throw error;
  }
}

export async function deleteProduct(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
    return await checkResponse(res);
  } catch (error) {
    console.error('deleteProduct 에러:', error.message);
    throw error;
  }
}
