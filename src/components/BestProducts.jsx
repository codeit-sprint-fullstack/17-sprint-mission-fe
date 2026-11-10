import testData from "./testData";
import ProductCard from "./ProductCard";

export default function BestProducts() {
  const sortedBest = [...testData]
    .sort((a, b) => b.favoriteCount - a.favoriteCount)
    .slice(0, 4);

  return (
    <section>
      <h3>베스트 상품</h3>
      {sortedBest.map((item) => (
        <ProductCard key={item.id} testData={item} />
      ))}
    </section>
  );
}
