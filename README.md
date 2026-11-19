# 판다마켓 · 스프린트 미션 5

React 프론트엔드와 Express/MongoDB 백엔드를 별도 폴더와 배포 서비스로 나눈 프로젝트입니다.

## 폴더 구성

```text
.
├── client/       # React, Vite, 화면과 API 요청
├── server/       # Express, Mongoose, 상품 API
├── package.json  # 패키지 설치, 화면 빌드, 서버 실행 명령
├── compose.yaml  # 로컬 MongoDB 실행 설정
└── render.yaml   # Render 프론트엔드·백엔드 배포 설정
```

## 로컬 실행

Node.js 22.13 이상과 MongoDB가 필요합니다. 프로젝트 루트에서 PowerShell을 열고 실행합니다.

1. 프론트엔드와 백엔드 패키지를 설치합니다.

   ```powershell
   npm run setup
   ```

2. `server/.env`가 없으면 예제 파일을 복사합니다. Docker Desktop을 켜고 MongoDB를 실행합니다.

   ```powershell
   if (-not (Test-Path -LiteralPath server/.env)) {
     Copy-Item -LiteralPath server/.env.example -Destination server/.env
   }
   docker compose up -d --wait
   ```

   MongoDB를 따로 실행 중이면 `server/.env`의 `DB_CONNECT`에 사용 중인 연결 주소를 입력하고 Compose 명령은 건너뜁니다.

3. React 화면을 빌드하고 Express 서버를 실행합니다.

   ```powershell
   npm run build
   npm start
   ```

   [판다마켓](http://127.0.0.1:3002)에서 화면을 열고, [서버 상태](http://127.0.0.1:3002/health)에서 MongoDB 연결을 확인합니다.

화면을 수정하면서 확인하려면 Express 서버를 켜 둔 상태에서 새 터미널에 `npm --prefix client run dev`를 입력합니다. 기본 개발 주소는 `http://localhost:5173`이며, Vite가 `/products` 요청을 Express로 전달합니다.

## 프론트엔드

- `/`는 랜딩 페이지입니다.
- `/items`에서 판매 중인 상품을 최신순으로 조회하고, 검색과 페이지 이동을 할 수 있습니다. 목록에는 기본 상품 이미지를 표시합니다.
- `/registration`에서 상품명, 소개, 가격, 태그를 입력합니다. 태그를 입력하고 Enter를 누르면 태그가 추가됩니다.
- 상품 등록에 성공하면 `/items/:id`로 이동합니다. 과제 요구사항에 따라 상세 화면은 빈 페이지입니다.

## 백엔드 API

| 메서드 | 경로 | 기능 |
| --- | --- | --- |
| `GET` | `/products?offset=0&limit=10&orderBy=recent&keyword=` | 최신순 목록, 상품명·소개 검색, 페이지네이션 |
| `POST` | `/products` | 상품 등록 |
| `GET` | `/products/:id` | 상품 상세 조회 |
| `PATCH` | `/products/:id` | 상품 수정 |
| `DELETE` | `/products/:id` | 상품 삭제 |
| `GET` | `/health` | MongoDB 연결 상태 확인 |

목록 응답은 `{ list, totalCount }`입니다. 상품 API는 기존 `/api/products` 경로로도 호출할 수 있습니다.

## Render 배포

GitHub의 `sprint-mission-5` 브랜치에서 `render.yaml`을 Blueprint로 선택합니다. 이 파일은 Static Site 프론트엔드와 Web Service 백엔드를 정의하고, 화면에서 새로고침할 때 사용하는 Rewrite 규칙을 설정합니다.

| 서비스 | 환경 변수 | 입력할 값 |
| --- | --- | --- |
| 백엔드 | `DB_CONNECT` | MongoDB Atlas의 Node.js 연결 문자열 |
| 백엔드 | `CLIENT_ORIGIN` | Render 프론트엔드 URL |
| 프론트엔드 | `VITE_API_URL` | Render 백엔드 URL |

Atlas의 IP 액세스 목록에 Render 백엔드의 아웃바운드 IP 범위를 추가합니다. Atlas 비밀번호가 담긴 연결 문자열은 Render의 백엔드 환경 변수나 로컬 `server/.env`에만 입력합니다. [Render 아웃바운드 IP](https://render.com/docs/outbound-ip-addresses) · [Atlas IP 액세스 목록](https://www.mongodb.com/docs/atlas/security/ip-access-list/)

백엔드 주소의 `/health`에서 `{"status":"ok"}`를 확인합니다. 프론트엔드의 `VITE_API_URL`을 바꾸면 다시 빌드합니다. 배포된 화면에서 상품 조회와 등록이 동작하는지 확인합니다.
