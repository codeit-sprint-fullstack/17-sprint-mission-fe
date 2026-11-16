import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

export default function BestProducts({ pageSize }) {
  const { list, loading, error } = useProducts({
    page: 1,
    pageSize,
    orderBy: "favorite",
  });
  return (
    <section className="best-section">
      <h2>베스트 상품</h2>
      {loading ? (
        <p className="status">불러오는 중...</p>
      ) : error ? (
        <p className="status error">베스트 상품 오류: {error}</p>
      ) : list.length === 0 ? (
        <p className="status">베스트 상품이 없습니다.</p>
      ) : (
        <div className="best-grid">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
