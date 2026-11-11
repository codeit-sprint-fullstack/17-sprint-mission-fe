import { useCallback, useRef, useState } from 'react';
import useClickOutside from '../hooks/useClickOutside.js';
import { ORDER_OPTIONS } from '../utils/constants.js';

function SortDropdown({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const close = useCallback(() => setIsOpen(false), []);
  useClickOutside(dropdownRef, close);

  const selectedLabel = ORDER_OPTIONS.find((option) => option.value === value)?.label;

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="sort-dropdown" ref={dropdownRef}>
      <button
        type="button"
        className="sort-dropdown__toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="sort-dropdown__label">{selectedLabel}</span>
        <img
          className="sort-dropdown__arrow"
          src="/images/icons/ic_arrow_down.svg"
          alt=""
        />
        <img
          className="sort-dropdown__sort-icon"
          src="/images/icons/ic_sort.svg"
          alt="정렬"
        />
      </button>

      {isOpen && (
        <ul className="sort-dropdown__list" role="listbox">
          {ORDER_OPTIONS.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                className="sort-dropdown__option"
                onClick={() => handleSelect(option.value)}
                role="option"
                aria-selected={option.value === value}
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

export default SortDropdown;
