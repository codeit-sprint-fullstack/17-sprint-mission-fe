# 판다마켓 (Panda Market)

## 1. 프로젝트 소개

판다마켓은 중고 상품을 조회하고 검색할 수 있는 웹사이트입니다.

이번 스프린트 미션 4에서는 기존 HTML, CSS, JavaScript로 구현했던 판다마켓을 React 기반으로 전환하고, API를 활용하여 상품 목록을 동적으로 불러오는 기능을 구현했습니다.

React의 컴포넌트 구조와 상태 관리, React Router를 이용한 페이지 이동, Axios를 활용한 API 통신 등을 적용했습니다.

## 2. 사용 기술

- HTML5
- CSS3
- JavaScript (ES6+)
- React
- React Router
- Axios
- Vite

## 3. 주요 구현 기능

### 3-1. 상품 목록 조회

- API를 통해 상품 데이터를 불러오도록 구현했습니다.
- 베스트 상품과 판매 중인 상품을 구분하여 표시했습니다.
- 베스트 상품은 좋아요순으로 정렬하여 보여줍니다.
- 판매 중인 상품은 최신순을 기본 정렬 기준으로 설정했습니다.

### 3-2. 상품 검색 및 정렬

- 검색창에 키워드를 입력하여 상품을 검색할 수 있습니다.
- 정렬 옵션을 통해 최신순과 좋아요순을 선택할 수 있습니다.
- 검색어와 정렬 기준이 변경되면 상품 목록을 다시 불러옵니다.

### 3-3. 페이지네이션

- 상품 목록에 페이지네이션을 적용했습니다.
- 이전 페이지와 다음 페이지로 이동할 수 있습니다.
- 현재 페이지에 해당하는 상품 목록을 표시합니다.

### 3-4. 반응형 웹

- PC, 태블릿, 모바일 화면에 대응하도록 구현했습니다.
- 화면 크기에 따라 상품 목록의 열 개수가 달라집니다.
- 화면 크기에 따라 한 페이지에 표시되는 상품 개수도 변경됩니다.

### 3-5. React Router

- React Router를 사용하여 페이지 이동 기능을 구성했습니다.
- Layout 컴포넌트를 통해 공통 네비게이션 바와 푸터를 관리했습니다.
- Outlet을 사용하여 페이지별 콘텐츠가 표시되도록 구현했습니다.

### 3-6. API 통신 및 상태 관리

- Axios를 사용하여 상품 데이터를 요청했습니다.
- useEffect를 활용하여 컴포넌트가 렌더링되거나 조회 조건이 변경될 때 데이터를 불러오도록 구현했습니다.
- useState를 사용하여 로딩 상태, 오류 상태, 상품 데이터를 관리했습니다.
- 상품 조회 기능을 커스텀 Hook으로 분리하여 재사용할 수 있도록 구성했습니다.

## 4. 프로젝트 폴더 구조

src/
├── components/
│ ├── NavBar.jsx
│ ├── Footer.jsx
│ ├── BestProducts.jsx
│ ├── SellingProducts.jsx
│ ├── ProductCard.jsx
│ └── Pagination.jsx
│
├── hooks/
│ ├── useProducts.js
│ └── useMediaPageSize.js
│
├── layouts/
│ └── Layout.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── ProductDetail.jsx
│ └── Placeholder.jsx
│
├── services/
│ └── productService.js
│
├── styles/
│ └── global.css
│
├── App.jsx
└── main.jsx

````

## 5. 프로젝트 실행 방법

### 5-1. 패키지 설치

```bash
npm install
````

### 5-2. 개발 서버 실행

```bash
npm run dev
```

개발 서버가 실행되면 터미널에 표시되는 로컬 주소로 접속하여 웹사이트를 확인할 수 있습니다.

### 5-3. 환경변수 설정

필요한 경우 프로젝트 최상위 폴더에 `.env` 파일을 생성하고 API 주소를 설정합니다.

```env
VITE_API_URL=https://panda-market-api.vercel.app
```

## 6. API

상품 목록을 조회하기 위해 다음 API를 사용했습니다.

- Base URL: https://panda-market-api.vercel.app
- 상품 목록 조회: `GET /products`
- 상품 상세 조회: `GET /products/:id`

상품 목록 조회 시 페이지 번호, 페이지 크기, 검색어, 정렬 기준 등을 요청 파라미터로 전달합니다.
