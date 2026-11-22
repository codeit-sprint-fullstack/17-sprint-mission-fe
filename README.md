# 🐼 판다마켓 (Panda Market) - React

## 📄 페이지 구성

| 경로 | 페이지 |
| --- | --- |
| `/` | 랜딩 페이지 |
| `/items` | 중고마켓 (상품 목록) |
| `/registration` | 상품 등록 |
| `/items/:id` | 상품 상세 (빈 페이지, 등록 성공 시 이동) |

## ✨ 주요 기능

### 랜딩 페이지
- HTML/CSS로 구현했던 랜딩 페이지를 React 컴포넌트로 마이그레이션
- 반복되는 소개 영역은 `FeatureSection` 컴포넌트로 분리 (`reverse`로 좌우 배치 전환)

### 중고마켓 페이지
- **베스트 상품**: 좋아요가 많은 순서로 상품 표시 (`orderBy=favorite`)
- **판매 중인 상품**: 전체 상품 목록
  - **정렬**: 최신순 / 좋아요순 드롭다운 (모바일에서는 아이콘 버튼), 바깥 영역 클릭 시 닫힘
  - **검색**: 검색어 입력 후 Enter로 검색
  - **페이지네이션**: 이전/다음 버튼과 페이지 번호 5개씩 표시, 현재 페이지 강조
  - 정렬이나 검색을 바꾸면 1페이지로 이동
  - **상품 등록하기** 버튼으로 `/registration` 이동
- 상품 이미지가 없거나 불러오지 못하면 기본 이미지 표시
- **로딩 / 에러 / 빈 결과 처리**
  - 로딩 중에는 카드 형태의 스켈레톤 UI 표시 (`ProductCardSkeleton`, `animate-pulse`)
  - 베스트 상품과 판매 중인 상품의 로딩·에러 상태를 따로 관리해, 한쪽이 실패해도 다른 쪽은 정상 표시
  - 결과가 없으면 검색 여부에 따라 `검색 결과가 없어요.` / `등록된 상품이 없어요.` 표시

### 상품 등록 페이지
- 상품명, 상품 소개, 판매 가격, 태그를 입력해 `POST /products`로 등록
- 등록 성공 시 해당 상품 상세 페이지(`/items/:id`)로 이동
- **태그**: 입력 후 Enter를 누르면 칩 형태로 추가, X 버튼으로 삭제
  - 한글 입력 조합 중 Enter는 무시 (`isComposing`)해 태그가 중복 추가되지 않도록 처리
  - 같은 태그는 한 번만 추가
- **등록 버튼 비활성화**: 입력값이 비어 있거나 유효성 검사를 통과하지 못하면 비활성화, 요청 중 중복 제출 방지
- **유효성 검사** (`useProductForm` 커스텀 훅)

  | 항목 | 조건 |
  | --- | --- |
  | 상품명 | 1자 이상, 10자 이내 |
  | 상품 소개 | 10자 이상, 100자 이내 |
  | 판매 가격 | 1자 이상, 숫자 |
  | 태그 | 5글자 이내 |

  - 조건을 통과하지 못하면 input에 빨간 테두리(`aria-invalid`)와 아래에 빨간 에러 메시지 표시
  - 상품명·소개·가격은 한 번 입력칸을 벗어난 뒤(blur)부터, 태그는 입력 즉시 에러 표시

### 공통
- 헤더: 현재 페이지 메뉴 강조 (`NavLink`, `/items`에서 `중고마켓` 메뉴 `#3692FF`), 모바일에서는 텍스트형 로고로 교체
- 레이아웃: `Layout`(헤더·푸터)과 `Contents`(본문 여백)를 중첩 라우트(`Outlet`)로 구성

### 반응형
화면 크기에 따라 레이아웃 열 수와 **API에 요청하는 상품 수(`pageSize`)**가 함께 바뀝니다.

