import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

// 검색 입력창 컴포넌트
function SearchForm({ keyword, onSearch }) {
  const [searchInput, setSearchInput] = useState(keyword);

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(searchInput.trim());
      }}
    >
      <span aria-hidden="true">⌕</span>
      <input
        aria-label="상품 검색"
        placeholder="검색할 상품을 입력해주세요"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="submit" className="search-submit">
        검색
      </button>
    </form>
  );
}

export default function SellingProducts({ pageSize }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const rawPage = Number(searchParams.get("page"));
  const page = Number.isInteger(rawPage) && rawPage > 0 ? rawPage : 1;

  const orderBy =
    searchParams.get("orderBy") === "favorite" ? "favorite" : "recent";

  const keyword = searchParams.get("keyword") || "";

  // 검색어, 정렬 기준, 페이지 번호를 URL에 반영
  function changeQuery(changes) {
    setSearchParams((previous) => {
      const next = new URLSearchParams(previous);

      Object.entries(changes).forEach(([key, value]) => {
        if (value === "" || value == null || (key === "page" && value === 1)) {
          next.delete(key);
        } else {
          next.set(key, String(value));
        }
      });

      return next;
    });
  }

  // 화면 크기가 바뀌면 첫 페이지부터 보여준다
  useEffect(() => {
    setSearchParams(
      (previous) => {
        if (!previous.has("page")) return previous;

        const next = new URLSearchParams(previous);
        next.delete("page");
        return next;
      },
      { replace: true },
    );
  }, [pageSize, setSearchParams]);

  // 상품 목록 조회
  const { list, totalCount, loading, error } = useProducts({
    page,
    pageSize,
    keyword,
    orderBy,
  });

  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  // 현재 페이지가 전체 페이지 수를 초과하면 마지막 페이지로 이동
  useEffect(() => {
    if (!loading && totalCount > 0 && page > totalPages) {
      setSearchParams(
        (previous) => {
          const next = new URLSearchParams(previous);
          next.set("page", String(totalPages));
          return next;
        },
        { replace: true },
      );
    }
  }, [loading, totalCount, page, totalPages, setSearchParams]);

  return (
    <section className="selling-section">
      <div className="selling-header">
        <h2>판매 중인 상품</h2>

        <div className="selling-controls">
          <SearchForm
            key={keyword}
            keyword={keyword}
            onSearch={(value) => changeQuery({ keyword: value, page: 1 })}
          />

          <button
            className="register-button"
            type="button"
            onClick={() => window.alert("잘못된 요청입니다.")}
          >
            상품 등록하기
          </button>

          <select
            className="sort-select"
            aria-label="상품 정렬"
            value={orderBy}
            onChange={(e) =>
              changeQuery({
                orderBy: e.target.value,
                page: 1,
              })
            }
          >
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
      </div>

      {loading ? (
        <p className="status">상품을 불러오는 중...</p>
      ) : error ? (
        <p className="status error">상품 목록을 불러오지 못했습니다: {error}</p>
      ) : list.length === 0 ? (
        <p className="status">상품이 없습니다.</p>
      ) : (
        <div className="selling-grid">
          {list.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {!loading && !error && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onChange={(nextPage) => changeQuery({ page: nextPage })}
        />
      )}
    </section>
  );
}
