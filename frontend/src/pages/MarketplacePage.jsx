import { useState } from "react";
import { ProductCard } from "../components/MarketplaceParts.jsx";
import { useMarketplaceLayout } from "../hooks/useMarketplaceLayout.js";
import { useProducts } from "../hooks/useProducts.js";

function Pagination({ page, totalPages, onChange }) {
  if (totalPages < 2) return null;
  const start = Math.max(1, Math.min(page - 2, totalPages - 4));
  const pages = Array.from({ length: Math.min(totalPages, 5) }, (_, index) => start + index);
  return (
    <nav className="pagination" aria-label="상품 목록 페이지">
      <button type="button" disabled={page === 1} onClick={() => onChange(page - 1)} aria-label="이전 페이지">‹</button>
      {pages.map((number) => <button type="button" key={number} className={number === page ? "current" : ""} aria-current={number === page ? "page" : undefined} onClick={() => onChange(number)}>{number}</button>)}
      <button type="button" disabled={page === totalPages} onClick={() => onChange(page + 1)} aria-label="다음 페이지">›</button>
    </nav>
  );
}

export function MarketplacePage() {
  const { productPageSize } = useMarketplaceLayout();
  const [searchInput, setSearchInput] = useState("");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");
  const { products, totalCount, loading, error } = useProducts({ page, pageSize: productPageSize, keyword, orderBy });
  const totalPages = Math.max(1, Math.ceil(totalCount / productPageSize));

  function submitSearch(event) {
    event.preventDefault();
    setKeyword(searchInput.trim());
    setPage(1);
  }

  return (
    <main className="marketplace-main">
      <section className="section all-section" aria-labelledby="items-title">
        <div className="section-heading all-heading">
          <h1 id="items-title">판매 중인 상품</h1>
          <div className="catalog-controls">
            <form className="search-form" onSubmit={submitSearch} role="search">
              <label className="visually-hidden" htmlFor="product-search">상품 검색</label>
              <span className="search-symbol" aria-hidden="true">⌕</span>
              <input id="product-search" type="search" placeholder="검색할 상품을 입력해주세요" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
              <button className="visually-hidden" type="submit">검색</button>
            </form>
            <div className="catalog-actions">
              <a className="register-button register-button-inline" href="/registration">상품 등록하기</a>
              <div className="sort-control">
                <span className="sort-icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M3.5 5h7M3.5 9h5M3.5 13h3M14 4v11m-3-3 3 3 3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <label className="visually-hidden" htmlFor="product-order">상품 정렬</label>
                <select id="product-order" value={orderBy} onChange={(event) => { setOrderBy(event.target.value); setPage(1); }} aria-label="상품 정렬">
                  <option value="recent">최신순</option>
                  <option value="favorite">좋아요순</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {loading ? <p className="state-message" role="status">상품을 불러오는 중입니다.</p> : null}
        {error ? <p className="state-message error-message" role="alert">{error}</p> : null}
        {!loading && !error && products.length === 0 ? <p className="state-message">{keyword ? "검색 결과가 없습니다." : "아직 등록된 상품이 없습니다."}</p> : null}
        {!loading && !error && products.length > 0 ? <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div> : null}
        {!loading && !error && totalCount > 0 ? <Pagination page={page} totalPages={totalPages} onChange={setPage} /> : null}
      </section>
    </main>
  );
}
