import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(inputValue.trim());
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="search">
      <img
        className="search-bar__icon"
        src="/images/icons/ic_search.svg"
        alt=""
      />
      <label htmlFor="product-search" className="sr-only">
        상품 검색
      </label>
      <input
        id="product-search"
        className="search-bar__input"
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="검색할 상품을 입력해주세요"
      />
    </form>
  );
}

export default SearchBar;
