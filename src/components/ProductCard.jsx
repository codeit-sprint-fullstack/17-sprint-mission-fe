import { Link } from "react-router-dom";

// 프론트엔드 기본 상품 이미지
const DEFAULT_PRODUCT_IMAGE = "/images/default-product.svg";

export default function ProductCard({ product }) {
  // 가격에 천 단위 쉼표 추가
  const price = Number(product.price ?? 0).toLocaleString("ko-KR");

  return (
    <Link className="product-card" to={`/items/${product.id}`}>
      {/* 기본 상품 이미지 */}
      <div className="product-image">
        <img
          src={DEFAULT_PRODUCT_IMAGE}
          alt={`${product.name || "상품"} 기본 이미지`}
          loading="lazy"
        />
      </div>

      {/* 상품명 */}
      <div className="product-name">{product.name || "상품명 없음"}</div>

      {/* 판매 가격 */}
      <strong className="product-price">{price}원</strong>
    </Link>
  );
}
