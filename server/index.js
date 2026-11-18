import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import express from 'express'
import { openProducts } from './products.js'

const app = express()
const port = Number(process.env.PORT ?? 3001)
const products = openProducts(process.env.PRODUCT_DB ?? fileURLToPath(new URL('../data/products.sqlite', import.meta.url)))
const dist = fileURLToPath(new URL('../dist/', import.meta.url))
const index = fileURLToPath(new URL('../dist/index.html', import.meta.url))

app.use(express.json({ limit: '16kb' }))

function positiveInteger(value, fallback) {
  if (value === undefined) return fallback
  if (typeof value !== 'string' || !/^\d+$/.test(value)) return NaN
  return Number(value)
}

app.get('/api/products', (req, res) => {
  const page = positiveInteger(req.query.page, 1)
  const pageSize = positiveInteger(req.query.pageSize, 10)
  const keyword = req.query.keyword ?? ''
  const offset = (page - 1) * pageSize

  if (!Number.isSafeInteger(page) || page < 1 || !Number.isSafeInteger(pageSize)
    || pageSize < 1 || pageSize > 100 || !Number.isSafeInteger(offset) || typeof keyword !== 'string') {
    return res.status(400).json({ message: '페이지 또는 검색 조건을 확인해 주세요.' })
  }

  return res.json(products.list(keyword.trim(), pageSize, offset))
})

app.post('/api/products', (req, res) => {
  const { name, description, price, tags = [] } = req.body ?? {}
  const title = typeof name === 'string' ? name.trim() : ''
  const content = typeof description === 'string' ? description.trim() : ''

  if (!title || title.length > 100 || !content || content.length > 1000
    || !Number.isSafeInteger(price) || price <= 0
    || !Array.isArray(tags) || tags.some((tag) => typeof tag !== 'string' || tag.length > 30 || !tag.trim())) {
    return res.status(400).json({ message: '상품명, 소개, 가격, 태그를 확인해 주세요.' })
  }

  const product = products.add({
    name: title,
    description: content,
    price,
    tags: [...new Set(tags.map((tag) => tag.trim()))],
  })
  return res.status(201).location(`/items/${product.id}`).json(product)
})

if (existsSync(index)) {
  app.use(express.static(dist))
  app.get(['/items', '/items/:id', '/registration', '/boards'], (req, res) => res.sendFile(index))
}

app.use((error, req, res, next) => {
  if (res.headersSent) return next(error)

  if (error.status === 400) return res.status(400).json({ message: '요청 형식을 확인해 주세요.' })
  if (error.status === 413) return res.status(413).json({ message: '요청 크기가 너무 큽니다.' })
  console.error(error)
  return res.status(500).json({ message: '서버에서 요청을 처리하지 못했습니다.' })
})

app.listen(port, '127.0.0.1', (error) => {
  if (error) {
    console.error(error.message)
    process.exitCode = 1
    return
  }

  console.log(`판다마켓 서버가 http://127.0.0.1:${port} 에서 실행 중입니다.`)
})
