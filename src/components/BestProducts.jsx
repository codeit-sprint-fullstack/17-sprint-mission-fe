import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";
import usePageSize from "../hooks/usePageSize";

export default function BestProducts() {
  const pageSize = usePageSize({ mobile: 1, tablet: 2, desktop: 4 });

  const { products } = useProducts(1, pageSize, "favorite", "");

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
