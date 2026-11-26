// 상품 카드
// - 이미지가 없거나 깨지면 기본 이미지(public/no-image.svg)를 보여준다.

export default function ProductCard({ product }) {
  const { name, price } = product;

  return (
    <div className="card">
      <img className="card-img" src="/no-image.svg" alt="" />
      <p className="card-name">{name}</p>
      <p className="card-price">{price.toLocaleString()}원</p>
    </div>
  );
}
