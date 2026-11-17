const PAGE_GROUP_SIZE = 5;

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 0) return null;

  const startPage =
    Math.floor((currentPage - 1) / PAGE_GROUP_SIZE) * PAGE_GROUP_SIZE + 1;
  const endPage = Math.min(startPage + PAGE_GROUP_SIZE - 1, totalPages);

  const pageNumbers = [];
  for (let page = startPage; page <= endPage; page++) {
    pageNumbers.push(page);
  }

  return (
    <nav className="pagination" aria-label="상품 목록 페이지">
      <button
        type="button"
        className="pagination__button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="이전 페이지"
      >
        <img src="/images/icons/ic_arrow_left.svg" alt="" />
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          type="button"
          className={`pagination__button ${
            page === currentPage ? 'pagination__button--active' : ''
          }`}
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className="pagination__button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="다음 페이지"
      >
        <img src="/images/icons/ic_arrow_right.svg" alt="" />
      </button>
    </nav>
  );
}

export default Pagination;
