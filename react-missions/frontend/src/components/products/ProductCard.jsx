export default function ProductCard({ product, isBest = false, favorite, onFavorite }) {
  return (
    <>
      <div className={isBest ? "product-image best-product-image" : "product-image"}>
        <img src="/default-product.svg" alt="" width="220" height="220" loading="lazy" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">
          {product.price.toLocaleString("ko-KR")}원
        </p>
        <button
          type="button"
          className={`product-like${favorite ? " on" : ""}`}
          aria-label={`${product.name} 좋아요${favorite ? " 취소" : ""}`}
          aria-pressed={Boolean(favorite)}
          onClick={() => onFavorite(product.id)}
        >
          <span className="product-like-button">
            <svg
              className="product-like-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
            </svg>
          </span>
          <span className="product-like-count">
            {(product.favoriteCount ?? 0) + (favorite ? 1 : 0)}
          </span>
        </button>
      </div>
    </>
  );
}
