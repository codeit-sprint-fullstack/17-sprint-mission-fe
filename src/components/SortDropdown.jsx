import { useEffect, useRef, useState } from 'react'
import arrowDown from '../assets/icons/ic_arrow_down.png'
import sortIcon from '../assets/icons/ic_sort.png'
import { ORDER_BY } from '../constants/product'
import './SortDropdown.css'

const OPTIONS = [
  { value: ORDER_BY.RECENT, label: '최신순' },
  { value: ORDER_BY.FAVORITE, label: '좋아요순' },
]

function SortDropdown({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const current = OPTIONS.find((o) => o.value === value)

  return (
    <div className="sort-dropdown" ref={ref}>
      <button
        type="button"
        className="sort-dropdown-button"
        onClick={() => setIsOpen((v) => !v)}
      >
        <span>{current.label}</span>
        <img className="sort-dropdown-arrow" src={arrowDown} alt="" />
        <img className="sort-dropdown-icon" src={sortIcon} alt="" />
      </button>
      {isOpen && (
        <ul className="sort-dropdown-list">
          {OPTIONS.map((o) => (
            <li key={o.value}>
              <button
                type="button"
                onClick={() => {
                  onChange(o.value)
                  setIsOpen(false)
                }}
              >
                {o.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SortDropdown
