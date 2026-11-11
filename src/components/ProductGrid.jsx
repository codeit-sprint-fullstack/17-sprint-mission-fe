import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  isLoading,
  error,
  refetch,
  count,
  best = false,
  keyword = "",
  onClear,
}) {
  const className = `product-grid ${best ? "product-grid--best" : "product-grid--all"}`;
  if (error)
    return (
      <div className="product-state" role="alert">
        <p>상품을 불러오지 못했어요.</p>
        <span>잠시 후 다시 시도해 주세요.</span>
        <button type="button" className="retry-button" onClick={refetch}>
          다시 시도
        </button>
      </div>
    );
  if (isLoading)
    return (
      <div aria-busy="true">
        <span className="sr-only" role="status">
          상품을 불러오는 중입니다.
        </span>
        <div className={className} aria-hidden="true">
          {Array.from({ length: count }, (_, index) => (
            <div className="product-skeleton" key={index}>
              <div />
              <span />
              <span />
              <span />
            </div>
          ))}
        </div>
      </div>
    );
  if (!products.length)
    return (
      <div className="product-state" role="status">
        <p>
          {keyword
            ? `“${keyword}” 검색 결과가 없어요.`
            : "아직 등록된 상품이 없어요."}
        </p>
        {keyword ? (
          <>
            <span>다른 검색어로 다시 찾아보세요.</span>
            <button type="button" className="retry-button" onClick={onClear}>
              전체 상품 보기
            </button>
          </>
        ) : null}
      </div>
    );
  return (
    <div className={className}>
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={best && index === 0}
        />
      ))}
    </div>
  );
}
