import { formatKoreanMoney, formatWon } from "./cart";

export default function SpaceSalePrice({ product, detail = false }) {
  const { price, originalPrice } = product;
  const discounted = Number.isSafeInteger(originalPrice) && originalPrice > 0
    && Number.isSafeInteger(price) && price >= 0 && originalPrice > price;
  if (!discounted) return <><strong>{formatKoreanMoney(price)}</strong><small>{formatWon(price)}</small></>;
  const discount = Math.round((1 - price / originalPrice) * 100);
  return (
    <div className={`space-sale-price${detail ? " space-sale-price--detail" : ""}`}>
      <div className="space-sale-comparison">
        <span className="space-sale-original">
          <span className="sr-only">정가 </span>
          <del>{formatKoreanMoney(originalPrice)}</del>
        </span>
        <span className="space-sale-arrow" aria-hidden="true">↘</span>
        <span className="space-sale-badge">{discount}% 할인</span>
      </div>
      <strong><span className="sr-only">할인가 </span>{formatKoreanMoney(price)}</strong>
      <small>{formatWon(price)}</small>
    </div>
  );
}
