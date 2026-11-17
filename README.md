# 🐼 판다마켓 (Panda Market) - React

## 📄 페이지 구성

| 경로 | 페이지 |
| --- | --- |
| `/` | 중고마켓 (상품 목록) |

## ✨ 주요 기능

### 중고마켓 페이지
- **베스트 상품**: 좋아요가 많은 순서로 상품 표시 (`orderBy=favorite`)
- **판매 중인 상품**: 전체 상품 목록
  - **정렬**: 최신순 / 좋아요순 드롭다운 (모바일에서는 아이콘 버튼)
  - **검색**: 검색어 입력 후 Enter로 검색, 결과가 없으면 안내 문구 표시
  - **페이지네이션**: 이전/다음 버튼과 페이지 번호 5개씩 표시, 현재 페이지 강조
  - 정렬이나 검색을 바꾸면 1페이지로 이동
- 상품 이미지가 없거나 불러오지 못하면 회색 기본 영역 표시

### 공통
- 헤더: 현재 페이지 메뉴 강조 (`NavLink`), 모바일에서는 텍스트형 로고로 교체

### 반응형
화면 크기에 따라 레이아웃 열 수와 **API에 요청하는 상품 수(`pageSize`)**가 함께 바뀝니다.

| | 모바일 (~767px) | 태블릿 (768px~) | PC (1200px~) |
| --- | --- | --- | --- |
| 베스트 상품 | 1열 · 1개 | 2열 · 2개 | 4열 · 4개 |
| 판매 중인 상품 | 2열 · 4개 | 3열 · 6개 | 5열 · 10개 |

- `useBreakpoint` 커스텀 훅으로 현재 화면 구분(`mobile` / `tablet` / `pc`)을 반환
  - `resize` 이벤트로 창 크기 변화를 감지하고, 컴포넌트가 사라지면 이벤트 제거(cleanup)
  - 너비 숫자 대신 화면 구분 값을 저장해, 기준 너비를 넘을 때만 다시 렌더링
- 화면 구분이 바뀌면 바뀐 `pageSize`로 상품을 다시 요청

### API 연동
[판다마켓 API](https://panda-market-api.vercel.app/docs)의 `GET /products`를 사용합니다.

| 파라미터 | 설명 |
| --- | --- |
| `page` | 페이지 번호 |
| `pageSize` | 한 페이지에 가져올 상품 수 |
| `orderBy` | 정렬 기준 (`recent` / `favorite`) |
| `keyword` | 검색어 |

- `axios.create`로 공통 설정(`baseURL`, `timeout`)을 가진 인스턴스를 만들어 사용
- 에러는 API 함수가 아닌 컴포넌트에서 `try/catch`로 처리

## 🛠 기술 스택

- **React** – 함수 컴포넌트, `useState` / `useEffect`, 커스텀 훅
- **React Router** – `Link`, `NavLink` 페이지 이동
- **Tailwind CSS v4** – `@theme`으로 색상·폰트 디자인 토큰 관리, 반응형 접두어(`md:`, `pc:`)
- **Axios** – API 요청
- **Vite** – 개발 서버, 빌드

## 📁 폴더 구조

```
src
├── api
│   ├── client.js          # axios 인스턴스 (baseURL, timeout)
│   └── productApi.js      # 상품 API 함수
├── assets
│   ├── fonts              # Pretendard 웹폰트
│   └── images             # 아이콘, 로고
├── components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Button.jsx         # 공통 버튼 (href가 있으면 Link로 렌더링)
│   ├── ProductCard.jsx    # 상품 카드 (베스트 / 일반)
│   ├── SortDropdown.jsx   # 정렬 드롭다운
│   └── Pagination.jsx     # 페이지네이션
├── constants
│   └── routes.js          # 페이지 경로 상수
├── hooks
│   └── useBreakpoint.js   # 반응형 커스텀 훅
├── pages
│   └── Item.jsx           # 중고마켓 페이지
├── styles
│   ├── global.css         # 기본 스타일, 공통 클래스
│   └── variables.css      # 디자인 토큰 (@theme)
├── App.jsx                # 레이아웃, 라우트
└── main.jsx
```
