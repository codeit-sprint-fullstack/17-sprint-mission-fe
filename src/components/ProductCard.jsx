import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const image = product.images?.[0] || product.image;
  const price = Number(product.price ?? 0).toLocaleString("ko-KR");

  return (
    <Link className="product-card" to={`/products/${product.id}`}>
      <div className="product-image">
        {image ? (
          <img
            src={image}
            alt={product.name || "상품 이미지"}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
              event.currentTarget.parentElement.classList.add("image-failed");
            }}
          />
        ) : (
          <span>이미지 없음</span>
        )}
      </div>
      <div className="product-name">{product.name || "상품명 없음"}</div>
      <strong className="product-price">{price}원</strong>
      <div className="product-like">
        ♡ {product.favoriteCount ?? product.favorites ?? 0}
      </div>
    </Link>
  );
}
