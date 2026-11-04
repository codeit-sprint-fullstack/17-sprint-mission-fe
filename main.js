import { getProduct } from "./ProductService.js";

try {
  const data = await getProduct(4610);
  console.log("상품 상세:", data);
} catch {
  console.log("상품 상세 조회를 완료하지 못했습니다");
}
