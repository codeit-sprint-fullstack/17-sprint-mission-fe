import { useEffect, useRef, useState } from 'react'
import arrowDown from '../assets/icons/ic_arrow_down.png'
import './SortDropdown.css'

const OPTIONS = [
  { value: 'recent', label: '최신순' },
  { value: 'favorite', label: '좋아요순' },
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
        <img src={arrowDown} alt="" />
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
