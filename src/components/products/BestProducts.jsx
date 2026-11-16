import useProducts from "../../hooks/useProducts";
import usePageSize from "../../hooks/usePageSize";
import ProductContent from "./ProductContent";

export default function BestProducts() {
  const pageSize = usePageSize({ mobile: 1, tablet: 2, desktop: 4 });

  const { products, error, loading } = useProducts(1, pageSize, "favorite", "");

  return (
    <section>
      <h3>베스트 상품</h3>
      <div className="best-product">
        <ProductContent products={products} error={error} loading={loading} />
      </div>
    </section>
  );
}
