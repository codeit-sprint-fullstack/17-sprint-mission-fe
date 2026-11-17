import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/format.js';

const DEFAULT_IMAGE = '/images/img_default.svg';

function ProductCard({ product, variant = 'all' }) {
  const { id, name, price, favoriteCount = 0 } = product;

  return (
    <Link to={`/items/${id}`} className={`product-card product-card--${variant}`}>
      <img className="product-card__image" src={DEFAULT_IMAGE} alt={name} />
      <div className="product-card__info">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__price">{formatPrice(price)}</p>
        <p className="product-card__favorite">
          <img src="/images/icons/ic_heart.svg" alt="좋아요" />
          {favoriteCount}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
