import {useState} from 'react';
import {useNavigate} from 'react-router';
import {createProduct} from '../../api/productApi.js';
import useProductForm from '../../hooks/useProductForm.js';
export default function RegistrationPage(){
  const navigate=useNavigate();
  const {values,tags,isValid,handleChange,getError,tagError,addTag,removeTag,setTouched}=useProductForm();
  const [submitting,setSubmitting]=useState(false);
  const [serverError,setServerError]=useState('');
  const submit=async(e)=>{
    e.preventDefault();
    setTouched({name:true,description:true,price:true,tag:true});
    if(!isValid||submitting)return;
    setSubmitting(true);setServerError('');
    try{
      const product=await createProduct({name:values.name.trim(),description:values.description.trim(),price:Number(values.price),tags});
      const id=product.id??product.product?.id;
      if(!id)throw new Error('서버 응답에 상품 ID가 없습니다.');
      navigate('/items/'+id);
    }catch(err){setServerError(err.message);}
    finally{setSubmitting(false);}
  };
  return <div className="registration-page page-container"><form onSubmit={submit} noValidate>
    <div className="registration-title"><h1>상품 등록하기</h1><button className="primary-button" disabled={!isValid||submitting} type="submit">{submitting?'등록 중...':'등록'}</button></div>
    <div className="field"><label htmlFor="name">상품명</label><input id="name" name="name" value={values.name} onChange={handleChange} placeholder="상품명을 입력해주세요" className={getError('name')?'invalid':''} aria-invalid={!!getError('name')}/>{getError('name')&&<p className="field-error">{getError('name')}</p>}</div>
    <div className="field"><label htmlFor="description">상품 소개</label><textarea id="description" name="description" value={values.description} onChange={handleChange} placeholder="상품 소개를 입력해주세요" className={getError('description')?'invalid':''} aria-invalid={!!getError('description')}/>{getError('description')&&<p className="field-error">{getError('description')}</p>}</div>
    <div className="field"><label htmlFor="price">판매가격</label><input id="price" name="price" inputMode="numeric" value={values.price} onChange={handleChange} placeholder="판매 가격을 입력해주세요" className={getError('price')?'invalid':''} aria-invalid={!!getError('price')}/>{getError('price')&&<p className="field-error">{getError('price')}</p>}</div>
    <div className="field"><label htmlFor="tag">태그</label><input id="tag" name="tag" value={values.tag} onChange={handleChange} placeholder="태그를 입력해주세요" className={tagError?'invalid':''} aria-invalid={!!tagError} onKeyDown={e=>{if(e.key==='Enter'){e.preventDefault();addTag();}}}/>{tagError&&<p className="field-error">{tagError}</p>}
    <div className="tag-list">{tags.map(tag=><span className="tag-chip" key={tag}>#{tag}<button type="button" onClick={()=>removeTag(tag)} aria-label={`${tag} 태그 삭제`}>×</button></span>)}</div></div>
    {serverError&&<p className="field-error" role="alert">상품 등록 실패: {serverError}</p>}
  </form></div>;
}
