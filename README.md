# 판다마켓

중고 거래 서비스 **판다마켓**의 프론트엔드입니다. 랜딩 페이지, 중고마켓, 상품 등록 페이지를 React로 구현했고 PC·태블릿·모바일 화면을 모두 지원합니다.
코드잇 스프린트 미션 5의 결과물입니다.

- 백엔드 저장소: https://github.com/subin1015/17-sprint-mission-be
- 백엔드 배포 주소: https://panda-market-api-subin.onrender.com

> 백엔드는 무료 인스턴스라서 한동안 쓰지 않으면 잠들고, 첫 요청은 50초쯤 걸릴 수 있습니다.

## 사용 기술

| 구분 | 내용 |
| --- | --- |
| 라이브러리 | React 19, React Router 7 |
| 빌드 도구 | Vite |
| HTTP 클라이언트 | Axios |
| 스타일 | CSS (컴포넌트·페이지별 CSS 파일, CSS 변수) |
| 폰트 | [Pretendard](https://github.com/orioncactus/pretendard) |
| 린트 | ESLint |

## 실행 방법

Node.js가 필요합니다.

```bash
npm install
cp .env.example .env   # API 주소 설정 (VITE_BASE_URL)
npm run dev            # 개발 서버 (http://localhost:5173)
npm run build          # 빌드
npm run lint           # 린트
```

`.env.example`의 `VITE_BASE_URL`은 배포된 백엔드 주소로 되어 있어 그대로 복사해서 쓰면 바로 동작합니다.
로컬 백엔드를 쓰려면 `.env`의 값을 `http://localhost:3000`으로 바꾸고 백엔드의 `CORS_ORIGINS`에 `http://localhost:5173`이 있어야 합니다.

## 페이지 구성

| 경로 | 설명 |
| --- | --- |
| `/` | 랜딩 페이지 |
| `/items` | 중고마켓 (판매 중인 상품 목록) |
| `/items/:id` | 상품 상세 (빈 페이지) |
| `/registration` | 상품 등록 |

`/items`, `/items/:id`, `/registration`은 헤더와 푸터를 공유하고(레이아웃 라우트), 랜딩 페이지(`/`)는 전용 헤더를 씁니다.

## 주요 기능

### 공통

- 상단 내비게이션 바는 스크롤해도 최상단에 고정됩니다.
- 헤더의 "중고마켓"은 `/items`에서만 파란색(`#3692FF`)입니다.
- 반응형 기준: 모바일 743px 이하 / 태블릿 744~1199px / PC 1200px 이상

### 랜딩 페이지 (`/`)

- 미션 1의 HTML·CSS 랜딩 페이지를 React로 옮겼고, 시안에 맞춰 태블릿·모바일 반응형을 새로 작성했습니다.
- 기능 소개 섹션 3개는 데이터 배열과 컴포넌트 하나(`FeatureSection`)로 만들었습니다.
- 이미지는 1x/2x/3x 파일을 `srcSet`으로 연결했습니다.

### 중고마켓 (`/items`)

- 내 백엔드의 `GET /products`를 호출해 판매 중인 상품을 보여줍니다.
- 열 수: PC 5열 / 태블릿 3열 / 모바일 2열
- 화면 크기에 따라 서버에 보내는 `pageSize`를 바꿉니다. (PC 10 / 태블릿 6 / 모바일 4)
- 검색: 검색어를 입력하고 Enter를 누르면 `keyword`로 요청합니다.
- 정렬: 최신순만 지원합니다. 모바일에서는 아이콘만 보입니다.
- 페이지네이션: 총 페이지를 `ceil(totalCount / pageSize)`로 계산해 5개씩 묶어 보여주고, 검색을 바꾸면 1페이지로 돌아갑니다.
- 서버에 사진과 좋아요 데이터가 없어서 모든 상품에 기본 이미지를 쓰고, 좋아요와 베스트 상품은 구현하지 않았습니다.
- 불러오는 중, 오류, 검색 결과 없음 상태를 각각 안내합니다.
- "상품 등록하기"를 누르면 `/registration`으로 이동합니다.

### 상품 등록 (`/registration`)

- 상품명, 상품 소개, 판매가격, 태그를 입력하고 "등록"을 누르면 `POST /products`로 등록한 뒤 해당 상품의 상세 페이지(`/items/:id`)로 이동합니다.
- 등록에 실패하면 서버가 준 오류 메시지를 보여줍니다.
- 태그는 입력 후 Enter를 누르면 칩으로 쌓이고, 칩의 X 버튼으로 지울 수 있습니다. 같은 태그는 한 번만 들어갑니다.
- 칩으로 만들지 않아도 태그 입력창에 글자가 있으면 등록할 때 함께 보냅니다.
- 모든 값이 규칙을 통과하고 태그가 하나 이상일 때만 "등록" 버튼이 활성화됩니다.

| 필드 | 규칙 | 에러 메시지 |
| --- | --- | --- |
| 상품명 | 1자 이상 10자 이내 | 상품명을 입력해주세요 / 10자 이내로 입력해주세요 |
| 상품 소개 | 10자 이상 100자 이내 | 10자 이상 입력해주세요 / 100자 이내로 입력해주세요 |
| 판매가격 | 숫자 | 판매 가격을 입력해주세요 / 숫자로 입력해주세요 |
| 태그 | 5글자 이내 | 5글자 이내로 입력해주세요 |

규칙을 통과하지 못한 입력창은 빨간 테두리와 아래의 빨간 안내 문구로 표시됩니다. 입력창을 벗어난 뒤부터 보여주고, 이후에는 입력할 때마다 갱신합니다.

## 커스텀 hook

| hook | 설명 |
| --- | --- |
| `useProducts` | `page`, `pageSize`, `keyword`로 상품을 요청하고 `products`, `totalCount`, `isLoading`, `error`를 반환합니다. 조건이 바뀌면 이전 요청을 취소합니다. |
| `useDeviceType` | 화면 너비로 `pc` / `tablet` / `mobile`을 반환합니다. `pageSize`를 정하는 데 사용합니다. |
| `useProductForm` | 등록 폼의 값, 태그 목록, 에러, 버튼 활성 여부(`isValid`), 서버로 보낼 값(`product`)과 입력·태그 추가·삭제 핸들러를 반환합니다. |

## 폴더 구조

```text
.
├── index.html
├── package.json
├── .env.example               # 필요한 환경 변수 예시
├── vite.config.js
└── src/
    ├── main.jsx               # BrowserRouter
    ├── App.jsx                # 라우트 정의
    ├── index.css              # 색상 변수, 리셋, 공통 스타일
    ├── api/
    │   ├── axiosInstance.js   # baseURL을 지정한 axios 인스턴스
    │   └── products.js        # getProducts, createProduct
    ├── hooks/
    │   ├── useProducts.js
    │   ├── useDeviceType.js
    │   └── useProductForm.js
    ├── constants/
    │   └── landing.js         # 랜딩 이미지와 기능 소개 데이터
    ├── pages/
    │   ├── LandingPage.jsx
    │   ├── MarketPage.jsx
    │   ├── RegistrationPage.jsx
    │   └── ProductDetailPage.jsx
    ├── components/
    │   ├── Layout.jsx         # 헤더 + 본문(Outlet) + 푸터
    │   ├── Header.jsx, LandingHeader.jsx, Footer.jsx
    │   ├── AllProducts.jsx    # 제목, 검색, 정렬, 목록, 페이지네이션
    │   ├── ProductCard.jsx, SortDropdown.jsx, Pagination.jsx
    │   └── FeatureSection.jsx # 랜딩의 기능 소개 섹션
    └── assets/                # 로고, 아이콘, 기본 상품 이미지, 랜딩 이미지
```

각 컴포넌트와 페이지는 같은 이름의 `.css` 파일을 가집니다.

## 구현하면서 신경 쓴 점

- 중단점(743 / 744 / 1199 / 1200px)을 CSS `@media`와 `useDeviceType`에 같은 숫자로 사용해, 레이아웃과 `pageSize`가 같은 기준으로 바뀌게 했습니다.
- `useProducts`는 조건이 바뀌면 `AbortController`로 이전 요청을 취소해, 검색을 빠르게 바꿔도 오래된 응답이 화면을 덮어쓰지 않게 했습니다.
- 검색어가 없으면 `keyword`를 쿼리에 붙이지 않아 `keyword=undefined`가 서버로 가지 않게 했습니다.
- 헤더의 `NavLink`에 `end`를 주어 `/items`에서만 활성 색이 적용되고 `/items/123`에서는 적용되지 않게 했습니다.
- 랜딩 CSS의 클래스 이름이 중고마켓 헤더와 겹쳐 서로 덮어쓰는 문제를 막으려고 랜딩 전용 클래스에 `landing-` 접두사를 붙였습니다.
- 화면마다 줄바꿈이 다른 제목은 띄어쓰기와 `<br>`을 함께 넣고, `<br>`을 CSS로 숨기거나 보여서 처리했습니다.
- 등록 폼의 에러는 `useEffect`로 state에 넣지 않고 렌더링마다 값에서 계산해서, 값과 에러가 어긋나지 않게 했습니다.
- 태그 입력창에서 Enter를 누를 때 폼이 제출되지 않게 막고, 한글 입력 중(`isComposing`)의 Enter는 무시해 칩이 두 번 생기지 않게 했습니다.
- 에러 상태의 빨간 테두리는 `box-shadow: inset`으로 그려서 테두리 때문에 입력 글자 위치가 밀리지 않게 했습니다.
