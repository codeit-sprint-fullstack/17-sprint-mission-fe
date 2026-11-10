import { useEffect, useState } from "react";
import { useProducts } from "./hooks/useProducts";
import { useResponsivePageSize } from "./hooks/useResponsivePageSize";
import ProductGrid from "./components/ProductGrid";
import Pagination from "./components/Pagination";
import { SearchIcon } from "./components/Icons";

function BestProducts({ pageSize }) {
  const result = useProducts({ page: 1, pageSize, orderBy: "favorite" });
  return (
    <section className="best-products" aria-labelledby="best-title">
      <h2 id="best-title">베스트 상품</h2>
      <ProductGrid {...result} count={pageSize} best />
    </section>
  );
}

function ProductResults({ pageSize, orderBy, keyword, onClear }) {
  const [page, setPage] = useState(1);
  const [knownTotal, setKnownTotal] = useState(0);
  const result = useProducts({ page, pageSize, orderBy, keyword });
  const totalPages = Math.ceil(
    (result.isLoading || result.error ? knownTotal : result.totalCount) /
      pageSize,
  );

  useEffect(() => {
    if (!result.isLoading && !result.error) setKnownTotal(result.totalCount);
  }, [result.isLoading, result.error, result.totalCount]);

  useEffect(() => {
    if (!result.isLoading && !result.error && page > Math.max(1, totalPages)) {
      setPage(Math.max(1, totalPages));
    }
  }, [page, totalPages, result.isLoading, result.error]);

  return (
    <>
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {!result.isLoading && !result.error
          ? `전체 ${result.totalCount}개 상품 중 ${page}페이지, ${result.products.length}개 상품`
          : ""}
      </div>
      <ProductGrid
        {...result}
        count={pageSize}
        keyword={keyword}
        onClear={onClear}
      />
      <Pagination
        page={page}
        totalPages={totalPages}
        onChange={setPage}
        isLoading={result.isLoading}
      />
    </>
  );
}

export default function Marketplace() {
  const { pageSize, bestPageSize } = useResponsivePageSize();
  const [input, setInput] = useState("");
  const [keyword, setKeyword] = useState("");
  const [orderBy, setOrderBy] = useState("recent");
  const [notice, setNotice] = useState("");

  function clearSearch() {
    setInput("");
    setKeyword("");
  }

  function submitSearch(event) {
    event.preventDefault();
    setKeyword(input.trim());
  }

  return (
    <main className="market-page" id="main-content">
      <h1 className="sr-only">판다마켓 중고마켓</h1>
      <BestProducts pageSize={bestPageSize} />
      <section className="all-products" aria-labelledby="products-title">
        <div className="market-toolbar">
          <h2 id="products-title">판매 중인 상품</h2>
          <form className="search-form" role="search" onSubmit={submitSearch}>
            <button type="submit" aria-label="상품 검색">
              <SearchIcon />
            </button>
            <label className="sr-only" htmlFor="product-search">
              검색할 상품
            </label>
            <input
              id="product-search"
              type="search"
              placeholder="검색할 상품을 입력해주세요"
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
                if (!event.target.value) setKeyword("");
              }}
              maxLength={100}
            />
          </form>
          <button
            type="button"
            className="button register-button"
            onClick={() =>
              setNotice(
                "상품 등록 기능은 준비 중이에요. 지금은 판매 중인 상품을 둘러보세요.",
              )
            }
          >
            상품 등록하기
          </button>
          <div className="sort-control">
            <label className="sr-only" htmlFor="product-sort">
              상품 정렬
            </label>
            <select
              id="product-sort"
              value={orderBy}
              onChange={(event) => setOrderBy(event.target.value)}
            >
              <option value="recent">최신 순</option>
              <option value="favorite">좋아요 순</option>
            </select>
          </div>
        </div>
        {notice ? (
          <div className="market-notice" role="status">
            <span>{notice}</span>
            <button
              type="button"
              onClick={() => setNotice("")}
              aria-label="안내 닫기"
            >
              ×
            </button>
          </div>
        ) : null}
        <ProductResults
          key={JSON.stringify([pageSize, orderBy, keyword])}
          pageSize={pageSize}
          orderBy={orderBy}
          keyword={keyword}
          onClear={clearSearch}
        />
      </section>
    </main>
  );
}
