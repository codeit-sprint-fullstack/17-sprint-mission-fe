import { getProduct } from "./ProductService.js";

try {
  const data = await getProduct(4614);
  console.log("조회된 상품:", data);
} catch {
  console.log("조회 실패를 catch에서 처리했습니다");
}