| | 모바일 (~767px) | 태블릿 (768px~) | PC (1200px~) |
| --- | --- | --- | --- |
| 베스트 상품 | 1열 · 1개 | 2열 · 2개 | 4열 · 4개 |
| 판매 중인 상품 | 2열 · 4개 | 3열 · 6개 | 5열 · 10개 |

- `useBreakpoint` 커스텀 훅으로 현재 화면 구분(`mobile` / `tablet` / `pc`)을 반환
  - `resize` 이벤트에 debounce(150ms)를 적용해, 창 크기 조절이 멈춘 뒤 한 번만 계산
  - 너비 숫자 대신 화면 구분 값을 저장해, 기준 너비를 넘을 때만 다시 렌더링
  - 컴포넌트가 사라지면 이벤트와 타이머 제거(cleanup)
- 화면 구분이 바뀌면 바뀐 `pageSize`로 상품을 다시 요청

### API 연동
[판다마켓 API](https://panda-market-api.vercel.app/docs)의 상품 API를 사용합니다.

| 메서드 | 경로 | 설명 |
| --- | --- | --- |
| `GET` | `/products` | 상품 목록 조회 |
| `POST` | `/products` | 상품 등록 |

`GET /products` 쿼리 파라미터

| 파라미터 | 설명 |
| --- | --- |
| `page` | 페이지 번호 |
| `pageSize` | 한 페이지에 가져올 상품 수 |
| `orderBy` | 정렬 기준 (`recent` / `favorite`) |
| `keyword` | 검색어 (비어 있으면 파라미터에서 제외) |

- `axios.create`로 공통 설정(`baseURL`, `timeout`)을 가진 인스턴스를 만들어 사용
- 에러는 API 함수가 아닌 컴포넌트에서 `try/catch`로 처리

## 🛠 기술 스택

- **React** – 함수 컴포넌트, `useState` / `useEffect` / `useRef`, 커스텀 훅
- **React Router** – 중첩 라우트, `Link`, `NavLink`, `useNavigate`
- **Tailwind CSS v4** – `@theme`으로 색상·폰트 디자인 토큰 관리, 반응형 접두어(`md:`, `pc:`)
- **Axios** – API 요청
- **Vite** – 개발 서버, 빌드

## 📁 폴더 구조

```
src
├── api
│   ├── client.js               # axios 인스턴스 (baseURL, timeout)
│   └── productApi.js           # 상품 API 함수 (목록 조회, 등록)
├── assets
│   ├── fonts                   # Pretendard 웹폰트
│   └── images                  # 아이콘, 로고, 기본 이미지
├── components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Button.jsx              # 공통 버튼 (href가 있으면 Link로 렌더링)
│   ├── InputField.jsx          # 라벨 + input + 에러 메시지
│   ├── TextareaField.jsx       # 라벨 + textarea + 에러 메시지
│   ├── TagField.jsx            # 태그 입력 + 태그 칩 목록
│   ├── ProductCard.jsx         # 상품 카드 (베스트 / 일반)
│   ├── ProductCardSkeleton.jsx # 상품 카드 로딩 스켈레톤
│   ├── SortDropdown.jsx        # 정렬 드롭다운
│   └── Pagination.jsx          # 페이지네이션
├── constants
│   └── routes.js               # 페이지 경로 상수
├── hooks
│   ├── useBreakpoint.js        # 반응형 커스텀 훅
│   └── useProductForm.js       # 상품 등록 폼 상태 · 유효성 검사 훅
├── layout
│   ├── Layout.jsx              # 헤더 + 본문 + 푸터
│   └── Contents.jsx            # 본문 공통 여백
├── pages
│   ├── LandingPage.jsx         # 랜딩 페이지
│   ├── ItemsPage.jsx           # 중고마켓 페이지
│   ├── RegistrationPage.jsx    # 상품 등록 페이지
│   └── ItemsDetailPage.jsx     # 상품 상세 (빈 페이지)
├── styles
│   ├── global.css              # 기본 스타일, 공통 클래스
│   └── variables.css           # 디자인 토큰 (@theme)
├── App.jsx                     # 라우트
└── main.jsx
```
