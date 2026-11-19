import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard.jsx";
import Pagination from "./components/Pagination.jsx";
import usePageSize from "./hooks/usePageSize.js";
import useProducts from "./hooks/useProducts.js";

export default function Market2() {
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const pageSize = usePageSize({ mobile: 4, tablet: 6, desktop: 10 });

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  const { products, totalCount, loading, error } = useProducts({
    page,
    pageSize,
    keyword,
  });

  function handleSearch(event) {
    event.preventDefault();
    setKeyword(search);
    setPage(1);
  }

  return (
    <div>
      <div className="market-toolbar">
        <h4 className="market-title">판매 중인 상품</h4>
        <form onSubmit={handleSearch}>
          <input
            placeholder="검색할 상품을 입력해주세요"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </form>
        <button
          type="button"
          className="primary"
          onClick={() => window.location.assign("/registration")}
        >
          상품 등록하기
        </button>
        <select aria-label="상품 정렬" defaultValue="recent">
          <option value="recent">최신순</option>
        </select>
      </div>

      {loading && <p>데이터를 불러오는 중...</p>}
      {error && <p className="error">오류 발생: {error}</p>}
      {!loading && !error && products.length === 0 && (
        <p>검색 결과가 없습니다.</p>
      )}

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        page={page}
        totalPages={Math.ceil(totalCount / pageSize)}
        onChange={setPage}
      />
    </div>
  );
}
