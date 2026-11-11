# 🐼 판다마켓 (React)

중고 물품을 사고팔 수 있는 **판다마켓**의 프론트엔드 프로젝트입니다.
스프린트 미션 4부터 React로 만들고 있어요.

## 실행 방법

Node.js 20.19 이상(또는 22.12 이상)이 필요합니다.

```bash
npm install   # 처음 한 번만
npm run dev   # 개발 서버 실행 → http://localhost:5173
```

## 미션 진행 현황

| 미션 | 내용 | 주요 기술 |
|---|---|---|
| 미션 4 | 중고마켓 페이지 (베스트 상품, 판매 중인 상품 검색·정렬·페이지네이션, 반응형) | React, Vite, axios, 커스텀 hook |

## 폴더 구조

```
├── index.html               # React가 그려질 <div id="root">
├── public/images/           # 로고, 아이콘, 기본 상품 이미지
└── src/
    ├── main.jsx             # React 시작점
    ├── App.jsx              # Header + 중고마켓 페이지 + Footer ('/'에서 바로 보여요)
    ├── pages/
    │   └── MarketPage.jsx   # 중고마켓 페이지 = 베스트 상품 + 전체 상품
    ├── components/
    │   ├── Header.jsx       # 상단 네비게이션 바
    │   ├── Footer.jsx       # 푸터
    │   ├── BestProducts.jsx # 베스트 상품 (좋아요순)
    │   ├── AllProducts.jsx  # 판매 중인 상품 (검색·정렬·페이지네이션)
    │   ├── ProductCard.jsx  # 상품 카드
    │   ├── SearchBar.jsx    # 검색창
    │   ├── SortDropdown.jsx # 최신순 / 좋아요순 드롭다운
    │   └── Pagination.jsx   # 페이지 번호
    ├── hooks/               # 커스텀 hook
    │   ├── useDeviceType.js   # 화면 크기 → 'desktop' | 'tablet' | 'mobile'
    │   ├── useProducts.js     # 상품 목록 불러오기 (로딩·에러 상태 포함)
    │   └── useClickOutside.js # 바깥 클릭 감지 (드롭다운 닫기)
    ├── api/
    │   ├── config.js        # BASE_URL
    │   ├── request.js       # axios 요청 공통 함수 (응답·에러 처리)
    │   └── productApi.js    # GET /products
    ├── utils/
    │   ├── constants.js     # 화면 크기별 pageSize, 정렬 옵션
    │   └── format.js        # 가격 표시 (1,000원)
    └── styles/
        ├── reset.css        # 브라우저 기본 스타일 초기화
        ├── variables.css    # 색상 변수
        └── style.css        # 페이지의 모든 스타일
```

## 구현 포인트

- **반응형 pageSize**: `useDeviceType` hook이 화면 너비(768px, 1200px 기준)를 보고 기기 종류를 알려 주면, 그에 맞춰 서버에 보내는 `pageSize`를 바꿔요.
  - 베스트 상품: Desktop 4 / Tablet 2 / Mobile 1 (한 줄)
  - 전체 상품: Desktop 10 / Tablet 6 / Mobile 4 (두 줄)
- **검색·정렬·페이지 이동**: 검색어나 정렬이 바뀌면 1페이지부터 다시 보여 줘요. 화면 크기가 바뀌어 pageSize가 달라질 때도 1페이지로 돌아가요.
- **예전 응답 무시**: 조건이 빠르게 바뀌어도 마지막 요청의 응답만 화면에 반영해요. (`useProducts`의 `ignore`)
- **요청 공통 함수**: 미션 3 리뷰를 반영해 async/await로 통일하고, axios 인스턴스(baseURL 설정)를 쓰는 `request()` 하나로 응답·에러를 처리해요.
- **이미지 없는 상품**: 이미지가 없거나 주소가 깨지면 기본 이미지를 보여 줘요.
