import { useState } from "react";
import { HeartIcon } from "./Icons";
import logo from "../../images/logo/panda-market-logo.png";

const numberFormat = new Intl.NumberFormat("ko-KR");

export default function ProductCard({ product, priority = false }) {
  // 이 상품의 화면 표시만 바꿉니다. API 원본과 검색·정렬 기준은 유지합니다.
  const isCohortProduct =
    product.id === 900 && product.name === "스프린트 프론트엔드 21기 화이팅";
  const displayName = isCohortProduct
    ? "스프린트 프론트엔드 17기 화이팅"
    : product.name;
  const displayPrice = isCohortProduct ? 17_000_000_000 : product.price;
  const [failedSource, setFailedSource] = useState(null);
  const image = isCohortProduct
    ? "/market-assets/panda-cohort17-cash.png"
    : product.images[0]?.trim();
  const imageAlt = isCohortProduct
    ? `${displayName}, 돈다발을 든 판다`
    : displayName;
  const hasImage = image && image !== failedSource;
  const imageMessage = image
    ? "사진을 불러오지 못했어요"
    : "등록된 사진이 없어요";

  return (
    <article className="product-card">
      <div className="product-card__image">
        {hasImage ? (
          <img
            src={image}
            alt={imageAlt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onError={() => setFailedSource(image)}
          />
        ) : (
          <div
            className="product-placeholder"
            role="img"
            aria-label={`${displayName}, ${imageMessage}`}
          >
            <img src={logo} alt="" />
            <span>{imageMessage}</span>
          </div>
        )}
      </div>
      <h3 className="product-card__name" title={displayName}>
        {displayName}
      </h3>
      <p className="product-card__price">
        {numberFormat.format(displayPrice)}원
      </p>
      <p className="product-card__favorites">
        <HeartIcon />
        <span className="sr-only">좋아요 </span>
        {numberFormat.format(product.favoriteCount)}
      </p>
    </article>
  );
}
