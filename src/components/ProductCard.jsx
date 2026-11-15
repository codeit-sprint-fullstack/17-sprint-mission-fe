import { useState } from 'react';
import { Link } from 'react-router';
import icHeartOff from '../assets/images/ic_heart_off.png';
// import icHeartOn from '../assets/images/ic_heart_on.png';

export default function ProductCard({
  variant = 'default',
  thumbSrc,
  title,
  price,
  favoriteCount,
}) {
  const [isImageError, setIsImageError] = useState(false);
  const hasImage = thumbSrc && !isImageError;

  const thumbRadius =
    variant === 'best' ? 'rounded-2xl' : 'rounded-xl md:rounded-2xl';

  return (
    <li>
      <Link to='#'>
        <div className={`overflow-hidden ${thumbRadius}`}>
          {hasImage ? (
            <img
              className='aspect-square w-full object-cover'
              src={thumbSrc}
              onError={() => setIsImageError(true)}
              alt={`${title} 이미지`}
            />
          ) : (
            <span
              className='aspect-square w-full bg-secondary-200'
              aria-hidden='true'
            ></span>
          )}
        </div>
        <div className='mt-4 flex flex-col gap-1.5'>
          <h3 className='truncate text-md-medium text-secondary-800'>
            {title}
          </h3>
          <strong className='text-lg-bold text-secondary-800'>
            {`${price.toLocaleString()}원`}
          </strong>
        </div>
      </Link>
      <button
        type='button'
        aria-label={`좋아요 ${favoriteCount}`}
        className='mt-1.5 flex items-center gap-1 w-fit'
      >
        <img className='size-4' src={icHeartOff} alt='' />
        <span className='text-xs-medium text-secondary-600'>
          {favoriteCount}
        </span>
      </button>
    </li>
  );
}
