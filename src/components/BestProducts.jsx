import { useProducts } from '../hooks/useProducts'
import { useDeviceType } from '../hooks/useDeviceType'
import ProductCard from './ProductCard'
import './BestProducts.css'

// 모바일은 시안 값을 받은 뒤 정리(지금은 태블릿과 같게 둠)
const PAGE_SIZE = { pc: 4, tablet: 2, mobile: 2 }

function BestProducts() {
  const deviceType = useDeviceType()
  const { products } = useProducts({
    page: 1,
    pageSize: PAGE_SIZE[deviceType],
    orderBy: 'favorite',
  })

  return (
    <section className="best-products">
      <h2 className="best-products-title">베스트 상품</h2>
      <ul className="best-products-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </section>
  )
}

export default BestProducts
