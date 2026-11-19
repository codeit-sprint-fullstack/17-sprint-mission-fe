import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createProduct } from '../api/products'
import './RegistrationPage.css'

function RegistrationPage() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [tag, setTag] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    try {
      const product = await createProduct({
        name,
        description,
        price: Number(price),
        tags: [],
      })
      navigate(`/items/${product.id}`)
    } catch (err) {
      setError(err.response?.data?.message ?? '상품을 등록하지 못했어요.')
      setIsSubmitting(false)
    }
  }

  return (
    <form className="registration" onSubmit={handleSubmit}>
      <div className="registration-header">
        <h1 className="registration-title">상품 등록하기</h1>
        <button
          type="submit"
          className="registration-submit"
          disabled={isSubmitting}
        >
          등록
        </button>
      </div>
      <div className="registration-fields">
        <label className="registration-field">
          <span className="registration-label">상품명</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="상품명을 입력해주세요"
          />
        </label>
        <label className="registration-field">
          <span className="registration-label">상품 소개</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="상품 소개를 입력해주세요"
          />
        </label>
        <label className="registration-field">
          <span className="registration-label">판매가격</span>
          <input
            type="text"
            inputMode="numeric"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="판매 가격을 입력해주세요"
          />
        </label>
        <label className="registration-field">
          <span className="registration-label">태그</span>
          <input
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            placeholder="태그를 입력해주세요"
          />
        </label>
      </div>
      {error && <p className="registration-error">{error}</p>}
    </form>
  )
}

export default RegistrationPage
