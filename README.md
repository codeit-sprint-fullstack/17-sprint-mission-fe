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
