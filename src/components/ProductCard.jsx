import heart from '../assets/icons/ic_heart.png'
import './ProductCard.css'

function ProductCard({ product }) {
  const { name, price, images, favoriteCount } = product

  return (
    <li className="product-card">
      <img className="product-card-image" src={images[0]} alt={name} />
      <div className="product-card-info">
        <p className="product-card-name">{name}</p>
        <p className="product-card-price">{price.toLocaleString()}원</p>
        <p className="product-card-like">
          <img src={heart} alt="좋아요" width="16" height="16" />
          {favoriteCount}
        </p>
      </div>
    </li>
  )
}

export default ProductCard
