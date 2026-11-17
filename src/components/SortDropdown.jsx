import { useState } from 'react';
import icSort from '../assets/images/ic_sort.png';
import icArrowDown from '../assets/images/ic_arrow_down.png';

export default function SortDropdown({
  options,
  value,
  onChange,
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedValue = options.find((option) => option.value === value);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        type='button'
        aria-label={`정렬 순서: ${selectedValue.label}`}
        aria-expanded={isOpen}
        onClick={handleToggle}
        className='flex size-10.5 items-center justify-center rounded-xl border border-secondary-200 bg-white aria-expanded:border-secondary-800 focus-visible:border-secondary-800 md:w-32.5 md:justify-between md:px-5'
      >
        {/* MO */}
        <img src={icSort} className='size-6 md:hidden' alt='' />
        {/* Tablet + PC */}
        <span className='hidden text-lg-regular text-secondary-800 md:inline-block'>
          {selectedValue.label}
        </span>
        <img className='hidden size-6 md:block' src={icArrowDown} alt='' />
      </button>

      {isOpen && (
        <ul className='absolute top-full right-0 z-10 mt-1 w-32.5 overflow-hidden rounded-xl border border-secondary-200 bg-white'>
          {options.map((option) => (
            <li
              key={option.value}
              className='not-last:border-b not-last:border-secondary-200'
            >
              <button
                type='button'
                onClick={() => handleSelect(option.value)}
                className='h-10.5 w-full text-lg-regular text-secondary-800'
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
