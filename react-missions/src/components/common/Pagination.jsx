import "./Pagination.css";

const PAGES_PER_GROUP = 5;

export default function Pagination({
  currentPage,
  totalPages,
  disabled,
  onPageChange,
  ariaLabel = "페이지 이동",
}) {
  if (totalPages <= 0) return null;

  const firstPage =
    Math.floor((currentPage - 1) / PAGES_PER_GROUP) * PAGES_PER_GROUP + 1;
  const pages = Array.from(
    { length: Math.max(0, Math.min(PAGES_PER_GROUP, totalPages - firstPage + 1)) },
    (_, i) => firstPage + i,
  );

  return (
    <nav className="pagination" aria-label={ariaLabel}>
      <button
        type="button"
        className="pagination-prev"
        aria-label="이전 페이지"
        disabled={disabled || currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <img src="/arrow_prev.png" alt="" />
      </button>
      <ul className="pagination-list">
        {pages.map((page) => (
          <li key={page}>
            <button
              type="button"
              className={`pagination-button${page === currentPage ? " on" : ""}`}
              aria-current={page === currentPage ? "page" : undefined}
              disabled={disabled}
              onClick={() => onPageChange(page)}
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
        disabled={disabled || currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <img src="/arrow_right.png" alt="" />
      </button>
    </nav>
  );
}
