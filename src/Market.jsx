import { useEffect, useState } from 'react'
import { getProducts } from './products'

const socialLinks = [
  ['facebook', 'https://www.facebook.com/'],
  ['twitter', 'https://twitter.com/'],
  ['youtube', 'https://www.youtube.com/'],
  ['instagram', 'https://www.instagram.com/'],
]

const bestPhotos = [0, 1, 2, 2]
const salePhotos = [3, 4, 5, 6, 7, 8, 9, 10, 11, 6]

function ProductPhoto({ url, fallback }) {
  const [failed, setFailed] = useState(false)

  return (
    <img src={url && !failed ? url : fallback} alt="" loading="lazy"
      onError={() => setFailed(true)} />
  )
}

function useProducts(page, pageSize, orderBy, keyword = '') {
  const [result, setResult] = useState({ list: [], totalCount: 0, loading: true })

  useEffect(() => {
    const request = new AbortController()
    getProducts({ page, pageSize, orderBy, keyword, signal: request.signal })
      .then((data) => setResult({ ...data, loading: false }))
      .catch((error) => {
        if (!request.signal.aborted) {
          setResult({ list: [], totalCount: 0, error: error.message })
        }
      })
    return () => request.abort()
  }, [page, pageSize, orderBy, keyword])

  return result
}

function ProductGrid({ result, best = false }) {
  if (result.loading) return <p role="status">상품을 불러오는 중입니다.</p>
  if (result.error) return <p role="alert">{result.error}</p>
  if (!result.list.length) return <p>검색 결과가 없습니다.</p>

  return (
    <ul className={best ? 'cards best' : 'cards'}>
      {result.list.map(({ id, name, price, images, favoriteCount }, index) => (
        <li key={id}>
          <div className="photo">
            <ProductPhoto key={images?.[0]} url={images?.[0]}
              fallback={`/products/photo-${(best ? bestPhotos : salePhotos)[index]}.png`} />
          </div>
          <div className="product-info">
            <h3>{name}</h3>
            <strong>{price.toLocaleString('ko-KR')}원</strong>
            <small>♡ {favoriteCount}</small>
          </div>
        </li>
      ))}
    </ul>
  )
}

function Pagination({ page, total, onChange }) {
  const start = Math.max(1, Math.min(page - 2, total - 4))
  const pages = Array.from({ length: Math.min(total, 5) }, (_, index) => start + index)

  if (total < 2) return null
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

export default function Market() {
  const [filters, setFilters] = useState({ page: 1, orderBy: 'recent', keyword: '' })
  const [sortOpen, setSortOpen] = useState(false)
  const { page, orderBy, keyword } = filters
  const pageSize = 10
  const best = useProducts(1, 4, 'favorite')
  const products = useProducts(page, pageSize, orderBy, keyword)
  const sortLabels = { recent: '최신순', favorite: '좋아요순' }

  function search(event) {
    event.preventDefault()
    const value = new FormData(event.currentTarget).get('keyword')
    setFilters({ ...filters, page: 1, keyword: value.trim() })
  }

  return (
    <>
      <header>
        <div className="header-inner">
          <a href="/"><img className="logo" src="/brand/logo.png" alt="판다마켓" /></a>
          <nav aria-label="주 메뉴">
            <a href="/boards">자유게시판</a>
            <a href="/">중고마켓</a>
          </nav>
          <a className="primary login" href="/login">로그인</a>
        </div>
      </header>
      <main>
        <section>
          <h2>베스트 상품</h2>
          <ProductGrid result={best} best />
        </section>
        <section>
          <div className="toolbar">
            <h2>판매 중인 상품</h2>
            <form onSubmit={search}>
              <span aria-hidden="true">⌕</span>
              <input type="search" name="keyword" aria-label="상품 검색" placeholder="검색할 상품을 입력해주세요" />
            </form>
            <a className="primary register" href="/additem">상품 등록하기</a>
            <div className="sort" onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setSortOpen(false)
            }} onKeyDown={(event) => {
              if (event.key === 'Escape') {
                event.currentTarget.querySelector('button').focus()
                setSortOpen(false)
              }
            }}>
              <button className="sort-trigger" aria-expanded={sortOpen} onClick={() => setSortOpen(!sortOpen)}>
                {sortLabels[orderBy]} <span aria-hidden="true">▾</span>
              </button>
              {sortOpen && <div className="sort-options">
                {Object.entries(sortLabels).map(([value, label]) => (
                  <button key={value} onClick={(event) => {
                    event.currentTarget.closest('.sort').querySelector('button').focus()
                    setFilters({ ...filters, orderBy: value, page: 1 })
                    setSortOpen(false)
                  }}>{label}</button>
                ))}
              </div>}
            </div>
          </div>
          <ProductGrid result={products} />
          <Pagination page={page} total={Math.ceil(products.totalCount / pageSize)}
            onChange={(nextPage) => setFilters({ ...filters, page: nextPage })} />
        </section>
      </main>
      <footer>
        <div className="footer-inner">
          <span>©codeit - 2024</span>
          <div className="footer-links"><a href="/privacy">Privacy Policy</a><a href="/faq">FAQ</a></div>
          <div className="social">
            {socialLinks.map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noreferrer">
                <img src={`/brand/ic_${name}.png`} alt={name} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
