# 판다마켓 · 스프린트 미션 5

React 프론트엔드와 Express/MongoDB 백엔드를 별도 폴더와 배포 서비스로 나눈 프로젝트입니다.

## 폴더 구성

```text
.
├── frontend/   # React, Vite, 화면과 API 요청
├── backend/    # Express, Mongoose, 상품 API
├── package.json # 두 개발 서버 실행 스크립트
└── render.yaml  # Render 프론트엔드/백엔드 배포 설정
```

## 로컬 실행

1. 프로젝트 루트에서 프론트엔드와 백엔드 패키지를 설치합니다.

   ```bash
   npm run setup
   ```

2. `backend/.env`가 아직 없다면 `backend/.env.example`을 복사하고, `MONGODB_URI`에 Atlas 연결 문자열을 입력하세요. 이미 `.env`가 있으면 덮어쓰지 말고 그 파일을 수정하세요. 비밀번호는 채팅이나 GitHub에 올리지 마세요.

   ```powershell
   if (!(Test-Path backend/.env)) { Copy-Item backend/.env.example backend/.env }
   ```

3. 프로젝트 루트에서 양쪽 서버를 실행합니다.

   ```bash
   npm run dev
   ```

   서버가 MongoDB에 연결되면 Express가 `http://localhost:3001`, React가 `http://localhost:5173`에서 실행됩니다. 개발 중 `/api` 요청은 Vite가 Express로 전달합니다.

## 프론트엔드

- `/`: 랜딩 페이지
- `/items`: 판매 중인 상품 목록, 검색, 최신순·좋아요순 정렬, offset 페이지네이션
- `/registration`: 상품 등록, 입력 검증, 태그 칩
- `/items/:id`: 상품 상세 빈 페이지
- 상품 이미지가 없으면 프론트엔드의 기본 이미지를 보여줍니다.

## 백엔드 API

| 메서드 | 경로 | 기능 |
| --- | --- | --- |
| `GET` | `/api/products?offset=0&limit=10&orderBy=recent&keyword=` | 목록, `recent` 또는 `favorite` 정렬, 이름·소개 검색, offset 페이지네이션 |
| `POST` | `/api/products` | 상품 생성 |
| `GET` | `/api/products/:id` | 상품 상세 조회 |
| `PATCH` | `/api/products/:id` | 상품 수정 |
| `DELETE` | `/api/products/:id` | 상품 삭제 |
| `GET` | `/api/health` | API 상태 확인 |

## Render 배포

`render.yaml`은 Static Site 프론트엔드와 Web Service 백엔드를 각각 정의합니다. Render에서 Blueprint로 적용한 뒤 환경 변수에 다음 값을 입력하세요.

- 백엔드 `MONGODB_URI`: Atlas의 Node.js 연결 문자열
- 백엔드 `CLIENT_ORIGIN`: Render 프론트엔드 URL
- 프론트엔드 `VITE_API_BASE_URL`: Render 백엔드 URL

Atlas의 Network Access에는 로컬 개발 PC와 배포 서버가 접속할 수 있도록 허용 주소를 설정해야 합니다.
