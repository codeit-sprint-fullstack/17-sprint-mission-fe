// // import { useState } from "react";
// // import ProductCard from "../components/ProductCard.jsx";
// // import Pagination from "../components/Pagination.jsx";
// // import usePageSize from "../hooks/usePageSize.js";
// // import useProducts from "../hooks/useProducts.js";
// // import { Link } from "react-router";
// import { useState } from 'react';
// import useTextValidation from '../hooks/useTextValidation';


// export default function Registration() {

//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     const [price, setPrice] = useState('');
//     const [tagInput, setTagInput] = useState('');
//     const [tags, setTags] = useState([]);

//     function handleSubmit(event) {
//         event.preventDefault();
//         if (isValid) return;
//     }

//     const { counts, errors, canAddTag, isValid } = useTextValidation({
//         name,
//         description,
//         price,
//         tagInput,
//         tags,
//     });

//     function handleTagKeyDown(event) {
//         if (event.key !== 'Enter' || event.nativeEvent.isComposing) return;

//         event.preventDefault();
//         if (!canAddTag) return;

//         setTags(previous => [...previous, tagInput.trim()]);
//         setTagInput('');
//     }

//     return (
//         <section className="productRegistor">
//             <form onSubmit={handleSubmit}>
//                 <div className="titleBar">
//                     <h2>상품 등록하기</h2>
//                     <button type="submit" className="post" disabled={handleSubmit}>등록</button>
//                 </div>
//                 <br />
//                 <h3>상품명</h3>
//                 {/* <input type="text" name="name" id="" placeholder="상품명을 입력해주세요." className="productInput"/> */}
//                 <input value={name}
//                     onChange={event => setName(event.target.value)}
//                     placeholder="상품명을 입력해주세요."
//                     className="productInput"
//                     aria-invalid={Boolean(errors.name)}
//                     aria-describedby={errors.name ? 'name-count name-error' : 'name-count'}/>
//                 <h3>상품 소개</h3>
//                 {/* <textarea name="description" id="" placeholder="상품 소개를 입력해주세요." className="productInput" rows={10} style={{resize:"none"}}/> */}
//                 <textarea value={description}
//                     onChange={event => setDescription(event.target.value)}
//                     placeholder="상품 소개를 입력해주세요."
//                     className="productInput"
//                     rows={10}
//                     style={{resize:"none"}}/>
//                 <h3>판매가격</h3>
//                 {/* <input type="text" name="price" id="" placeholder="판매 가격을 입력해주세요." className="productInput"/> */}
//                 <input value={price}
//                     text='number'
//                     onChange={event => setPrice(event.target.value)}
//                     placeholder="판매 가격을 입력해주세요."
//                     className="productInput"/>
//                 <h3>태그</h3>
//                 {/* <input type="text" name="tags" id="" placeholder="태그를 입력해주세요." className="productInput"/> */}
//                 <input value={tagInput}
//                     onChange={event => handleTagKeyDown(event)}
//                     placeholder="태그를 입력해주세요."
//                     className="productInput"/>
//             </form>
//         </section>
//     );
// }

import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { myapi } from '../api/api.js';
import useTextValidation from '../hooks/useTextValidation.js';

const fields = [
  { key: 'name', label: '상품명', placeholder: '상품명을 입력해주세요' },
  { key: 'description', label: '상품 소개', placeholder: '상품 소개를 입력해주세요' },
  { key: 'price', label: '판매 가격', placeholder: '판매 가격을 입력해주세요' },
  { key: 'tagInput', label: '태그 (선택)', placeholder: '태그를 입력해주세요' },
];

export default function Registration() {
  const [values, setValues] = useState({ name: '', description: '', price: '', tagInput: '' });
  const [tags, setTags] = useState([]);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [requestError, setRequestError] = useState('');
  const pending = useRef(false);
  const navigate = useNavigate();
  const { errors, hasRequiredValues, canAddTag, isValid } = useTextValidation(values);

  function setField(key, value) {
    setValues(previous => ({ ...previous, [key]: value }));
  }

  function markTouched(key) {
    setTouched(previous => ({ ...previous, [key]: true }));
  }

  function handleTagKeyDown(event) {
    if (event.key !== 'Enter' || event.nativeEvent.isComposing || event.nativeEvent.keyCode === 229) return;

    event.preventDefault();
    markTouched('tagInput');
    if (!canAddTag) return;

    setTags(previous => [...previous, values.tagInput.trim()]);
    setField('tagInput', '');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    if (!isValid || pending.current) return;

    pending.current = true;
    setSubmitting(true);
    setRequestError('');
    const draft = values.tagInput.trim();

    try {
      await myapi.post('/products', {
        name: values.name.trim(),
        description: values.description.trim(),
        price: Number(values.price),
        tags: draft ? [...tags, draft] : tags,
      });
      navigate('/items');
    } catch (error) {
      setRequestError(error.response?.data?.message ?? '상품 등록에 실패했습니다. 다시 시도해 주세요.');
    } finally {
      pending.current = false;
      setSubmitting(false);
    }
  }

  return (
    <section className="productRegistor">
      <form onSubmit={handleSubmit} noValidate>
        <div className="titleBar">
          <h2>상품 등록하기</h2>
          <button type="submit" className="post" disabled={!hasRequiredValues || submitting}>
            {submitting ? '등록 중…' : '등록'}
          </button>
        </div>

        {requestError && <p role="alert" className="fieldError">{requestError}</p>}

        {fields.map(({ key, label, placeholder }) => {
          const error = touched[key] || submitted ? errors[key === 'tagInput' ? 'tag' : key] : '';
          const inputProps = {
            id: 'product-' + key,
            name: key,
            className: 'productInput',
            placeholder,
            value: values[key],
            disabled: submitting,
            onChange: event => {
                setField(key, event.target.value);
                if (key === 'name') markTouched(key);
            },
            onBlur: () => markTouched(key),
            'aria-invalid': Boolean(error),
            'aria-describedby': error ? 'product-' + key + '-error' : undefined,
          };

          return (
            <div key={key} className="productField">
              <h3><label htmlFor={inputProps.id}>{label}</label></h3>
              {key === 'description' ? (
                <textarea {...inputProps} rows={10} />
              ) : (
                <input {...inputProps}
                  inputMode={key === 'price' ? 'numeric' : undefined}
                  onKeyDown={key === 'tagInput' ? handleTagKeyDown : undefined}
                />
              )}
              {error && <p id={'product-' + key + '-error'} className="fieldError">{error}</p>}
            </div>
          );
        })}

        {tags.length > 0 && (
          <ul className="tagList" aria-label="추가한 태그">
            {tags.map((tag, index) => (
              <li key={index} className="tagChip">
                #{tag}
                <button type="button" disabled={submitting} aria-label={tag + ' 태그 삭제'}
                  onClick={() => setTags(previous => previous.filter((_, position) => position !== index))}>
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </form>
    </section>
  );
}
