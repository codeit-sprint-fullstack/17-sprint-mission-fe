import { useState } from 'react';
import Button from '../components/Button';
import InputField from '../components/InputField';
import TextareaField from '../components/TextareaField';
import TagField from '../components/TagField';
import useProductForm from '../hooks/useProductForm';
import { createProduct } from '../api/productApi';
import { useNavigate } from 'react-router';
import { ROUTES } from '../constants/routes';

export default function RegistrationPage() {
  const navi = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    values,
    tags,
    getError,
    handleChange,
    handleBlur,
    addTag,
    removeTag,
    isValid,
  } = useProductForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const data = await createProduct({
        name: values.name,
        description: values.description,
        price: Number(values.price),
        tags,
      });
      navi(ROUTES.DETAIL.replace(':id', data.id));
    } catch (err) {
      console.error(err.response?.status);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='inner'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl-bold text-secondary-800'>상품 등록하기</h2>
        <Button
          type='submit'
          form='form-registration'
          size='sm-42'
          disabled={!isValid || isSubmitting}
        >
          등록
        </Button>
      </div>
      <form
        id='form-registration'
        className='flex flex-col gap-6'
        onSubmit={handleSubmit}
      >
        <InputField
          label='상품명'
          name='name'
          id='name'
          placeholder='상품명을 입력해주세요'
          style='h-14'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError('name')}
          required
        />
        <TextareaField
          label='상품 소개'
          name='description'
          id='description'
          placeholder='상품 소개를 입력해주세요'
          style='min-h-70.5'
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError('description')}
          required
        />
        <InputField
          label='판매가격'
          name='price'
          id='price'
          placeholder='판매 가격을 입력해주세요'
          style='h-14'
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError('price')}
          required
        />
        <TagField
          style='h-14'
          value={values.tag}
          onChange={handleChange}
          error={getError('tag')}
          tags={tags}
          onAdd={addTag}
          onRemove={removeTag}
        />
      </form>
    </section>
  );
}
