import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import usePageSize from "../../hooks/usePageSize";
import ProductContent from "./ProductContent";

export default function ProductList() {
  const [keyword, setKeyword] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [page, setPage] = useState(1);

  const pageSize = usePageSize({ mobile: 4, tablet: 6, desktop: 10 });

  const [prevPageSize, setPrevPageSize] = useState(pageSize);

  if (prevPageSize !== pageSize) {
    setPrevPageSize(pageSize);
    setPage(1);
  }

  const { products, totalCount, error, loading } = useProducts(
    page,
    pageSize,
    sortBy,
    keyword,
  );

  //페이지네이션
  const totalPages = Math.ceil(totalCount / pageSize);
  const groupSize = 5;
  const startPage = Math.floor((page - 1) / groupSize) * groupSize + 1;
  const endPage = Math.min(startPage + groupSize - 1, totalPages);
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <section>
      <div className="product-list-header">
        <h4>판매 중인 상품</h4>
        <div className="product-list-controls">
          <input
            className="product-search"
            type="text"
            placeholder="검색할 상품을 입력해주세요."
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
              setPage(1);
            }}
          />
          <a className="header-login link-button product-register">
            상품 등록하기
          </a>
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              //   검색하면 페이지 1번으로 초기화
              setPage(1);
            }}
          >
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
      </div>
      <div className="product-list">
        <ProductContent products={products} error={error} loading={loading} />
      </div>
      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          &lt;
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={number === page ? "active" : ""}
            onClick={() => setPage(number)}
          >
            {number}
          </button>
        ))}
        <button
          // 상품이 아무것도 없을 경우를 대비하여 >=
          disabled={page >= totalPages}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
