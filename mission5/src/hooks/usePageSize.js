import {useEffect,useState} from 'react';
function sizeForWidth(w){return w<768?4:w<1200?6:10;}
export default function usePageSize(){
  const [pageSize,setPageSize]=useState(()=>sizeForWidth(window.innerWidth));
  useEffect(()=>{
    const update=()=>setPageSize(sizeForWidth(window.innerWidth));
    window.addEventListener('resize',update);
    return ()=>window.removeEventListener('resize',update);
  },[]);
  return pageSize;
}
