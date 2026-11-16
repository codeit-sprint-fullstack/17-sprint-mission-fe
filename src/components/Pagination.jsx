import './Pagination.css'

const WINDOW_SIZE = 5 // 한 번에 보여줄 페이지 번호 개수

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M9.5 4.67 6 8.17l3.5 3.5"
        stroke="#4B5563"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Pagination({ page, totalPages, onChange }) {
  const start = Math.floor((page - 1) / WINDOW_SIZE) * WINDOW_SIZE + 1
  const end = Math.min(start + WINDOW_SIZE - 1, totalPages)
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i)

  return (
    <nav className="pagination" aria-label="페이지 이동">
      <button
        type="button"
        className="pagination-button pagination-prev"
        aria-label="이전 페이지"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        <ChevronIcon />
      </button>
      {pages.map((n) => (
        <button
          key={n}
          type="button"
          className={`pagination-button${n === page ? ' is-active' : ''}`}
          aria-current={n === page ? 'page' : undefined}
          onClick={() => onChange(n)}
        >
          {n}
        </button>
      ))}
      <button
        type="button"
        className="pagination-button pagination-next"
        aria-label="다음 페이지"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        <ChevronIcon />
      </button>
    </nav>
  )
}

export default Pagination
