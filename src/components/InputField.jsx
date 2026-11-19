import { useState } from 'react';
import icVisibilityOn from '../assets/images/ic_visibility_on.png';
import icVisibilityOff from '../assets/images/ic_visibility_off.png';

export default function InputField({
  label,
  type = 'text',
  name,
  id,
  placeholder,
  style = '',
  error,
  ...rest
}) {
  const [isVisible, setIsVisible] = useState(false);
  const handleTogglePw = () => setIsVisible((prev) => !prev);

  const isPassword = type === 'password';
  const inputType = isPassword && isVisible ? 'text' : type;

  return (
    <div className='grid'>
      <label htmlFor={id} className='mb-4 text-lg-bold md:text-2lg-bold'>
        {label}
      </label>
      <input
        type={inputType}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`col-start-1 row-start-2 h-14 ${
          isPassword ? 'pr-[3.13rem] [&::-ms-reveal]:hidden' : ''
        } ${style}`}
        aria-invalid={Boolean(error)}
        {...rest}
      />
      {isPassword && (
        <button
          type='button'
          aria-label='비밀번호 보기'
          aria-pressed={isVisible}
          onClick={handleTogglePw}
          className='col-start-1 row-start-2 mr-6 size-6 self-center justify-self-end'
        >
          <img src={isVisible ? icVisibilityOn : icVisibilityOff} alt='' />
        </button>
      )}
      {error && (
        <p className='mt-2 text-lg-semibold text-error'>{error}</p>
      )}
    </div>
  );
}
