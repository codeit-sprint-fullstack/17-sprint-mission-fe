// 상품 목록 가져오기
export async function getProductList(page = 1, pageSize = 10, keyword = '') {
  try {
    const query = new URLSearchParams({ page, pageSize, keyword });

    const response = await fetch(
      `https://panda-market-api-crud.vercel.app/products?${query}`
    );

    if (!response.ok) {
      throw new Error(`상품 목록 조회 실패: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

// 상품 하나 가져오기
export async function getProduct(productId) {
  try {
    const response = await fetch(
      `https://panda-market-api-crud.vercel.app/products/${productId}`
    );

    if (!response.ok) {
      throw new Error(`상품 상세 조회 실패: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

// 새 상품 등록하기
export async function createProduct({ name, description, price, tags, images }) {
  try {
    const response = await fetch(
      'https://panda-market-api-crud.vercel.app/products',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, price, tags, images }),
      }
    );

    if (!response.ok) {
      throw new Error(`상품 등록 실패: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

// 상품 일부 수정하기
export async function patchProduct(productId, updates) {
  try {
    const response = await fetch(
      `https://panda-market-api-crud.vercel.app/products/${productId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      }
    );

    if (!response.ok) {
      throw new Error(`상품 수정 실패: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

// 상품 삭제하기
export async function deleteProduct(productId) {
  try {
    const response = await fetch(
      `https://panda-market-api-crud.vercel.app/products/${productId}`,
      {
        method: 'DELETE',
      }
    );

    if (!response.ok) {
      throw new Error(`상품 삭제 실패: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}