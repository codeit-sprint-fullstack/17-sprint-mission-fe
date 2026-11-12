import { useState } from 'react'
import { useProducts } from '../hooks/useProducts'
import { useDeviceType } from '../hooks/useDeviceType'
import ProductCard from './ProductCard'
import SortDropdown from './SortDropdown'
import Pagination from './Pagination'
import searchIcon from '../assets/icons/ic_search.png'
import './AllProducts.css'

// 모바일은 시안 값을 받은 뒤 정리(지금은 태블릿과 같게 둠)
const PAGE_SIZE = { pc: 10, tablet: 6, mobile: 6 }

function AllProducts() {
  const pageSize = PAGE_SIZE[useDeviceType()]
  const [orderBy, setOrderBy] = useState('recent')
  const [keyword, setKeyword] = useState('')
  const [input, setInput] = useState('')
  const [page, setPage] = useState(1)
  const { products, totalCount } = useProducts({
    page,
    pageSize,
    orderBy,
    keyword,
  })
  const totalPages = Math.ceil(totalCount / pageSize)

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
      <ul className="all-products-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
      {totalPages > 0 && (
        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      )}
    </section>
  )
}

export default AllProducts
