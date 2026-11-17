# 판다마켓 중고마켓

중고 거래 서비스 **판다마켓**의 중고마켓 페이지를 React로 구현한 프로젝트입니다.
코드잇 스프린트 미션 4의 결과물이며, PC·태블릿·모바일 화면을 모두 지원합니다.

## 사용 기술

| 구분            | 내용                                                    |
| --------------- | ------------------------------------------------------- |
| 라이브러리      | React 19                                                |
| 빌드 도구       | Vite                                                    |
| HTTP 클라이언트 | Axios                                                   |
| 스타일          | CSS (컴포넌트별 CSS 파일, CSS 변수)                     |
| 폰트            | [Pretendard](https://github.com/orioncactus/pretendard) |
| 린트            | ESLint                                                  |

## 페이지 구성

| 경로 | 설명                                          |
| ---- | --------------------------------------------- |
| `/`  | 중고마켓 페이지 (베스트 상품, 판매 중인 상품) |

라우팅은 아직 배우지 않아서 라우터를 쓰지 않았고, 랜딩 페이지 없이 중고마켓만 `/`에 구현했습니다.

## 주요 기능

### 공통

- 상단 내비게이션 바는 스크롤해도 최상단에 고정됩니다.
- 푸터에 Privacy Policy, FAQ 링크와 SNS 아이콘이 있습니다.
- 반응형 기준: 모바일 743px 이하 / 태블릿 744~1199px / PC 1200px 이상

### 베스트 상품

- `GET /products`를 `orderBy=favorite`로 요청해 좋아요가 많은 상품을 보여줍니다.
- 열 수와 개수: PC 4열(4개) / 태블릿 2열(2개) / 모바일 1열(1개)

### 판매 중인 상품

- 열 수: PC 5열 / 태블릿 3열 / 모바일 2열
- 화면 크기에 따라 서버에 보내는 `pageSize`를 바꿉니다. (PC 10 / 태블릿 6 / 모바일 4)
- 정렬: 드롭다운에서 "최신순"(`recent`) 또는 "좋아요순"(`favorite`)을 선택합니다. 모바일에서는 아이콘만 보입니다.
- 검색: 검색어를 입력하고 Enter를 누르면 `keyword`로 요청합니다.
- 페이지네이션: 총 페이지를 `ceil(totalCount / pageSize)`로 계산해 5개씩 묶어 보여주고, 이전/다음 버튼으로 한 페이지씩 이동합니다. 정렬이나 검색을 바꾸면 1페이지로 돌아갑니다.
- "상품 등록하기" 버튼은 시안대로 화면만 구현했습니다.

### API 호출

[판다마켓 API](https://panda-market-api.vercel.app/docs/)의 `GET /products`를 Axios로 호출합니다.

| 파라미터   | 설명                                    |
| ---------- | --------------------------------------- |
| `page`     | 페이지 번호                             |
| `pageSize` | 한 번에 가져올 상품 수                  |
| `orderBy`  | `recent`(최신순) / `favorite`(좋아요순) |
| `keyword`  | 검색어 (없으면 쿼리에 붙이지 않음)      |

## 커스텀 hook

| hook            | 설명                                                                                                                                                       |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `useProducts`   | `page`, `pageSize`, `orderBy`, `keyword`로 상품을 요청하고 `products`, `totalCount`, `isLoading`, `error`를 반환합니다. 조건이 바뀌면 이전 요청을 취소합니다. |
| `useDeviceType` | 화면 너비로 `pc` / `tablet` / `mobile`을 반환합니다. `pageSize`를 정하는 데 사용합니다.                                                                    |

## 폴더 구조

```text
.
├── index.html
├── package.json
├── .env.example           # 필요한 환경 변수 예시
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx                # 헤더 + 중고마켓 페이지 + 푸터
    ├── index.css              # 색상 변수, 리셋, 공통 스타일
    ├── api/
    │   ├── axiosInstance.js   # baseURL을 지정한 axios 인스턴스
    │   └── products.js        # getProducts
    ├── hooks/
    │   ├── useProducts.js
    │   └── useDeviceType.js
    ├── pages/
    │   └── MarketPage.jsx     # 베스트 상품 + 판매 중인 상품
    ├── components/
    │   ├── Header.jsx         # 상단 내비게이션 바
    │   ├── Footer.jsx
    │   ├── BestProducts.jsx
    │   ├── AllProducts.jsx    # 제목, 검색, 정렬, 목록, 페이지네이션
    │   ├── ProductCard.jsx
    │   ├── SortDropdown.jsx
    │   └── Pagination.jsx
    └── assets/                # 로고, 아이콘
```

각 컴포넌트는 같은 이름의 `.css` 파일을 가집니다.

## 실행 방법

Node.js가 필요합니다.

```bash
# 프로젝트 폴더에서
npm install
cp .env.example .env   # API 주소 설정 (VITE_BASE_URL)
npm run dev        # 개발 서버
npm run build      # 빌드
npm run lint       # 린트
```

## 구현하면서 신경 쓴 점

- 중단점(743 / 744 / 1199 / 1200px)을 CSS `@media`와 `useDeviceType`에 같은 숫자로 사용해, 레이아웃과 `pageSize`가 같은 기준으로 바뀌게 했습니다.
- 카드 컴포넌트 `ProductCard`를 베스트 상품과 판매 중인 상품이 함께 사용하고, 열 수와 간격은 각 섹션의 CSS에서 정합니다.
- `useProducts`는 조건이 바뀌면 `AbortController`로 이전 요청을 취소해, 정렬이나 검색을 빠르게 바꿔도 오래된 응답이 화면을 덮어쓰지 않게 했습니다.
- 검색어가 없으면 `keyword`를 쿼리에 붙이지 않아 `keyword=undefined`가 서버로 가지 않게 했습니다.
- 모바일의 제목+등록 버튼 줄과 검색+정렬 아이콘 줄은 CSS 그리드로 배치했고, PC·태블릿과 같은 마크업을 그대로 사용합니다.
- 일부 상품은 API 데이터의 이미지 주소가 깨져 있어서(`example.com` 등) 이미지가 보이지 않을 수 있습니다.
