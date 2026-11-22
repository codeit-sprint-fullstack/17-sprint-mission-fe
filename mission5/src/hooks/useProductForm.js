import {useState} from 'react';
// 강사님 useForm의 touched/validate 패턴을 상품 등록 폼에 적용
function validate(values,tags){
  const errors={};
  const name=values.name.trim(),description=values.description.trim(),price=values.price.trim();
  if(!name)errors.name='상품명을 입력해주세요';
  else if(name.length>10)errors.name='10자 이내로 입력해주세요';
  if(description.length<10)errors.description='10자 이상 입력해주세요';
  else if(description.length>100)errors.description='100자 이내로 입력해주세요';
  if(!price||!/^(0|[1-9]\d*)$/.test(price))errors.price='숫자로 입력해주세요';
  if(tags.some(tag=>tag.length>5))errors.tags='5글자 이내로 입력해주세요';
  return errors;
}
export default function useProductForm(){
  const [values,setValues]=useState({name:'',description:'',price:'',tag:''});
  const [tags,setTags]=useState([]);
  const [touched,setTouched]=useState({});
  const errors=validate(values,tags);
  const tagError=values.tag.trim().length>5?'5글자 이내로 입력해주세요':'';
  const isValid=Object.keys(errors).length===0 && tags.length>0 && !tagError;
  const handleChange=e=>{
    const {name,value}=e.target;
    setValues(prev=>({...prev,[name]:value}));
    setTouched(prev=>({...prev,[name]:true}));
  };
  const getError=name=>touched[name]?errors[name]:undefined;
  const addTag=()=>{
    const tag=values.tag.trim().replace(/^#/,'');
    setTouched(prev=>({...prev,tag:true}));
    if(!tag||tag.length>5)return;
    setTags(prev=>prev.includes(tag)?prev:[...prev,tag]);
    setValues(prev=>({...prev,tag:''}));
  };
  const removeTag=tag=>setTags(prev=>prev.filter(t=>t!==tag));
  return {values,tags,touched,errors,isValid,handleChange,getError,tagError,addTag,removeTag,setTouched};
}
