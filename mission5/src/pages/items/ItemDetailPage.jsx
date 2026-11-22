import {Link,useParams} from 'react-router';
export default function ItemDetailPage(){
  const {id}=useParams();
  return <div className="page-container detail-placeholder"><h1>상품 상세 페이지</h1><p>상품이 등록되었습니다. 상세 화면은 이번 미션 요구사항에 따라 비워 두었습니다.</p><p className="detail-id">상품 ID: {id}</p><Link to="/items" className="primary-button">중고마켓으로 돌아가기</Link></div>;
}
