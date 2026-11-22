import { useCallback, useState } from "react";
import { Link } from "react-router";
import usePageSize from "../../hooks/usePageSize";
import useProducts from "../../hooks/useProducts";
import Pagination from "../common/Pagination";
import SortDropdown from "../common/SortDropdown";
import ProductCard from "./ProductCard";

const SORT_OPTIONS = [{ value: "recent", label: "최신순" }];

export default function ProductsListSection({ favorites, onFavorite }) {
  const pageSize = usePageSize();
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState({
    page: 1,
    pageSize,
    keyword: "",
    orderBy: "recent",
  });
  const correctPage = useCallback((requestedQuery, lastPage) => {
    setQuery((currentQuery) => {
      if (currentQuery !== requestedQuery) return currentQuery;
      return { ...currentQuery, page: lastPage };
    });
  }, []);
  const result = useProducts(query, correctPage);

  if (query.pageSize !== pageSize) {
    setQuery({ ...query, page: 1, pageSize });
  }

  function updateQuery(changes) {
    setQuery((previous) => ({ ...previous, ...changes }));
  }
  const totalPages = Math.ceil(result.totalCount / query.pageSize);

  function renderProductList() {
    const { loading, error, list } = result;
    if (loading && list.length === 0) {
      return <p role="status">상품을 불러오는 중입니다.</p>;
    }
    if (error) return <p role="alert">{error}</p>;
    if (list.length === 0) return <p role="status">검색 결과가 없습니다.</p>;

    return (
      <ul className="product-list">
        {list.map((product) => (
          <li className="product-item" key={product.id}>
            <ProductCard
              product={product}
              favorite={favorites[product.id]}
              onFavorite={onFavorite}
            />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="products-section">
      <div className="products-header">
        <h2 className="products-title">판매 중인 상품</h2>
        <form
          className="products-controls"
          onSubmit={(event) => {
            event.preventDefault();
            updateQuery({ page: 1, keyword: searchInput.trim() });
          }}
        >
          <div className="products-search-box">
            <input
              type="text"
              name="keyword"
              className="products-search"
              placeholder="검색할 상품을 입력해주세요"
              aria-label="상품 검색"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
            />
            <button
              type="submit"
              className="products-search-button"
              aria-label="검색"
            >
              <img src="/ic_search.png" alt="" />
            </button>
          </div>
          <Link to="/registration" className="products-add-button">
            상품 등록하기
          </Link>
          <SortDropdown
            className="products-sort"
            options={SORT_OPTIONS}
            value={query.orderBy}
            onChange={(orderBy) => {
              if (orderBy !== query.orderBy) updateQuery({ page: 1, orderBy });
            }}
          />
        </form>
      </div>
      <div aria-busy={result.loading}>{renderProductList()}</div>
      {!result.error && (
        <Pagination
          ariaLabel="상품 목록 페이지"
          currentPage={query.page}
          totalPages={totalPages}
          disabled={result.loading}
          onPageChange={(page) => updateQuery({ page })}
        />
      )}
    </section>
  );
}
