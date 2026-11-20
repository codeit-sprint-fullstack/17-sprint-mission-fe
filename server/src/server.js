import { once } from 'node:events'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import { handleError } from './http-error.js'
import { productsRouter } from './products-router.js'

const uri = process.env.DB_CONNECT || process.env.MONGODB_URI
const databaseUser = process.env.DB_USER?.trim()
const databasePassword = process.env.DB_PASSWORD
const port = Number(process.env.PORT ?? 3002)
const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.0.0.1'
const allowedOrigins = (process.env.CLIENT_ORIGIN ?? process.env.CORS_ORIGINS ?? '')
  .split(',')
  .map((origin) => origin.trim().replace(/\/+$/, ''))
  .filter(Boolean)

const app = express()
app.use(cors({ origin: allowedOrigins, methods: ['GET', 'POST', 'PATCH', 'DELETE'] }))
app.use(express.json({ limit: '32kb' }))

app.get('/health', (_request, response) => {
  const connected = mongoose.connection.readyState === 1
  response.status(connected ? 200 : 503).json({ status: connected ? 'ok' : 'unavailable' })
})

app.use(['/products', '/api/products'], productsRouter)

const clientDist = fileURLToPath(new URL('../../client/dist/', import.meta.url))
const clientIndex = fileURLToPath(new URL('../../client/dist/index.html', import.meta.url))
if (existsSync(clientIndex)) {
  app.use(express.static(clientDist))
  app.get(['/items', '/items/:id', '/registration', '/boards'], (_request, response) => {
    response.sendFile(clientIndex)
  })
}

app.use((_request, response) => {
  response.status(404).json({ message: '요청한 API 경로를 찾을 수 없습니다.' })
})
app.use(handleError)

if (!uri || !Number.isInteger(port) || port < 1 || port > 65535) {
  console.error('환경 변수 DB_CONNECT와 PORT를 확인해 주세요.')
  process.exitCode = 1
} else if (Boolean(databaseUser) !== Boolean(databasePassword)) {
  console.error('별도 인증을 사용하려면 DB_USER와 DB_PASSWORD를 함께 설정해 주세요.')
  process.exitCode = 1
} else {
  try {
    mongoose.set('bufferCommands', false)
    const connectionOptions = { serverSelectionTimeoutMS: 5000 }
    if (databaseUser) {
      connectionOptions.auth = { username: databaseUser, password: databasePassword }
    }
    await mongoose.connect(uri, connectionOptions)
    const server = app.listen(port, host)
    await once(server, 'listening')
    console.log('판다마켓 백엔드 실행 중 http://' + host + ':' + port)

    const stop = () => {
      server.close(() => {
        mongoose.disconnect().catch(() => { process.exitCode = 1 })
      })
    }
    process.once('SIGINT', stop)
    process.once('SIGTERM', stop)
  } catch (error) {
    if (error.code === 18 || error.code === 8000) {
      console.error('MongoDB 인증에 실패했습니다. Atlas 데이터베이스 사용자와 비밀번호를 확인해 주세요.')
    } else {
      console.error('서버 시작 실패. MongoDB 연결과 포트를 확인해 주세요.', error.code ?? error.name)
    }
    await mongoose.disconnect()
    process.exitCode = 1
  }
}
