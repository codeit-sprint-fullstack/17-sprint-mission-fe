import { useState } from "react";
import { HeartIcon } from "./Icons";
import logo from "../../images/logo/panda-market-logo.png";

const numberFormat = new Intl.NumberFormat("ko-KR");

export default function ProductCard({ product, priority = false }) {
  const [failedSource, setFailedSource] = useState(null);
  const image = product.images[0];
  const hasImage = image && image !== failedSource;

  return (
    <article className="product-card">
      <div className="product-card__image">
        {hasImage ? (
          <img
            src={image}
            alt={product.name}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onError={() => setFailedSource(image)}
          />
        ) : (
          <div
            className="product-placeholder"
            role="img"
            aria-label={`${product.name}, 등록된 이미지 없음`}
          >
            <img src={logo} alt="" />
            <span>이미지 준비 중</span>
          </div>
        )}
      </div>
      <h3 className="product-card__name" title={product.name}>
        {product.name}
      </h3>
      <p className="product-card__price">
        {numberFormat.format(product.price)}원
      </p>
      <p className="product-card__favorites">
        <HeartIcon />
        <span className="sr-only">좋아요 </span>
        {numberFormat.format(product.favoriteCount)}
      </p>
    </article>
  );
}
