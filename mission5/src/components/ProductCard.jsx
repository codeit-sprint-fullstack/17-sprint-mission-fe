import {Link} from 'react-router';
export default function ProductCard({product}){
  return <Link className="product-card" to={'/items/'+product.id}>
    <div className="product-image"><img src="/images/product-placeholder.svg" alt="상품 기본 이미지" /></div>
    <p className="product-name">{product.name}</p>
    <strong className="product-price">{Number(product.price).toLocaleString('ko-KR')}원</strong>
  </Link>;
}
