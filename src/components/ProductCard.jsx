import defaultImage from '../assets/default-product.svg'
import './ProductCard.css'

function ProductCard({ product }) {
  const { name, price } = product

  return (
    <li className="product-card">
      <img className="product-card-image" src={defaultImage} alt={name} />
      <div className="product-card-info">
        <p className="product-card-name">{name}</p>
        <p className="product-card-price">{price.toLocaleString()}원</p>
      </div>
    </li>
  )
}

export default ProductCard
