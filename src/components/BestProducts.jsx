// import testData from "./testData";
import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";

export default function BestProducts() {
  const products = useProducts();

  const sortedBest = [...products]
    .sort((a, b) => b.favoriteCount - a.favoriteCount)
    .slice(0, 4);

  return (
    <section>
      <h3>베스트 상품</h3>
      <div className="best-product">
        {sortedBest.map((item) => (
          <ProductCard key={item.id} products={item} />
        ))}
      </div>
    </section>
  );
}
