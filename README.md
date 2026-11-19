# 스프린트 미션 5 · 판다마켓

React 화면은 `client/`에, MongoDB에 상품을 저장하는 Express API는 `server/`에 있습니다. 로컬에서는 Express로 화면과 API를 함께 열 수 있고, Render에서는 두 서비스를 따로 배포합니다.

## 내 PC에서 실행

Node.js 22.13 이상과 MongoDB가 필요합니다. 프로젝트 최상위 폴더에서 PowerShell을 열고 실행합니다.

```powershell
npm run setup
if (-not (Test-Path -LiteralPath server/.env)) {
  Copy-Item -LiteralPath server/.env.example -Destination server/.env
}
docker compose up -d --wait
npm run build
npm start
```

Docker Desktop을 켠 상태에서 Compose를 실행하면 MongoDB가 로컬 포트 `27018`에서 시작됩니다. MongoDB를 따로 실행 중이면 Compose 명령을 건너뛰고 `server/.env`의 `DB_CONNECT`를 사용 중인 주소로 바꿉니다.

[판다마켓](http://127.0.0.1:3002)과 [서버 상태](http://127.0.0.1:3002/health)를 열 수 있습니다. 화면을 수정하면서 확인하려면 서버를 켜 둔 상태에서 새 터미널에 `npm --prefix client run dev`를 실행합니다. Vite가 `/products` 요청을 로컬 API로 전달합니다.

## 코드 살펴보기

- 화면은 `/`(홈), `/items`(목록), `/registration`(등록)에 있습니다. 상품 등록 후 `/items/상품ID`로 이동합니다. 과제 요구사항에 따라 상세 화면은 빈 페이지입니다.
- `client/src/Registration.jsx`에서 상품명, 소개, 가격, 태그를 확인합니다. 태그를 입력하고 Enter를 누르면 추가됩니다.
- `server/src/products-router.js`에서 `/products`의 목록 조회·등록, `/products/:id`의 상세 조회·수정·삭제를 처리합니다. 데이터 형식은 `server/src/product.js`에 있습니다. 기존 BE에서 호출하던 `/api/products` 경로도 사용할 수 있습니다.
- `GET /products?offset=0&limit=10&orderBy=recent&keyword=책`처럼 조회하면 상품명 또는 소개에 검색어가 포함된 상품을 최신순으로 가져옵니다. 응답은 `{ list, totalCount }`입니다.
- MongoDB에 상품이 없으면 목록이 비어 있습니다. 상품 등록 화면에서 첫 상품을 추가할 수 있습니다.

## Render에 올릴 때

1. MongoDB Atlas에서 데이터베이스와 앱 전용 사용자를 준비합니다. Atlas의 IP 액세스 목록에 Render 백엔드의 아웃바운드 IP 범위를 등록합니다. [Render 아웃바운드 IP](https://render.com/docs/outbound-ip-addresses) · [Atlas IP 액세스 목록](https://www.mongodb.com/docs/atlas/security/ip-access-list/)
2. GitHub의 `sprint-mission-5` 브랜치에 프로젝트를 올립니다. Render에서 그 브랜치와 저장소 루트의 `render.yaml`을 선택해 Blueprint를 만들거나, 아래 값으로 서비스를 각각 만듭니다.
3. Web Service에 `DB_CONNECT`로 Atlas 연결 문자열을 지정합니다. 백엔드 주소에 `/health`를 붙여 `{"status":"ok"}`가 나오는지 확인합니다.
4. Static Site의 `VITE_API_URL`에 위 백엔드 주소를 넣고 빌드합니다. Web Service의 `CLIENT_ORIGIN`에는 배포된 Static Site 주소를 넣습니다. 두 주소는 `https://`로 시작하고, 도메인 뒤에 경로를 붙이지 않습니다.
5. Static Site에서 상품 목록을 조회하고 상품을 등록합니다. `/items`, `/registration`, 등록 직후 이동한 상품 상세 주소에서 새로고침을 확인합니다.

| 설정 | Web Service | Static Site |
| --- | --- | --- |
| 브랜치 | `sprint-mission-5` | `sprint-mission-5` |
| Root Directory | `server` | `client` |
| Build Command | `npm ci` | `npm ci --include=dev && npm run build` |
| Start Command | `npm start` | 해당 없음 |
| Health Check Path | `/health` | 해당 없음 |
| Publish Directory | 해당 없음 | `dist` |
| URL Rewrite | 해당 없음 | `/*` → `/index.html` |

서비스를 직접 만들 때는 Web Service에 `NODE_ENV=production`을 추가합니다. 두 서비스의 Node 버전은 `render.yaml`의 `NODE_VERSION` 값으로 지정할 수 있습니다. Atlas 연결 문자열은 Render의 백엔드 환경 변수나 로컬 `server/.env`에만 입력합니다. `VITE_API_URL`을 수정한 뒤에는 Static Site를 다시 빌드합니다.

[Render 모노레포 설정](https://render.com/docs/monorepo-support) · [정적 사이트 Rewrite 설정](https://render.com/docs/redirects-rewrites)
