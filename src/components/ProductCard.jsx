import { formatPrice } from '../utils/format.js';

const DEFAULT_IMAGE = '/images/img_default.svg';

function ProductCard({ product, variant = 'all' }) {
  const { name, price, images, favoriteCount } = product;

  const imageUrl = images?.[0] || DEFAULT_IMAGE;

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = DEFAULT_IMAGE;
  };

  return (
    <article className={`product-card product-card--${variant}`}>
      <img
        className="product-card__image"
        src={imageUrl}
        alt={name}
        onError={handleImageError}
      />
      <div className="product-card__info">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__price">{formatPrice(price)}</p>
        <p className="product-card__favorite">
          <img src="/images/icons/ic_heart.svg" alt="좋아요" />
          {favoriteCount}
        </p>
      </div>
    </article>
  );
}

export default ProductCard;
