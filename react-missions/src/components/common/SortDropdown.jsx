import { useId, useRef, useState } from "react";
import "./SortDropdown.css";

export default function SortDropdown({ value, options, onChange, className }) {
  const listId = useId();
  const sortTriggerRef = useRef(null);
  const [isSortOpen, setIsSortOpen] = useState(false);

  return (
    <div
      className={className ? `sort-dropdown ${className}` : "sort-dropdown"}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setIsSortOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setIsSortOpen(false);
          sortTriggerRef.current?.focus();
        }
      }}
    >
      <button
        type="button"
        className="sort-dropdown-trigger"
        ref={sortTriggerRef}
        aria-expanded={isSortOpen}
        aria-controls={listId}
        onClick={() => setIsSortOpen((open) => !open)}
      >
        <span>{options.find((option) => option.value === value)?.label}</span>
        <img src="/ic_arrow_down.png" alt="" />
      </button>
      <ul
        id={listId}
        className="sort-dropdown-list"
        hidden={!isSortOpen}
      >
        {options.map((order) => (
          <li className="sort-dropdown-item" key={order.value}>
            <button
              type="button"
              aria-pressed={value === order.value}
              onClick={() => {
                onChange(order.value);
                setIsSortOpen(false);
                sortTriggerRef.current?.focus();
              }}
            >
              {order.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
