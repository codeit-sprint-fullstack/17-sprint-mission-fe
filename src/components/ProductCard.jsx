import { useState } from 'react';
import { Link } from 'react-router';
import imgDefault from '../assets/images/img_default.png';
import icHeartOff from '../assets/images/ic_heart_off.png';
// import icHeartOn from '../assets/images/ic_heart_on.png';

export default function ProductCard({
  variant = 'default',
  thumbSrc,
  title,
  price,
  favoriteCount,
}) {
  const [imgError, setImgError] = useState(false);
  const hasImage = thumbSrc && !imgError;

  const thumbRadius =
    variant === 'best' ? 'rounded-2xl' : 'rounded-xl md:rounded-2xl';

  return (
    <li>
      <Link to='#'>
        <div className={`aspect-square overflow-hidden ${thumbRadius}`}>
          {hasImage ? (
            <img
              className='h-full'
              src={thumbSrc}
              onError={() => setImgError(true)}
              alt={`${title} 이미지`}
            />
          ) : (
            <img className='h-full' src={imgDefault} alt='' />
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
