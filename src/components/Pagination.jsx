export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  const blockStart = Math.floor((page - 1) / 5) * 5 + 1;
  const pages = Array.from(
    { length: Math.min(5, totalPages - blockStart + 1) },
    (_, i) => blockStart + i,
  );
  return (
    <nav className="pagination" aria-label="상품 페이지">
      <button
        aria-label="이전 페이지"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        ‹
      </button>
      {pages.map((n) => (
        <button
          key={n}
          className={n === page ? "active" : ""}
          aria-current={n === page ? "page" : undefined}
          onClick={() => onChange(n)}
        >
          {n}
        </button>
      ))}
      <button
        aria-label="다음 페이지"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        ›
      </button>
    </nav>
  );
}
