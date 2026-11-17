# 판다마켓 · 스프린트 미션 5

React 기반 판다마켓 프론트엔드와 Express/MongoDB 상품 API입니다.

## 기능

- 랜딩 페이지: `/`
- 중고마켓 페이지: `/items` — 서버 상품 목록, 이름·소개 검색, offset 페이지네이션, 기본 상품 이미지
- 상품 등록 페이지: `/registration` — 필드 유효성 검사, Enter 키 태그 칩, 등록 성공 후 상세 경로 이동
- 상품 상세 경로: `/items/:id` — 미션 요구사항에 따라 빈 화면
- API: 상품 생성·상세 조회·수정·삭제·목록 조회, 최근 등록순, 이름·소개 검색

## 로컬 실행

Node.js와 MongoDB가 필요합니다.

1. 의존성을 설치합니다.

   ```bash
   npm install
   ```

2. `.env.example`을 `.env`로 복사한 뒤 `MONGODB_URI`를 로컬 MongoDB 주소 또는 MongoDB Atlas 연결 주소로 설정합니다.

3. 프론트엔드와 API 서버를 함께 실행합니다.

   ```bash
   npm run dev
   ```

   Vite는 `http://localhost:5173`, Express API는 `http://localhost:3001`에서 실행됩니다.

## 환경 변수

| 이름 | 설명 | 기본값 |
| --- | --- | --- |
| `MONGODB_URI` | MongoDB 연결 문자열 | 없음 (필수) |
| `PORT` | Express 포트 | `3001` |
| `CLIENT_ORIGIN` | 허용할 프론트엔드 origin. 여러 주소는 쉼표로 구분 | `http://localhost:5173` |

## Product API

| 메서드 | 경로 | 설명 |
| --- | --- | --- |
| `GET` | `/api/products?offset=0&limit=10&orderBy=recent&keyword=` | 상품 목록 및 검색 |
| `POST` | `/api/products` | 상품 등록 |
| `GET` | `/api/products/:id` | 상품 상세 조회 |
| `PATCH` | `/api/products/:id` | 상품 수정 |
| `DELETE` | `/api/products/:id` | 상품 삭제 |
| `GET` | `/api/health` | 서버 상태 확인 |

상품 등록 본문 예시:

```json
{
  "name": "판다 인형",
  "description": "깨끗하게 사용한 판다 인형입니다.",
  "price": 12000,
  "tags": ["인형", "판다"]
}
```

목록 API는 `{ "list": [], "totalCount": 0, "offset": 0, "limit": 10 }` 형태로 응답합니다.

## 배포

Render Web Service의 Build Command는 `npm install && npm run build`, Start Command는 `npm start`로 설정합니다. Render 환경 변수에 MongoDB Atlas의 `MONGODB_URI`, 공개 프론트엔드 origin인 `CLIENT_ORIGIN`, 필요하면 `NODE_ENV=production`을 등록합니다.
