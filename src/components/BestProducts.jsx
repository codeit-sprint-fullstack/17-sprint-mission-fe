import { useProducts } from '../hooks/useProducts'
import { useDeviceType } from '../hooks/useDeviceType'
import { ORDER_BY } from '../constants/product'
import ProductCard from './ProductCard'
import './BestProducts.css'

const PAGE_SIZE = { pc: 4, tablet: 2, mobile: 1 }

function BestProducts() {
  const deviceType = useDeviceType()
  const { products } = useProducts({
    page: 1,
    pageSize: PAGE_SIZE[deviceType],
    orderBy: ORDER_BY.FAVORITE,
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
