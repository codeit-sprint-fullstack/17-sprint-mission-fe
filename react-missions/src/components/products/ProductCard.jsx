import { useState } from "react";

const brokenPlaceholderHosts = /^https?:\/\/(?:www\.)?(?:test\.com|loremflickr\.com)(?=[:/?#]|$)/i;

export default function ProductCard({ product, isBest = false, favorite, onFavorite }) {
  const [failedImage, setFailedImage] = useState(null);
  const image = product.images?.[0];
  const hasImage = Boolean(image) && !brokenPlaceholderHosts.test(image) && failedImage !== image;
  return (
    <>
      <div
        className={`product-image${isBest ? " best-product-image" : ""}${hasImage ? "" : " no-image"}`}
      >
        {hasImage ? (
          <img
            src={image}
            alt={product.name}
            loading="lazy"
            onError={() => setFailedImage(image)}
          />
        ) : (
          <span>상품 이미지 없음</span>
        )}
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
            <span className="best-product-like-label">좋아요 </span>
            {product.favoriteCount + (favorite ? 1 : 0)}
          </span>
        </button>
      </div>
    </>
  );
}
