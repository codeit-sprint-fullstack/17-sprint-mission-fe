import {useEffect,useState} from 'react';
import axios from 'axios';
import {getProducts} from '../api/productApi.js';
export default function useProducts({page=1,pageSize=10,keyword='',orderBy='recent'}) {
  const [products,setProducts]=useState([]);
  const [totalCount,setTotalCount]=useState(0);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState('');
  useEffect(()=>{
    const controller=new AbortController();
    async function load(){
      setLoading(true);setError('');
      try {
        const data=await getProducts({page,pageSize,keyword:keyword||undefined,orderBy},controller.signal);
        if(controller.signal.aborted)return;
        setProducts(Array.isArray(data.list)?data.list:[]);
        setTotalCount(Number(data.totalCount)||0);
      }catch(e){
        if(axios.isCancel(e)||controller.signal.aborted)return;
        setError(e.message);setProducts([]);setTotalCount(0);
      }finally{if(!controller.signal.aborted)setLoading(false);}
    }
    load();
    return ()=>controller.abort();
  },[page,pageSize,keyword,orderBy]);
  return {products,totalCount,loading,error};
}
