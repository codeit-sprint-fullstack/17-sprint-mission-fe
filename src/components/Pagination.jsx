import { ChevronIcon } from "./Icons";

export default function Pagination({
  page,
  totalPages,
  onChange,
  isLoading = false,
}) {
  if (totalPages < 1) return null;
  const firstPage = Math.floor((page - 1) / 5) * 5 + 1;
  const pages = Array.from(
    { length: Math.min(5, totalPages - firstPage + 1) },
    (_, index) => firstPage + index,
  );

  return (
    <nav
      className="pagination"
      aria-label="상품 목록 페이지"
      aria-busy={isLoading}
    >
      <button
        type="button"
        disabled={page === 1}
        aria-disabled={isLoading || undefined}
        onClick={() => {
          if (!isLoading) onChange(page - 1);
        }}
        aria-label="이전 페이지"
      >
        <ChevronIcon direction="left" />
      </button>
      {pages.map((number) => (
        <button
          type="button"
          key={number}
          aria-label={`${number}페이지`}
          aria-current={number === page ? "page" : undefined}
          aria-disabled={isLoading || undefined}
          onClick={() => {
            if (!isLoading) onChange(number);
          }}
        >
          {number}
        </button>
      ))}
      <button
        type="button"
        disabled={page === totalPages}
        aria-disabled={isLoading || undefined}
        onClick={() => {
          if (!isLoading) onChange(page + 1);
        }}
        aria-label="다음 페이지"
      >
        <ChevronIcon />
      </button>
    </nav>
  );
}
