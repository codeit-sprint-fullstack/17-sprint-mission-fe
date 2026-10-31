import axios from "axios";

// Axios 인스턴스 생성
const instance = axios.create({
  baseURL: "https://panda-market-api-crud.vercel.app",
  timeout: 7000,
});

// 1. 상품 목록 조회 (GET)
export async function getProductList(page = 1, pageSize = 10, keyword = "") {
  try {
    const res = await instance.get("/products", {
      params: {
        page,
        pageSize,
        keyword,
      },
    });

    return res.data;
  } catch (error) {
    if (error.response) {
      console.error("상태 코드:", error.response.status);
      console.error("에러 내용:", error.response.data);
    } else {
      console.error("요청 실패:", error.message);
    }

    throw error;
  }
}

// 2. 상품 상세 조회 (GET)
export async function getProduct(id) {
  try {
    const res = await instance.get(`/products/${id}`);

    return res.data;
  } catch (error) {
    if (error.response) {
      console.error("상태 코드:", error.response.status);
      console.error("에러 내용:", error.response.data);
    } else {
      console.error("요청 실패:", error.message);
    }

    throw error;
  }
}

// 3. 상품 생성 (POST)
export async function createProduct(data) {
  try {
    const res = await instance.post("/products", data);

    return res.data;
  } catch (error) {
    if (error.response) {
      console.error("상태 코드:", error.response.status);
      console.error("에러 내용:", error.response.data);
    } else {
      console.error("요청 실패:", error.message);
    }

    throw error;
  }
}

// 4. 상품 수정 (PATCH)
export async function patchProduct(id, data) {
  try {
    const res = await instance.patch(`/products/${id}`, data);

    return res.data;
  } catch (error) {
    if (error.response) {
      console.error("상태 코드:", error.response.status);
      console.error("에러 내용:", error.response.data);
    } else {
      console.error("요청 실패:", error.message);
    }

    throw error;
  }
}

// 5. 상품 삭제 (DELETE)
export async function deleteProduct(id) {
  try {
    const res = await instance.delete(`/products/${id}`);

    return res.data;
  } catch (error) {
    if (error.response) {
      console.error("상태 코드:", error.response.status);
      console.error("에러 내용:", error.response.data);
    } else {
      console.error("요청 실패:", error.message);
    }

    throw error;
  }
}
