import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";

export default function BestProducts() {
  const products = useProducts(1, 4, "favorite", "");

  return (
    <section>
      <h3>베스트 상품</h3>
      <div className="best-product">
        {products.map((item) => (
          <ProductCard key={item.id} products={item} />
        ))}
      </div>
    </section>
  );
}
