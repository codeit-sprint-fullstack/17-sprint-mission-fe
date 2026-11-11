import useDeviceType from '../hooks/useDeviceType.js';
import useProducts from '../hooks/useProducts.js';
import { BEST_PAGE_SIZE } from '../utils/constants.js';
import ProductCard from './ProductCard.jsx';

function BestProducts() {
  const deviceType = useDeviceType();
  const pageSize = BEST_PAGE_SIZE[deviceType];

  const { products, isLoading, error } = useProducts({
    page: 1,
    pageSize,
    orderBy: 'favorite',
    keyword: '',
  });

  return (
    <section className="best-products">
      <h2 className="section-title">베스트 상품</h2>

      {error && <p className="status-message">상품을 불러오지 못했어요.</p>}
      {!error && isLoading && products.length === 0 && (
        <p className="status-message">불러오는 중...</p>
      )}

      <ul className="best-products__grid">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} variant="best" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BestProducts;
