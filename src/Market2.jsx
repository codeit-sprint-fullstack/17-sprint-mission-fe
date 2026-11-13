import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard.jsx";
import Pagination from "./components/Pagination.jsx";
import usePageSize from "./hooks/usePageSize.js";
import useProducts from "./hooks/useProducts.js";

// 5. 중고마켓 - 커스텀 hook으로 리팩토링 (Market4와 비교)
// - 조회 로직(state + useEffect)을 useProducts로 분리 -> 컴포넌트에는 화면 state만 남는다.
// - 베스트 상품, 전체 상품 모두 같은 hook을 사용 (인자만 다름)
// - loading, error 처리와 요청 취소(AbortController)는 hook 안에서 처리

export default function Market5() {
  const [orderBy, setOrderBy] = useState("recent");
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const bestPageSize = usePageSize({ mobile: 1, tablet: 2, desktop: 4 });
  const pageSize = usePageSize({ mobile: 4, tablet: 6, desktop: 10 });
  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  const best = useProducts({ pageSize: bestPageSize, orderBy: "favorite" });
  const { products, totalCount, loading, error } = useProducts({
    page,
    pageSize,
    orderBy,
    keyword,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setKeyword(search);
    setPage(1);
  };

  const handleOrderChange = (e) => {
    setOrderBy(e.target.value);
    setPage(1);
  };

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div>
      <h4 className="market-title">베스트 상품</h4>
      <div className="best-grid">
        {best.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="market-toolbar">
        <h4 className="market-title">판매 중인 상품</h4>
        <form onSubmit={handleSearch}>
          <input
            placeholder="검색할 상품을 입력해주세요"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <button className="primary">상품 등록하기</button>
        <select value={orderBy} onChange={handleOrderChange}>
          <option value="recent">최신순</option>
          <option value="favorite">좋아요순</option>
        </select>
      </div>
      {loading && <p>데이터를 불러오는 중...</p>}
      {error && <p className="error">오류 발생 : {error}</p>}
      {!loading && !error && products.length === 0 && (
        <p>검색 결과가 없습니다.</p>
      )}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}
