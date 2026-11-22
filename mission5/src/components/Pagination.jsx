const GROUP=5;
export default function Pagination({page,totalPages,onChange}){
  if(totalPages<=1)return null;
  const start=Math.floor((page-1)/GROUP)*GROUP+1;
  const nums=Array.from({length:Math.min(GROUP,totalPages-start+1)},(_,i)=>start+i);
  return <nav className="pagination" aria-label="상품 페이지">
    <button disabled={page===1} onClick={()=>onChange(page-1)} aria-label="이전 페이지">‹</button>
    {nums.map(n=><button key={n} className={n===page?'active':''} aria-current={n===page?'page':undefined} onClick={()=>onChange(n)}>{n}</button>)}
    <button disabled={page>=totalPages} onClick={()=>onChange(page+1)} aria-label="다음 페이지">›</button>
  </nav>;
}
