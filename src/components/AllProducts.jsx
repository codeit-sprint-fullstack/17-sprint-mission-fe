import { useEffect, useState } from 'react';
import useDeviceType from '../hooks/useDeviceType.js';
import useProducts from '../hooks/useProducts.js';
import { ALL_PAGE_SIZE } from '../utils/constants.js';
import ProductCard from './ProductCard.jsx';
import SearchBar from './SearchBar.jsx';
import SortDropdown from './SortDropdown.jsx';
import Pagination from './Pagination.jsx';

function AllProducts() {
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState('recent');
  const [keyword, setKeyword] = useState('');

  const deviceType = useDeviceType();
  const pageSize = ALL_PAGE_SIZE[deviceType];

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  const { products, totalCount, isLoading, error } = useProducts({
    page,
    pageSize,
    orderBy,
    keyword,
  });

  const totalPages = Math.ceil(totalCount / pageSize);

  const handleSearch = (newKeyword) => {
    setKeyword(newKeyword);
    setPage(1);
  };

  const handleOrderChange = (newOrderBy) => {
    setOrderBy(newOrderBy);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <section className="all-products">
      <div className="all-products__header">
        <h2 className="section-title all-products__title">판매 중인 상품</h2>
        <div className="all-products__search">
          <SearchBar onSearch={handleSearch} />
        </div>
        <a href="/registration" className="all-products__register">
          상품 등록하기
        </a>
        <div className="all-products__sort">
          <SortDropdown value={orderBy} onChange={handleOrderChange} />
        </div>
      </div>

      {error && <p className="status-message">상품을 불러오지 못했어요.</p>}
      {!error && !isLoading && products.length === 0 && (
        <p className="status-message">
          {keyword ? `'${keyword}'에 해당하는 상품이 없어요.` : '등록된 상품이 없어요.'}
        </p>
      )}

      <ul className={`all-products__grid ${isLoading ? 'is-loading' : ''}`}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} variant="all" />
          </li>
        ))}
      </ul>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
}

export default AllProducts;
