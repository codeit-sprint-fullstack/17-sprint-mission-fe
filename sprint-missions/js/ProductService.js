import axios from 'axios';

// 상품 목록 조회
export async function getProductList(page, pageSize, keyword) {
  try {
    const response = await axios.get(
      'https://panda-market-api-crud.vercel.app/products',
      {
        params: { page, pageSize, keyword }
      }
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('오류 상태 코드:', error.response.status);
      console.error('오류 메시지:', error.message);
    } else {
      console.error('요청 실패:', error.message);
    }
  }
}

// 상품 상세 조회
export async function getProduct(productId) {
  try {
    const response = await axios.get(
      `https://panda-market-api-crud.vercel.app/products/${productId}`
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('오류 상태 코드:', error.response.status);
      console.error('오류 메시지:', error.message);
    } else {
      console.error('요청 실패:', error.message);
    }
  }
}

// 상품 등록
export async function createProduct(name, description, price, tags, images) {
  try {
    const response = await axios.post(
      'https://panda-market-api-crud.vercel.app/products',
      { name, description, price, tags, images }
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('오류 상태 코드:', error.response.status);
      console.error('오류 메시지:', error.message);
    } else {
      console.error('요청 실패:', error.message);
    }
  }
}

// 상품 수정
export async function patchProduct(productId, name, description, price, tags, images) {
  try {
    const response = await axios.patch(
      `https://panda-market-api-crud.vercel.app/products/${productId}`,
      { name, description, price, tags, images }
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('오류 상태 코드:', error.response.status);
      console.error('오류 메시지:', error.message);
    } else {
      console.error('요청 실패:', error.message);
    }
  }
}

// 상품 삭제
export async function deleteProduct(productId) {
  try {
    const response = await axios.delete(
      `https://panda-market-api-crud.vercel.app/products/${productId}`
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('오류 상태 코드:', error.response.status);
      console.error('오류 메시지:', error.message);
    } else {
      console.error('요청 실패:', error.message);
    }
  }
}