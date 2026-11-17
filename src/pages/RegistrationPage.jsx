import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../api/productApi.js';
import useProductValidation from '../hooks/useProductValidation.js';
import FormField from '../components/registration/FormField.jsx';
import TagChips from '../components/registration/TagChips.jsx';

function RegistrationPage() {
  const navigate = useNavigate();
  const { values, errors, isFilled, isValid, setValue, addTag, removeTag } =
    useProductValidation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const isSubmitDisabled = !isFilled || !isValid || isSubmitting;

  const handleChange = (event) => {
    setValue(event.target.name, event.target.value);
  };

  const handleTagKeyDown = (event) => {
    if (event.key !== 'Enter') return;
    if (event.nativeEvent.isComposing) return;
    event.preventDefault();
    addTag();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitDisabled) return;

    setIsSubmitting(true);
    setSubmitError('');
    try {
      const product = await createProduct({
        name: values.name.trim(),
        description: values.description.trim(),
        price: Number(values.price),
        tags: values.tags,
      });
      navigate(`/items/${product.id}`);
    } catch (err) {
      setSubmitError(err.data?.message ?? '상품 등록에 실패했어요. 잠시 후 다시 시도해 주세요.');
      setIsSubmitting(false);
    }
  };

  return (
    <main className="registration-page">
      <form className="registration-form" onSubmit={handleSubmit} noValidate>
        <div className="registration-form__header">
          <h1 className="registration-form__title">상품 등록하기</h1>
          <button
            type="submit"
            className="registration-form__submit"
            disabled={isSubmitDisabled}
          >
            {isSubmitting ? '등록 중' : '등록'}
          </button>
        </div>

        {submitError && (
          <p className="registration-form__submit-error" role="alert">
            {submitError}
          </p>
        )}

        <FormField
          id="name"
          name="name"
          label="상품명"
          placeholder="상품명을 입력해주세요"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />

        <FormField
          id="description"
          name="description"
          label="상품 소개"
          as="textarea"
          placeholder="상품 소개를 입력해주세요"
          value={values.description}
          onChange={handleChange}
          error={errors.description}
        />

        <FormField
          id="price"
          name="price"
          label="판매가격"
          inputMode="numeric"
          placeholder="판매 가격을 입력해주세요"
          value={values.price}
          onChange={handleChange}
          error={errors.price}
        />

        <div>
          <FormField
            id="tagInput"
            name="tagInput"
            label="태그"
            placeholder="태그를 입력해주세요"
            value={values.tagInput}
            onChange={handleChange}
            onKeyDown={handleTagKeyDown}
            error={errors.tagInput}
          />
          <TagChips tags={values.tags} onRemove={removeTag} />
        </div>
      </form>
    </main>
  );
}

export default RegistrationPage;
