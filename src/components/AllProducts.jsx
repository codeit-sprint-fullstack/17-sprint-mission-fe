import { useState } from 'react'
import { useProducts } from '../hooks/useProducts'
import ProductCard from './ProductCard'
import SortDropdown from './SortDropdown'
import searchIcon from '../assets/icons/ic_search.png'
import './AllProducts.css'

const PAGE_SIZE = 10 // PC. 태블릿/모바일은 PC 완료 후 useDeviceType으로 분기

function AllProducts() {
  const [orderBy, setOrderBy] = useState('recent')
  const [keyword, setKeyword] = useState('')
  const [input, setInput] = useState('')
  const { products } = useProducts({
    page: 1,
    pageSize: PAGE_SIZE,
    orderBy,
    keyword,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setKeyword(input.trim())
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
          <SortDropdown value={orderBy} onChange={setOrderBy} />
        </div>
      </div>
      <ul className="all-products-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </section>
  )
}

export default AllProducts
