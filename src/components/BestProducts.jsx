import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";
import usePageSize from "../hooks/usePageSize";

export default function BestProducts() {
  const pageSize = usePageSize({ mobile: 1, tablet: 2, desktop: 4 });

  const { products, error } = useProducts(1, pageSize, "favorite", "");

  return (
    <section>
      <h3>베스트 상품</h3>
      <div className="best-product">
        {/* api 요청이 4~500번대 일 때 전자: 정상이면 :후자 */}

        {error ? (
          <p className="product-error ">
            상품을 불러오지 못했습니다. (오류코드: {error})
          </p>
        ) : (
          products.map((item) => <ProductCard key={item.id} products={item} />)
        )}
      </div>
    </section>
  );
}
