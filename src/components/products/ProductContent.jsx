import ProductCard from "./ProductCard";

export default function ProductContent({ products, error, loading }) {
  if (loading) {
    return <p className="product-error">상품을 불러오는 중입니다...</p>;
  }

  //   api 요청이 4~500번대 일 때
  if (error) {
    return (
      <p className="product-error">
        상품을 불러오지 못했습니다. (오류코드: {error})
      </p>
    );
  }

  // 검색한 상품이 없을 때
  if (products.length === 0) {
    return <p className="product-error">해당 검색 상품이 없습니다.</p>;
  }

  return products.map((item) => <ProductCard key={item.id} products={item} />);
}
