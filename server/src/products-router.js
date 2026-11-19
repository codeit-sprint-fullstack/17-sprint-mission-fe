import { Router } from 'express'
import mongoose from 'mongoose'
import { HttpError } from './http-error.js'
import { Product } from './product.js'

export const productsRouter = Router()

const editableFields = {
  name: (value) => typeof value === 'string',
  description: (value) => typeof value === 'string',
  price: (value) => typeof value === 'number',
  tags: (value) => Array.isArray(value) && value.every((tag) => typeof tag === 'string'),
}

function productInput(body, requireAll) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw new HttpError(400, '상품 정보를 JSON 객체로 입력해 주세요.')
  }
  const entries = Object.entries(body)
  if (requireAll && entries.length !== Object.keys(editableFields).length) {
    throw new HttpError(400, '상품명, 상품 소개, 가격, 태그를 입력해 주세요.')
  }
  if (entries.length === 0) throw new HttpError(400, '수정할 값을 입력해 주세요.')

  for (const [field, value] of entries) {
    if (!Object.hasOwn(editableFields, field) || !editableFields[field](value)) {
      throw new HttpError(400, '상품 필드 이름과 값의 형식을 확인해 주세요.')
    }
  }
  return Object.fromEntries(entries)
}

function readInteger(value, fallback, minimum, maximum) {
  if (value === undefined) return fallback
  if (typeof value === 'string' && /^\d+$/.test(value)) {
    const parsed = Number(value)
    if (Number.isSafeInteger(parsed) && parsed >= minimum && parsed <= maximum) return parsed
  }
  throw new HttpError(400, 'offset은 0 이상, limit은 1~100 사이의 정수로 입력해 주세요.')
}

function productSummary({ _id, name, price, createdAt }) {
  return { id: _id.toString(), name, price, createdAt }
}

function productDetail(product) {
  const { description, tags } = product
  return { ...productSummary(product), description, tags }
}

productsRouter.param('id', (_request, _response, next, id) => {
  if (!mongoose.isObjectIdOrHexString(id)) {
    return next(new HttpError(400, '상품 ID 형식을 확인해 주세요.'))
  }
  return next()
})

productsRouter.get('/', async (request, response) => {
  const { keyword = '', orderBy = 'recent' } = request.query
  const offset = readInteger(request.query.offset, 0, 0, Number.MAX_SAFE_INTEGER)
  const limit = readInteger(request.query.limit, 10, 1, 100)
  if (orderBy !== 'recent') throw new HttpError(400, 'orderBy에는 recent를 사용할 수 있습니다.')
  if (typeof keyword !== 'string' || keyword.length > 100) {
    throw new HttpError(400, '검색어를 100자 이내의 문자열로 입력해 주세요.')
  }

  const term = keyword.trim().replace(/[.*+?^{}$()|[\]\\]/g, '\\$&')
  const filter = {}
  if (term) {
    const match = new RegExp(term, 'i')
    filter.$or = [{ name: match }, { description: match }]
  }

  const [products, totalCount] = await Promise.all([
    Product.find(filter)
      .select('name price createdAt')
      .sort({ createdAt: -1, _id: -1 })
      .skip(offset)
      .limit(limit)
      .lean(),
    Product.countDocuments(filter),
  ])
  response.json({ list: products.map(productSummary), totalCount })
})

productsRouter.post('/', async (request, response) => {
  const product = await Product.create(productInput(request.body, true))
  const detail = { ...productDetail(product), updatedAt: product.updatedAt }
  response.status(201).location(`${request.baseUrl}/${detail.id}`).json(detail)
})

productsRouter.get('/:id', async (request, response) => {
  const product = await Product.findById(request.params.id).lean()
  if (!product) throw new HttpError(404, '해당 상품을 찾을 수 없습니다.')
  response.json(productDetail(product))
})

productsRouter.patch('/:id', async (request, response) => {
  const changes = productInput(request.body, false)
  const product = await Product.findByIdAndUpdate(
    request.params.id,
    { $set: changes },
    { returnDocument: 'after', runValidators: true },
  ).lean()
  if (!product) throw new HttpError(404, '해당 상품을 찾을 수 없습니다.')
  response.json({ ...productDetail(product), updatedAt: product.updatedAt })
})

productsRouter.delete('/:id', async (request, response) => {
  const result = await Product.deleteOne({ _id: request.params.id })
  if (result.deletedCount === 0) throw new HttpError(404, '해당 상품을 찾을 수 없습니다.')
  response.status(204).end()
})
