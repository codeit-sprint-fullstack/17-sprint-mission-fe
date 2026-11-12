import { useProducts } from '../hooks/useProducts'
import ProductCard from './ProductCard'
import './BestProducts.css'

function BestProducts() {
  const { products } = useProducts({
    page: 1,
    pageSize: 4,
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
