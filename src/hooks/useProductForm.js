import { useState } from 'react';

const INITIAL_VALUES = { name: '', description: '', price: '', tag: '' };

function validate({ name, description, price, tag }) {
  const errors = {};

  const nameValue = name.trim();
  if (!nameValue) errors.name = '상품명을 입력해주세요';
  else if (nameValue.length > 10) errors.name = '10자 이내로 입력해주세요';

  const descValue = description.trim();
  if (descValue.length < 10) errors.description = '10자 이상 입력해주세요';
  else if (descValue.length > 100) errors.description = '100자 이내로 입력해주세요';

  const priceValue = price.trim();
  if (!priceValue) errors.price = '판매 가격을 입력해주세요';
  else if (!/^\d+$/.test(priceValue)) errors.price = '숫자로 입력해주세요'; // 처음부터 끝까지 숫자만 1개 이상

  if (tag.trim().length > 5) errors.tag = '5글자 이내로 입력해주세요';

  return errors;
}

export default function useProductForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [tags, setTags] = useState([]);
  const [touched, setTouched] = useState({}); // blur input

  const errors = validate(values);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const addTag = () => {
    const tag = values.tag.trim();
    if (!tag || errors.tag) return;

    setTags((prev) => (prev.includes(tag) ? prev : [...prev, tag]));
    setValues((prev) => ({ ...prev, tag: '' })); // tag input 비우기
  };

  const removeTag = (target) => {
    setTags((prev) => prev.filter((t) => t !== target));
  };

  // 태그는 입력 즉시, 나머지는 한 번 건드린(blur) 칸만 에러 표시
  const getError = (field) =>
    field === 'tag' || touched[field] ? errors[field] : '';

  const isFilled =
    values.name.trim() !== '' &&
    values.description.trim() !== '' &&
    values.price.trim() !== '' &&
    tags.length > 0;
  const isValid = isFilled && Object.keys(errors).length === 0;

  return {
    values,
    tags,
    getError,
    handleChange,
    handleBlur,
    addTag,
    removeTag,
    isValid,
  };
}
