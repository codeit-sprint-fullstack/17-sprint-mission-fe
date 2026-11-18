import { mkdirSync } from 'node:fs'
import { dirname } from 'node:path'
import { DatabaseSync } from 'node:sqlite'

const examples = [
  ['로봇 청소기', 1500000, 240],
  ['기계식 키보드', 48000, 17],
  ['캠핑 의자', 25000, 8],
  ['미니 전기포트', 18000, 12],
  ['무선 헤드폰', 79000, 31],
  ['원목 사이드 테이블', 32000, 9],
  ['필름 카메라', 62000, 24],
  ['태블릿 거치대', 12000, 3],
  ['블루투스 스피커', 35000, 16],
  ['책상 스탠드', 19000, 7],
  ['접이식 자전거', 145000, 23],
  ['스테인리스 텀블러', 14000, 6],
]

export function openProducts(databasePath) {
  if (databasePath !== ':memory:') mkdirSync(dirname(databasePath), { recursive: true })
  const database = new DatabaseSync(databasePath)
  database.exec('PRAGMA busy_timeout = 5000')
  database.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      price INTEGER NOT NULL CHECK (price > 0),
      tags TEXT NOT NULL,
      favoriteCount INTEGER NOT NULL DEFAULT 0,
      createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `)

  const insert = database.prepare(`
    INSERT INTO products (name, description, price, tags, favoriteCount)
    VALUES (?, ?, ?, ?, ?)
    RETURNING *
  `)
  const count = database.prepare(`
    SELECT COUNT(*) AS totalCount FROM products WHERE instr(lower(name), lower(?)) > 0
  `)
  const list = database.prepare(`
    SELECT id, name, price, favoriteCount
    FROM products
    WHERE instr(lower(name), lower(?)) > 0
    ORDER BY id DESC
    LIMIT ? OFFSET ?
  `)

  database.exec('BEGIN IMMEDIATE')
  try {
    if (count.get('').totalCount === 0) {
      for (const [name, price, favoriteCount] of [...examples].reverse()) {
        insert.get(name, name + ' 중고 상품입니다.', price, '[]', favoriteCount)
      }
    }
    database.exec('COMMIT')
  } catch (error) {
    database.exec('ROLLBACK')
    throw error
  }

  return {
    list(keyword, pageSize, offset) {
      return { list: list.all(keyword, pageSize, offset), totalCount: count.get(keyword).totalCount }
    },
    add({ name, description, price, tags }) {
      const product = insert.get(name, description, price, JSON.stringify(tags), 0)
      return { ...product, tags }
    },
  }
}
