import { useEffect, useState } from 'react'
import { useProducts } from '../hooks/useProducts'
import { useDeviceType } from '../hooks/useDeviceType'
import { ORDER_BY } from '../constants/product'
import ProductCard from './ProductCard'
import SortDropdown from './SortDropdown'
import Pagination from './Pagination'
import searchIcon from '../assets/icons/ic_search.png'
import './AllProducts.css'

const PAGE_SIZE = { pc: 10, tablet: 6, mobile: 4 }

function AllProducts() {
  const pageSize = PAGE_SIZE[useDeviceType()]
  const [orderBy, setOrderBy] = useState(ORDER_BY.RECENT)
  const [keyword, setKeyword] = useState('')
  const [input, setInput] = useState('')
  const [page, setPage] = useState(1)
  const { products, totalCount, isLoading, error } = useProducts({
    page,
    pageSize,
    orderBy,
    keyword,
  })
  const totalPages = Math.ceil(totalCount / pageSize)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPage(1)
  }, [pageSize])

  const handleSortChange = (value) => {
    setOrderBy(value)
    setPage(1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setKeyword(input.trim())
    setPage(1)
  }

  return (
    <section className="all-products">
      <div className="all-products-header">
        <h2 className="all-products-title">판매 중인 상품</h2>
        <div className="all-products-tools">
          <form className="all-products-search" onSubmit={handleSubmit}>
            <img src={searchIcon} alt="" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="검색할 상품을 입력해주세요"
            />
          </form>
          <button type="button" className="all-products-register">
            상품 등록하기
          </button>
          <SortDropdown value={orderBy} onChange={handleSortChange} />
        </div>
      </div>
      {error ? (
        <p className="all-products-message">상품을 불러오지 못했어요.</p>
      ) : isLoading ? (
        <p className="all-products-message">불러오는 중...</p>
      ) : products.length === 0 ? (
        <p className="all-products-message">검색 결과가 없습니다.</p>
      ) : (
        <ul className="all-products-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
      {!error && totalPages > 0 && (
        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      )}
    </section>
  )
}

export default AllProducts
