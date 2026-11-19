import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createProduct } from '../api/products'
import { useProductForm } from '../hooks/useProductForm'
import deleteIcon from '../assets/icons/ic_x_circle.svg'
import './RegistrationPage.css'

function Field({ id, label, error, after, children }) {
  return (
    <div className="registration-field">
      <label className="registration-label" htmlFor={id}>
        {label}
      </label>
      <div>
        {children}
        {error && <span className="registration-field-error">{error}</span>}
        {after}
      </div>
    </div>
  )
}

function RegistrationPage() {
  const navigate = useNavigate()
  const {
    values,
    tags,
    errors,
    isValid,
    product,
    handleChange,
    handleBlur,
    addTag,
    removeTag,
  } = useProductForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isValid) return
    setIsSubmitting(true)
    setError('')
    try {
      const created = await createProduct(product)
      navigate(`/items/${created.id}`)
    } catch (err) {
      setError(err.response?.data?.message ?? '상품을 등록하지 못했어요.')
      setIsSubmitting(false)
    }
  }

  const handleTagKeyDown = (e) => {
    if (e.key !== 'Enter') return
    e.preventDefault()
    if (e.nativeEvent.isComposing) return
    addTag()
  }

  return (
    <form className="registration" onSubmit={handleSubmit}>
      <div className="registration-header">
        <h1 className="registration-title">상품 등록하기</h1>
        <button
          type="submit"
          className="registration-submit"
          disabled={!isValid || isSubmitting}
        >
          등록
        </button>
      </div>
      <div className="registration-fields">
        <Field id="name" label="상품명" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(errors.name)}
            placeholder="상품명을 입력해주세요"
          />
        </Field>
        <Field id="description" label="상품 소개" error={errors.description}>
          <textarea
            id="description"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(errors.description)}
            placeholder="상품 소개를 입력해주세요"
          />
        </Field>
        <Field id="price" label="판매가격" error={errors.price}>
          <input
            id="price"
            name="price"
            type="text"
            inputMode="numeric"
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(errors.price)}
            placeholder="판매 가격을 입력해주세요"
          />
        </Field>
        <Field
          id="tag"
          label="태그"
          error={errors.tag}
          after={
            <ul className="registration-tags">
              {tags.map((tag) => (
                <li key={tag} className="registration-tag">
                  #{tag}
                  <button
                    type="button"
                    aria-label={`${tag} 삭제`}
                    onClick={() => removeTag(tag)}
                  >
                    <img src={deleteIcon} alt="" />
                  </button>
                </li>
              ))}
            </ul>
          }
        >
          <input
            id="tag"
            name="tag"
            type="text"
            value={values.tag}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleTagKeyDown}
            aria-invalid={Boolean(errors.tag)}
            placeholder="태그를 입력해주세요"
          />
        </Field>
      </div>
      {error && <p className="registration-error">{error}</p>}
    </form>
  )
}

export default RegistrationPage
