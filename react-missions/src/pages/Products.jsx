import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import { getProductList, getTitleProductList } from "../js/ProductService";
import "swiper/css";
import "../css/sub.css";

function getPageSize() {
  return window.matchMedia("(max-width: 375px)").matches
    ? 4
    : window.matchMedia("(max-width: 774px)").matches
      ? 6
      : 10;
}
function ProductCard({ product, isBest = false, favorite, onFavorite }) {
  const [failedImage, setFailedImage] = useState(null);
  const image = product.images?.[0];
  const hasImage = Boolean(image) && failedImage !== image;
  return (
    <>
      <div
        className={`product-image${isBest ? " best-product-image" : ""}${hasImage ? "" : " no-image"}`}
      >
        {hasImage ? (
          <img
            src={image}
            alt={product.name}
            loading="lazy"
            onError={() => setFailedImage(image)}
          />
        ) : (
          <span>상품 이미지 없음</span>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">
          {product.price.toLocaleString("ko-KR")}원
        </p>
        <button
          type="button"
          className={`product-like${favorite ? " on" : ""}`}
          aria-label={`${product.name} 좋아요${favorite ? " 취소" : ""}`}
          aria-pressed={Boolean(favorite)}
          onClick={() => onFavorite(product.id)}
        >
          <span className="product-like-button">
            <svg
              className="product-like-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
            </svg>
          </span>
          <span className="product-like-count">
            <span className="best-product-like-label">좋아요 </span>
            {product.favoriteCount + (favorite ? 1 : 0)}
          </span>
        </button>
      </div>
    </>
  );
}
export default function Products() {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState(() => ({
    page: 1,
    pageSize: getPageSize(),
    keyword: "",
    orderBy: "recent",
  }));
  const [best, setBest] = useState({ list: [], loading: true, error: "" });
  const [result, setResult] = useState({
    list: [],
    totalCount: 0,
    loading: true,
    error: "",
  });
  const [retry, setRetry] = useState(0);
  const [bestRetry, setBestRetry] = useState(0);

  const [favorites, setFavorites] = useState({});
  function toggleFavorite(id) {
    setFavorites((previous) => ({ ...previous, [id]: !previous[id] }));
  }

  function updateQuery(changes) {
    setResult((previous) => ({ ...previous, loading: true, error: "" }));
    setQuery((previous) => ({ ...previous, ...changes }));
  }
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 375px)");
    const tablet = window.matchMedia("(max-width: 774px)");
    const resize = () => {
      setResult((previous) => ({ ...previous, loading: true, error: "" }));
      setQuery((previous) => ({
        ...previous,
        page: 1,
        pageSize: getPageSize(),
      }));
    };
    mobile.addEventListener("change", resize);
    tablet.addEventListener("change", resize);
    return () => {
      mobile.removeEventListener("change", resize);
      tablet.removeEventListener("change", resize);
    };
  }, []);
  useEffect(() => {
    const controller = new AbortController();
    getProductList(1, 4, "", "favorite", controller.signal)
      .then((data) => {
        if (!controller.signal.aborted)
          setBest({ list: data.list, loading: false, error: "" });
      })
      .catch(() => {
        if (!controller.signal.aborted)
          setBest({
            list: [],
            loading: false,
            error: "베스트 상품을 불러오지 못했습니다.",
          });
      });
    return () => controller.abort();
  }, [bestRetry]);
  useEffect(() => {
    const controller = new AbortController();
    getTitleProductList(
      query.page,
      query.pageSize,
      query.keyword,
      query.orderBy,
      controller.signal,
    )
      .then((data) => {
        if (controller.signal.aborted) return;
        const lastPage = Math.max(
          1,
          Math.ceil(data.totalCount / query.pageSize),
        );
        if (query.page > lastPage) {
          setQuery((previous) => ({ ...previous, page: lastPage }));
          return;
        }
        setResult({ ...data, loading: false, error: "" });
      })
      .catch(() => {
        if (!controller.signal.aborted)
          setResult({
            list: [],
            totalCount: 0,
            loading: false,
            error: "상품을 불러오지 못했습니다.",
          });
      });
    return () => controller.abort();
  }, [query, retry]);

  const totalPages = Math.ceil(result.totalCount / query.pageSize);
  const firstPage = Math.floor((query.page - 1) / 5) * 5 + 1;
  const pages = Array.from(
    { length: Math.max(0, Math.min(5, totalPages - firstPage + 1)) },
    (_, i) => firstPage + i,
  );
  return (
    <main className="sub-page">
      <section className="products-section" aria-busy={best.loading}>
        <div className="products-header">
          <h2 className="products-title">베스트 상품</h2>
        </div>
        {best.loading ? (
          <p role="status">베스트 상품을 불러오는 중입니다.</p>
        ) : best.error ? (
          <div role="alert">
            {best.error}{" "}
            <button
              type="button"
              onClick={() => {
                setBest({ list: [], loading: true, error: "" });
                setBestRetry((value) => value + 1);
              }}
            >
              다시 시도
            </button>
          </div>
        ) : best.list.length === 0 ? (
          <p>베스트 상품이 없습니다.</p>
        ) : (
          <Swiper
            className="products-slider"
            modules={[Keyboard, A11y]}
            grabCursor
            slidesPerView={1}
            spaceBetween={16}
            breakpoints={{
              376: { slidesPerView: 2, spaceBetween: 20 },
              775: { slidesPerView: 4, spaceBetween: 24 },
            }}
            keyboard={{ enabled: true, onlyInViewport: true }}
            aria-label="베스트 상품"
          >
            {best.list.map((product) => (
              <SwiperSlide key={product.id}>
                <article className="product-item">
                  <ProductCard
                    product={product}
                    isBest
                    favorite={favorites[product.id]}
                    onFavorite={toggleFavorite}
                  />
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
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
            <button type="button" className="products-add-button">
              상품 등록하기
            </button>
            <div
              className="products-sort"
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget))
                  setIsSortOpen(false);
              }}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setIsSortOpen(false);
                  event.currentTarget
                    .querySelector(".products-sort-trigger")
                    .focus();
                }
              }}
            >
              <button
                type="button"
                className="products-sort-trigger"
                aria-expanded={isSortOpen}
                aria-controls="products-sort-list"
                onClick={() => setIsSortOpen((open) => !open)}
              >
                <span>
                  {query.orderBy === "recent" ? "최신순" : "좋아요순"}
                </span>
                <img src="/ic_arrow_down.png" alt="" />
              </button>
              <ul
                id="products-sort-list"
                className="products-sort-list"
                hidden={!isSortOpen}
              >
                {[
                  { value: "recent", label: "최신순" },
                  { value: "favorite", label: "좋아요순" },
                ].map((order) => (
                  <li className="products-sort-item" key={order.value}>
                    <button
                      type="button"
                      aria-pressed={query.orderBy === order.value}
                      onClick={(event) => {
                        updateQuery({ page: 1, orderBy: order.value });
                        setIsSortOpen(false);
                        event.currentTarget
                          .closest(".products-sort")
                          .querySelector(".products-sort-trigger")
                          .focus();
                      }}
                    >
                      {order.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </form>
        </div>
        <div aria-busy={result.loading}>
          {result.loading && result.list.length === 0 ? (
            <p role="status">상품을 불러오는 중입니다.</p>
          ) : result.error ? (
            <div role="alert">
              {result.error}{" "}
              <button
                type="button"
                onClick={() => {
                  setResult((previous) => ({
                    ...previous,
                    loading: true,
                    error: "",
                  }));
                  setRetry((value) => value + 1);
                }}
              >
                다시 시도
              </button>
            </div>
          ) : result.list.length === 0 ? (
            <p role="status">검색 결과가 없습니다.</p>
          ) : (
            <ul className="product-list">
              {result.list.map((product) => (
                <li className="product-item" key={product.id}>
                  <ProductCard
                    product={product}
                    favorite={favorites[product.id]}
                    onFavorite={toggleFavorite}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
        {!result.error && totalPages > 0 && (
          <nav className="pagination" aria-label="상품 목록 페이지">
            <button
              type="button"
              className="pagination-prev"
              aria-label="이전 페이지"
              disabled={result.loading || query.page <= 1}
              onClick={() => updateQuery({ page: query.page - 1 })}
            >
              <img src="/arrow_prev.png" alt="" />
            </button>
            <ul className="pagination-list">
              {pages.map((page) => (
                <li key={page}>
                  <button
                    type="button"
                    className={`pagination-button${page === query.page ? " on" : ""}`}
                    aria-current={page === query.page ? "page" : undefined}
                    disabled={result.loading}
                    onClick={() => updateQuery({ page })}
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="pagination-next"
              aria-label="다음 페이지"
              disabled={result.loading || query.page >= totalPages}
              onClick={() => updateQuery({ page: query.page + 1 })}
            >
              <img src="/arrow_right.png" alt="" />
            </button>
          </nav>
        )}
      </section>
    </main>
  );
}
