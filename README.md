# 판다마켓 · 스프린트 미션 4

미션 3 코드를 바탕으로 React와 Vite를 사용해 만든 반응형 중고마켓입니다.
첫 화면 `/`에서 상품 검색, 최신 순·좋아요 순 정렬, 페이지 이동을 할 수 있습니다.

## 실행

Node.js 22.12 이상(권장 24 LTS)을 사용합니다.

```sh
npm ci
npm run dev
```

터미널에 표시되는 주소를 브라우저에서 엽니다. HTML 파일을 직접 열거나 Live Server로 실행하지 않습니다.

```sh
npm test
npm run build
npm run preview
```

`dist/`는 배포용 결과물입니다. Netlify에는 빌드 명령 `npm run build`, 게시 폴더 `dist`를 설정합니다. 같은 내용을 `netlify.toml`에도 저장했습니다.

## 요구사항 구현

- React 컴포넌트 기반 중고마켓, URL `/`
- 랜딩과 동일한 `Header`·`Footer` 공유
- `GET https://panda-market-api.vercel.app/products` 사용
- 전체 상품 최신 순(`recent`) / 좋아요 순(`favorite`) 정렬
- 검색 입력 후 Enter 또는 돋보기 버튼으로 검색, 검색어를 지우면 전체 목록 복구
- 베스트 상품은 검색과 독립적으로 `favorite` 조회
- `totalCount`로 페이지 수 계산, 한 번에 최대 5개의 페이지 번호 표시
- 검색·정렬·화면별 상품 개수가 바뀌면 1페이지로 초기화
- 커스텀 훅 `useProducts`, `useResponsivePageSize`
- 로딩, 검색 결과 없음, 요청 실패·재시도, 이미지 로딩 실패 처리
- 늦게 도착한 이전 응답 무시, 사용하지 않는 요청 취소
- 키보드 조작, 폼 레이블, 현재 페이지 및 결과 안내

| 화면 너비 | 베스트 열 / 요청 개수 | 전체 열 / 요청 개수 |
| --- | --- | --- |
| PC: 1200px 이상 | 4 / 4 | 5 / 10 |
| Tablet: 744–1199px | 2 / 2 | 3 / 6 |
| Mobile: 743px 이하 | 1 / 1 | 2 / 4 |

단순히 CSS로 일부 카드를 숨기는 방식이 아니라, `pageSize`를 실제 서버 요청에 반영합니다.

## 코드 읽는 순서

1. `src/main.jsx`: React 시작점, 공통 헤더와 푸터, 랜딩/중고마켓 선택
2. `src/Marketplace.jsx`: 검색어·정렬 상태, 베스트·전체 목록 연결
3. `src/api/products.js`: URLSearchParams로 GET 요청 생성 및 응답 확인
4. `src/hooks/useProducts.js`: 로딩·오류·데이터·취소·재시도 관리
5. `src/hooks/useResponsivePageSize.js`: matchMedia로 화면 크기 구분
6. `src/components/`: 상품 카드, 목록, 페이지 버튼 등 재사용 UI
7. `src/styles/`: 공통·중고마켓·랜딩 스타일

상품 목록은 `검색어 + 정렬 + pageSize`를 React key로 사용합니다. 조건이 바뀌면 목록의 페이지 상태가 1로 초기화되며, 베스트 목록은 별도로 유지됩니다.

## 유지한 기존 페이지

- `/landing.html`: 기존 랜딩의 문구·이미지를 React로 옮긴 소개 페이지
- `/login.html`, `/signup.html`: 미션 2의 로그인·회원가입 UI
- `/privacy.html`, `/faq.html`: 기존 안내 페이지
- `/items.html`: 기존 링크 호환을 위해 `/`로 이동
- `ArticleService.js`, `ProductService.js`, `main.js`: 미션 3 학습 코드 보존. 새 화면에서 실행하지 않습니다.

상품 등록, 상품 상세, 자유게시판 및 실제 로그인 연동은 미션 4 요구사항에 포함되어 있지 않습니다. 없는 페이지로 이동시키지 않고 등록 버튼에는 준비 중 안내를 표시합니다.

API는 공용 실습 서버여서 상품 이름과 사진이 시안과 다를 수 있습니다. 깨지거나 없는 사진은 판다마켓 대체 이미지로 표시하며 상품 데이터는 임의로 바꾸지 않습니다.

## 참고

- [Figma 시안](https://www.figma.com/design/ZLEzeXjbE5pD8WXLl5CwWv/판다마켓?node-id=971-5324)
- [상품 API 명세](https://panda-market-api.vercel.app/docs/#/Product/ListProducts)

본 프로젝트는 코드잇 교육 과제입니다. 디자인과 제공 이미지의 권리는 해당 권리자에게 있습니다.
