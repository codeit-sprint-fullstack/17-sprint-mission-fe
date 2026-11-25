import { useEffect, useState, useSyncExternalStore } from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../api/products.js'

const mobile = window.matchMedia('(max-width: 639px)')
const tablet = window.matchMedia('(max-width: 1023px)')

function subscribeToWidth(update) {
  mobile.addEventListener('change', update)
  tablet.addEventListener('change', update)
  return () => {
    mobile.removeEventListener('change', update)
    tablet.removeEventListener('change', update)
  }
}

function getPageSize() {
  if (mobile.matches) return 4
  if (tablet.matches) return 6
  return 10
}

function useProducts(page, pageSize, keyword) {
  const requestKey = JSON.stringify([page, pageSize, keyword])
  const [result, setResult] = useState(null)

  useEffect(() => {
    const request = new AbortController()

    getProducts({ page, pageSize, keyword, signal: request.signal })
      .then((data) => {
        if (!request.signal.aborted) setResult({ ...data, requestKey })
      })
      .catch(() => {
        if (!request.signal.aborted) setResult({ error: '상품을 불러오지 못했습니다.', requestKey })
      })

    return () => request.abort()
  }, [page, pageSize, keyword, requestKey])

  return result?.requestKey === requestKey ? result : { loading: true }
}

function ProductGrid({ result }) {
  if (result.loading) return <p role="status">상품을 불러오는 중입니다.</p>
  if (result.error) return <p role="alert">{result.error}</p>
  if (!result.list.length) return <p>검색 결과가 없습니다.</p>

  return (
    <ul className="cards">
      {result.list.map(({ id, name, price, favoriteCount = 0 }) => (
        <li key={id}>
          <Link to={`/items/${id}`}>
            <div className="photo" aria-hidden="true">
              <span className="photo-illustration"><i /><i /><i /><i /></span>
            </div>
            <div className="product-info">
              <h2>{name}</h2>
              <strong>{price.toLocaleString('ko-KR')}원</strong>
              <small aria-label={`좋아요 ${favoriteCount}개`}>♡ {favoriteCount}</small>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

function Pagination({ page, total, onChange }) {
  if (total < 2) return null

  const start = Math.max(1, Math.min(page - 2, total - 4))
  const pages = Array.from({ length: Math.min(total, 5) }, (_, index) => start + index)

  return (
    <nav className="pagination" aria-label="상품 페이지">
      <button aria-label="이전 페이지" disabled={page === 1} onClick={() => onChange(page - 1)}>‹</button>
      {pages.map((number) => (
        <button key={number} aria-current={page === number ? 'page' : undefined}
          onClick={() => onChange(number)}>{number}</button>
      ))}
      <button aria-label="다음 페이지" disabled={page === total} onClick={() => onChange(page + 1)}>›</button>
    </nav>
  )
}

export default function Products() {
  const pageSize = useSyncExternalStore(subscribeToWidth, getPageSize)
  const [filters, setFilters] = useState({ page: 1, pageSize, keyword: '' })
  const { keyword } = filters
  const page = filters.pageSize === pageSize ? filters.page : 1
  const products = useProducts(page, pageSize, keyword)

  function search(event) {
    event.preventDefault()
    const value = new FormData(event.currentTarget).get('keyword')
    setFilters({ page: 1, pageSize, keyword: value.trim() })
  }

  return (
    <main className="market-page">
      <div className="toolbar">
        <h1>판매 중인 상품</h1>
        <form onSubmit={search}>
          <button type="submit" className="search-button" aria-label="검색" />
          <input type="search" name="keyword" aria-label="상품 검색"
            maxLength={100} placeholder="검색할 상품을 입력해주세요" />
        </form>
        <Link className="primary register" to="/registration">상품 등록하기</Link>
        <span className="sort-label" title="최신순"><span>최신순</span><b aria-hidden="true">⇣</b></span>
      </div>
      <ProductGrid result={products} />
      <Pagination page={page} total={Math.ceil((products.totalCount ?? 0) / pageSize)}
        onChange={(nextPage) => setFilters({ page: nextPage, pageSize, keyword })} />
    </main>
  )
}
