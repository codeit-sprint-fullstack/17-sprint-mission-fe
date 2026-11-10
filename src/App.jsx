import { useEffect, useState } from "react";
import { Footer, Header, ProductCard } from "./components/MarketplaceParts.jsx";
import { useMarketplaceLayout } from "./hooks/useMarketplaceLayout.js";
import { useProducts } from "./hooks/useProducts.js";

function ProductGrid({ products, loading, error, emptyMessage }) {
  if (loading) return <p className="state-message" role="status">상품을 불러오는 중입니다.</p>;
  if (error) return <p className="state-message error-message" role="alert">{error}</p>;
  if (products.length === 0) return <p className="state-message">{emptyMessage}</p>;
  return <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>;
}

function Pagination({ page, totalPages, onChange }) {
  if (totalPages < 2) return null;
  const first = Math.max(1, Math.min(page - 2, totalPages - 4));
  const pages = Array.from({ length: Math.min(5, totalPages) }, (_, index) => first + index);
  return (
    <nav className="pagination" aria-label="상품 목록 페이지">
      <button type="button" disabled={page === 1} onClick={() => onChange(page - 1)} aria-label="이전 페이지">‹</button>
      {pages.map((number) => (
        <button type="button" key={number} aria-current={page === number ? "page" : undefined} className={page === number ? "current" : ""} onClick={() => onChange(number)}>{number}</button>
      ))}
      <button type="button" disabled={page === totalPages} onClick={() => onChange(page + 1)} aria-label="다음 페이지">›</button>
    </nav>
  );
}

function App() {
  const layout = useMarketplaceLayout();
  const [searchInput, setSearchInput] = useState("");
  const [keyword, setKeyword] = useState("");
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [bestPage, setBestPage] = useState(1);
  const best = useProducts({ page: bestPage, pageSize: layout.bestPageSize, orderBy: "favorite" });
  const all = useProducts({ page, pageSize: layout.productPageSize, keyword, orderBy });
  const totalPages = Math.max(1, Math.ceil(all.totalCount / layout.productPageSize));

  useEffect(() => {
    setPage(1);
    setBestPage(1);
  }, [layout.productPageSize, layout.bestPageSize]);

  function submitSearch(event) {
    event.preventDefault();
    setKeyword(searchInput.trim());
    setPage(1);
  }

  function changeOrder(event) {
    setOrderBy(event.target.value);
    setPage(1);
  }

  return (
    <>
      <Header />
      <main className="marketplace-main">
        <section className="section best-section" aria-labelledby="best-title">
          <div className="section-heading">
            <div><span className="eyebrow">BEST</span><h2 id="best-title">베스트 상품</h2></div>
          </div>
          <ProductGrid products={best.products} loading={best.loading} error={best.error} emptyMessage="아직 등록된 상품이 없습니다." />
        </section>

        <section className="section all-section" aria-labelledby="all-title">
          <div className="section-heading all-heading">
            <div><span className="eyebrow">MARKET</span><h2 id="all-title">전체 상품</h2></div>
            <div className="catalog-controls">
              <form className="search-form" onSubmit={submitSearch} role="search">
                <label className="visually-hidden" htmlFor="product-search">상품 검색</label>
                <span className="search-symbol" aria-hidden="true">⌕</span>
                <input id="product-search" type="search" placeholder="검색할 상품을 입력해주세요" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
                <button className="visually-hidden" type="submit">검색</button>
              </form>
              <a className="register-button register-button-inline" href="/products/new">상품 등록하기</a>
              <label className="visually-hidden" htmlFor="product-order">상품 정렬</label>
              <select id="product-order" value={orderBy} onChange={changeOrder}>
                <option value="recent">최신 순</option>
                <option value="favorite">좋아요 순</option>
              </select>
            </div>
          </div>
          <ProductGrid products={all.products} loading={all.loading} error={all.error} emptyMessage={keyword ? "검색 결과가 없습니다." : "아직 등록된 상품이 없습니다."} />
          {!all.loading && !all.error && all.totalCount > 0 && <Pagination page={page} totalPages={totalPages} onChange={setPage} />}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
