# 판다마켓 중고마켓

React와 Vite로 구현한 반응형 중고마켓 페이지입니다. Panda Market Product API에서 상품을 불러와 베스트 상품과 전체 상품을 보여줍니다.

## 주요 기능

- Product API의 `GET /products` 요청으로 상품 목록을 조회합니다.
- 베스트 상품은 좋아요 순으로 정렬합니다.
- 전체 상품은 최신 순 또는 좋아요 순으로 정렬할 수 있습니다.
- 상품명 검색과 페이지네이션을 제공합니다.
- 화면 크기에 따라 상품 카드 열 수와 API 요청 `pageSize`를 조정합니다.
- 상품 로딩, 오류, 검색 결과 없음 상태를 표시합니다.
- 공통 헤더와 푸터를 사용합니다.

## 반응형 기준

| 화면 | 베스트 상품 | 전체 상품 | 요청 `pageSize` (베스트 / 전체) |
| --- | ---: | ---: | ---: |
| Desktop (1200px 이상) | 4열 | 5열 | 4 / 10 |
| Tablet (744px–1199px) | 2열 | 3열 | 2 / 6 |
| Mobile (743px 이하) | 1열 | 2열 | 1 / 6 |

## 기술 스택

- React
- Vite
- JavaScript, CSS
- Fetch API
- Panda Market Product API: `https://panda-market-api.vercel.app`

## 시작하기

Node.js가 설치되어 있어야 합니다.

```bash
npm install
npm run dev
```

개발 서버 주소는 터미널에 표시됩니다. `npm run dev`는 기본 브라우저도 엽니다.

## 빌드 및 미리보기

```bash
npm run build
npm run preview
```

빌드 결과물은 `dist` 폴더에 생성됩니다.

## Netlify 배포 설정

- Base directory: 저장소 루트 (비워 둠)
- Build command: `npm run build`
- Publish directory: `dist`
- Production branch: `react-오세연`

## 프로젝트 구조

```text
.
├── public/                 # 정적 이미지와 폰트
├── src/
│   ├── components/         # 헤더, 푸터, 상품 카드
│   ├── hooks/              # 상품 조회 및 화면 크기 커스텀 훅
│   ├── App.jsx             # 마켓 페이지와 검색·정렬·페이지네이션
│   └── styles.css          # 공통 및 반응형 스타일
├── index.html
└── package.json
```
