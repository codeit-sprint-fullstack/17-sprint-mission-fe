# 판다마켓 상품 API

MongoDB의 상품 문서는 Mongoose 모델로 관리하고, POST와 PATCH 요청은 Superstruct로 검증합니다. MongoDB의 `_id`는 JSON 응답에서 `id`로 반환합니다.

## 로컬 실행

Node.js 24와 MongoDB가 필요합니다.

```powershell
Copy-Item backend/.env.example backend/.env
Copy-Item frontend/.env.example frontend/.env.local
npm.cmd --prefix backend ci
npm.cmd --prefix backend run dev
```

`backend/.env`에 사용할 MongoDB의 `MONGODB_URI`와 Vite 앱의 주소를 `CORS_ORIGINS`에 지정합니다. 다른 터미널에서 `npm.cmd --prefix frontend ci`와 `npm.cmd --prefix frontend run dev`를 실행하세요. 프론트는 `frontend/.env.local`의 `VITE_PRODUCT_API_URL`로 서버를 선택합니다.

| 메서드 | 경로 | 성공 응답 |
| --- | --- | --- |
| GET | `/health` | 200 |
| GET | `/products` | 200, `{ list, totalCount }` |
| POST | `/products` | 201, 생성한 상품 |
| GET | `/products/:id` | 200, 상품 상세 |
| PATCH | `/products/:id` | 200, 수정한 상품 |
| DELETE | `/products/:id` | 204 |

목록은 `page`와 `pageSize`로 페이지를 지정하거나 `offset`과 `pageSize`로 시작 위치를 지정합니다. `orderBy=recent`를 지원하고 `keyword`는 상품명과 소개에서 찾습니다. 등록 본문은 `name`, `description`, `price`, `tags`를 받고, 수정은 변경할 필드만 받습니다.

## Render 배포 설정

Render에서 저장소를 연결할 때 Blueprint 경로로 `react-missions/render.yaml`을 지정하면 무료 Node Web Service 설정을 불러옵니다. 직접 Web Service를 만들 때는 다음 값을 지정합니다.

- Root Directory — `react-missions/backend`
- Build Command — `npm ci`
- Start Command — `npm start`
- Health Check Path — `/health`
- Environment Variables — Atlas 연결 문자열을 `MONGODB_URI`로, 프론트 배포 주소를 `CORS_ORIGINS`로 설정

Atlas에서 Render 서버가 연결할 수 있도록 네트워크 접근 설정을 확인하세요. 프론트 배포 환경의 `VITE_PRODUCT_API_URL`에 생성된 Web Service 주소를 설정하고 다시 빌드합니다.
