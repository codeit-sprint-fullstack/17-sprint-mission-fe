import { useState } from 'react'

const RULES = {
  name: (value) => {
    if (value.length < 1) return '상품명을 입력해주세요'
    if (value.length > 10) return '10자 이내로 입력해주세요'
    return ''
  },
  description: (value) => {
    if (value.length < 10) return '10자 이상 입력해주세요'
    if (value.length > 100) return '100자 이내로 입력해주세요'
    return ''
  },
  price: (value) => {
    if (value.length < 1) return '판매 가격을 입력해주세요'
    if (!/^\d+$/.test(value)) return '숫자로 입력해주세요'
    return ''
  },
  tag: (value) => (value.length > 5 ? '5글자 이내로 입력해주세요' : ''),
}

const FIELDS = Object.keys(RULES)

export function useProductForm() {
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    tag: '',
  })
  const [tags, setTags] = useState([])
  const [touched, setTouched] = useState({})

  const trimmed = {}
  const errors = {}
  for (const field of FIELDS) {
    trimmed[field] = values[field].trim()
    errors[field] = touched[field] ? RULES[field](trimmed[field]) : ''
  }

  const submitTags =
    trimmed.tag && !tags.includes(trimmed.tag) ? [...tags, trimmed.tag] : tags

  const isValid =
    FIELDS.every((field) => !RULES[field](trimmed[field])) &&
    submitTags.length > 0

  const product = {
    name: trimmed.name,
    description: trimmed.description,
    price: Number(trimmed.price),
    tags: submitTags,
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  const addTag = () => {
    if (!trimmed.tag) return
    setTouched((prev) => ({ ...prev, tag: true }))
    if (RULES.tag(trimmed.tag)) return

    if (!tags.includes(trimmed.tag)) {
      setTags((prev) => [...prev, trimmed.tag])
    }
    setValues((prev) => ({ ...prev, tag: '' }))
  }

  const removeTag = (target) => {
    setTags((prev) => prev.filter((tag) => tag !== target))
  }

  return {
    values,
    tags,
    errors,
    isValid,
    product,
    handleChange,
    handleBlur,
    addTag,
    removeTag,
  }
}
