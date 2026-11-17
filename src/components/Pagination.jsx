import icArrowPrev from '../assets/images/ic_arrow_prev.png';
import icArrowNext from '../assets/images/ic_arrow_next.png';

const pageButtonStyle =
  'flex size-10 items-center justify-center rounded-full border border-secondary-200 bg-white text-lg-semibold text-secondary-500';

const PAGE_BUTTON_COUNT = 5;

export default function Pagination({
  currentPage,
  totalPage,
  onChange,
  className = '',
}) {
  if (!totalPage) return null;

  const startPage = Math.floor((currentPage - 1) / PAGE_BUTTON_COUNT) * PAGE_BUTTON_COUNT + 1;
  const endPage = Math.min(startPage + 4, totalPage);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <nav aria-label='페이지 이동' className={className}>
      <ul className='flex justify-center items-center gap-1'>
        <li>
          <button
            type='button'
            aria-label='이전 페이지'
            disabled={currentPage === 1}
            onClick={() => onChange(currentPage - 1)}
            className={`${pageButtonStyle} group disabled:pointer-events-none`}
          >
            <img
              src={icArrowPrev}
              className='w-4 group-disabled:opacity-50'
              alt=''
            />
          </button>
        </li>
        {pages.map((num) => (
          <li key={num}>
            <button
              type='button'
              aria-current={num === currentPage ? 'page' : undefined}
              onClick={() => onChange(num)}
              className={`${pageButtonStyle} aria-[current=page]:border-pagination aria-[current=page]:bg-pagination aria-[current=page]:text-white`}
            >
              {num}
            </button>
          </li>
        ))}
        <li>
          <button
            type='button'
            aria-label='다음 페이지'
            disabled={currentPage === totalPage}
            onClick={() => onChange(currentPage + 1)}
            className={`${pageButtonStyle} group disabled:pointer-events-none`}
          >
            <img
              src={icArrowNext}
              className='w-4 group-disabled:opacity-50'
              alt=''
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}
