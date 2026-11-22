import {useState,useEffect} from 'react';
import {Link,useSearchParams} from 'react-router';
import useProducts from '../../hooks/useProducts.js';
import usePageSize from '../../hooks/usePageSize.js';
import ProductCard from '../../components/ProductCard.jsx';
import Pagination from '../../components/Pagination.jsx';
export default function ItemListPage(){
  const [params,setParams]=useSearchParams();
  const page=Math.max(1,Number(params.get('page'))||1);
  const keyword=params.get('keyword')||'';
  const [search,setSearch]=useState(keyword);
  const pageSize=usePageSize();
  const {products,totalCount,loading,error}=useProducts({page,pageSize,keyword});
  const totalPages=Math.ceil(totalCount/pageSize);
  useEffect(()=>setSearch(keyword),[keyword]);
  useEffect(()=>{
    if(totalPages>0&&page>totalPages)setParams(prev=>{const next=new URLSearchParams(prev);next.set('page',String(totalPages));return next;},{replace:true});
  },[page,totalPages,setParams]);
  const update=(changes)=>{
    setParams(prev=>{const next=new URLSearchParams(prev);Object.entries(changes).forEach(([k,v])=>{if(v===null||v==='')next.delete(k);else next.set(k,String(v));});return next;});
  };
  return <div className="items-page page-container">
    <div className="items-toolbar"><h1>판매 중인 상품</h1>
      <div className="items-controls">
        <form className="product-search" onSubmit={e=>{e.preventDefault();update({keyword:search.trim(),page:1});}}>
          <button type="submit" aria-label="검색">⌕</button><input aria-label="상품 검색" value={search} onChange={e=>setSearch(e.target.value)} placeholder="검색할 상품을 입력해주세요"/>
        </form>
        <Link to="/registration" className="primary-button">상품 등록하기</Link>
        <select aria-label="상품 정렬" value="recent" onChange={()=>{}}><option value="recent">최신순</option></select>
      </div>
    </div>
    {loading&&<p className="status-message">상품을 불러오는 중...</p>}
    {error&&<p className="status-message error" role="alert">상품을 불러오지 못했어요: {error}<br/>Express 서버와 VITE_API_URL을 확인해 주세요.</p>}
    {!loading&&!error&&<>{products.length===0?<p className="status-message">등록된 상품이 없습니다.</p>:<div className="product-grid">{products.map(p=><ProductCard key={p.id} product={p}/>)}</div>}
    <Pagination page={page} totalPages={totalPages} onChange={n=>update({page:n})}/></>}
  </div>;
}
