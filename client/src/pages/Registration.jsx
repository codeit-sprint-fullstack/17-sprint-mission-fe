import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createProduct } from '../api/products.js'
import '../css/registration.css'

export default function Registration() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [tag, setTag] = useState('')
  const [tags, setTags] = useState([])
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const amount = Number(price)
  const pendingTag = tag.trim().replace(/^#+/, '').trim()
  const isReady = name.trim() && description.trim() && /^[0-9]+$/.test(price)
    && Number.isSafeInteger(amount) && amount > 0

  function addTag(event) {
    if (event.key !== 'Enter' || event.nativeEvent.isComposing) return

    event.preventDefault()
    if (!pendingTag) return

    if (!tags.includes(pendingTag)) setTags([...tags, pendingTag])
    setTag('')
  }

  async function submit(event) {
    event.preventDefault()
    if (!isReady || submitting) return

    setSubmitting(true)
    setError('')

    try {
      const product = await createProduct({
        name: name.trim(),
        description: description.trim(),
        price: amount,
        tags: pendingTag && !tags.includes(pendingTag) ? [...tags, pendingTag] : tags,
      })
      navigate(`/items/${product.id}`, { replace: true })
    } catch {
      setError('상품을 등록하지 못했습니다. 잠시 후 다시 시도해 주세요.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="registration-page">
      <form onSubmit={submit}>
        <div className="registration-heading">
          <h1>상품 등록하기</h1>
          <button className="primary" type="submit" disabled={!isReady || submitting}>
            {submitting ? '등록 중…' : '등록'}
          </button>
        </div>
        {error && <p className="registration-error" role="alert">{error}</p>}
        <div className="registration-field">
          <label htmlFor="name">상품명</label>
          <input id="name" value={name} onChange={(event) => setName(event.target.value)}
            maxLength={100} placeholder="상품명을 입력해주세요" required />
        </div>
        <div className="registration-field">
          <label htmlFor="description">상품 소개</label>
          <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)}
            maxLength={1000} placeholder="상품 소개를 입력해주세요" required />
        </div>
        <div className="registration-field">
          <label htmlFor="price">판매가격</label>
          <input id="price" value={price} onChange={(event) => setPrice(event.target.value)}
            inputMode="numeric" placeholder="판매 가격을 입력해주세요" required />
        </div>
        <div className="registration-field">
          <label htmlFor="tag">태그</label>
          <input id="tag" value={tag} onChange={(event) => setTag(event.target.value)} onKeyDown={addTag}
            maxLength={30} enterKeyHint="done" placeholder="태그를 입력해주세요" aria-describedby="tag-instructions" />
          <span id="tag-instructions" className="visually-hidden">태그를 입력한 뒤 Enter 키를 눌러 추가하세요.</span>
          {tags.length > 0 && (
            <ul className="tags" aria-label="추가한 태그">
              {tags.map((value) => (
                <li key={value}>#{value}
                  <button type="button" aria-label={`${value} 태그 삭제`}
                    onClick={() => setTags(tags.filter((item) => item !== value))}>×</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
    </main>
  )
}
