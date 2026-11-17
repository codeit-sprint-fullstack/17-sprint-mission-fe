# 🐼 판다마켓 (React + Express)

중고 물품을 사고팔 수 있는 **판다마켓** 프로젝트입니다.
미션 4부터 React로 만들고 있어요. 미션 5부터는 직접 만든 Express + MongoDB 서버(17-sprint-mission-be 저장소)의 API를 사용해요.

## 실행 방법

Node.js 20.19 이상(또는 22.12 이상)이 필요합니다.
백엔드 서버(17-sprint-mission-be)를 먼저 켜 두거나, render.com에 배포한 주소를 `.env`에 넣어 주세요.

```bash
npm install
cp .env.example .env    # VITE_API_URL=http://localhost:3000 (또는 render 주소)
npm run dev             # → http://localhost:5173
```

## 미션 진행 현황

| 미션 | 내용 | 주요 기술 |
|---|---|---|
| 미션 4 | 중고마켓 페이지 (검색·정렬·페이지네이션, 반응형) | React, Vite, axios, 커스텀 hook |
| 미션 5 | 라우팅(/, /items, /registration), 랜딩 페이지 React 이전, 상품 등록 페이지, 내 API 서버 연결 | react-router-dom |

## 페이지

| 주소 | 페이지 |
|---|---|
| `/` | 랜딩 페이지 |
| `/items` | 중고마켓 (판매 중인 상품) |
| `/registration` | 상품 등록 |
| `/items/:productId` | 상품 상세 (빈 페이지, 다음 미션) |
| `/login`, `/signup` | 로그인, 회원가입 (미션 2 HTML/CSS를 React로 옮김, 기능은 아직 없음) |

## 폴더 구조

```
├── index.html
├── .env.example             # VITE_API_URL (백엔드 주소)
├── public/
│   ├── _redirects           # Netlify용 새로고침 404 방지 (render는 Rewrite 규칙으로 처리)
│   └── images/              # 로고, 아이콘, 기본 상품 이미지, home/(랜딩), social/(간편 로그인)
├── src/
│   ├── main.jsx
│   ├── App.jsx              # 라우터: 주소별 페이지 연결 (MainLayout 안/밖)
│   ├── pages/
│   │   ├── LandingPage.jsx       # /
│   │   ├── MarketPage.jsx        # /items
│   │   ├── RegistrationPage.jsx  # /registration
│   │   ├── ProductDetailPage.jsx # /items/:productId (빈 페이지)
│   │   ├── LoginPage.jsx         # /login
│   │   └── SignupPage.jsx        # /signup
│   ├── components/
│   │   ├── layout/MainLayout.jsx # 헤더 + 페이지 + 푸터 틀
│   │   ├── auth/
│   │   │   ├── AuthLayout.jsx    # 로그인·회원가입 공통 틀 (로고, 간편 로그인)
│   │   │   └── PasswordInput.jsx # 눈 아이콘으로 비밀번호 보기/숨기기
│   │   ├── Header.jsx       # 상단 네비게이션 바 (/items에서 "중고마켓" 파란색)
│   │   ├── Footer.jsx
│   │   ├── AllProducts.jsx  # 판매 중인 상품 (검색·정렬·페이지네이션)
│   │   ├── ProductCard.jsx  # 상품 카드 (기본 이미지)
│   │   ├── SearchBar.jsx
│   │   ├── SortDropdown.jsx # 최신순
│   │   ├── Pagination.jsx
│   │   └── registration/
│   │       ├── FormField.jsx  # 라벨 + 입력창 + 에러 메시지
│   │       └── TagChips.jsx   # 태그 칩 목록
│   ├── hooks/
│   │   ├── useProductValidation.js # 상품 등록 유효성 검사 Custom Hook
│   │   ├── useDeviceType.js
│   │   ├── useProducts.js
│   │   └── useClickOutside.js
│   ├── api/
│   │   ├── config.js        # BASE_URL (.env에서 읽기)
│   │   ├── request.js       # axios 요청 공통 함수
│   │   └── productApi.js    # GET /products, POST /products
│   ├── utils/
│   │   ├── constants.js     # pageSize, 정렬 옵션, 유효성 조건 숫자
│   │   ├── validateProduct.js # 유효성 검사 규칙
│   │   └── format.js
│   └── styles/
```

## 구현 포인트

- **라우팅**: `react-router-dom`의 `BrowserRouter` + `Routes`. 헤더의 `NavLink`가 지금 주소를 보고 "중고마켓" 메뉴를 `#3692FF`로 바꿔요.
- **유효성 검사 Custom Hook** (`useProductValidation`): 값이 바뀔 때마다 `validateProduct()`로 에러를 계산하고, 사용자가 건드린 칸의 에러만 보여 줘요. `isFilled`(빈 칸 없음), `isValid`(규칙 통과)로 등록 버튼을 켜고 꺼요.
- **태그 칩**: Enter를 누르면 칩으로 쌓여요. 한글 입력 중(조합 중) Enter가 두 번 들어와 칩이 두 개 생기는 문제를 `isComposing`으로 막았어요. 같은 태그는 한 번만 들어가요.
- **같은 규칙을 앞뒤로**: 프론트의 유효성 조건 숫자(`PRODUCT_RULES`)와 백엔드(17-sprint-mission-be) 스키마의 조건이 같아서, 프론트 검사를 통과하면 서버에서도 통과해요.
