# 스프린트 미션 4 · 판다마켓

React로 구현한 중고마켓 페이지입니다.

## 기본 요구사항

### 공통

- [ ] GitHub에 스프린트 미션 4 PR 만들기
- [x] React 사용하기

### 중고마켓 페이지

- [x] PC·태블릿·모바일에 대응하는 중고마켓 페이지 구현하기
- [x] 기본 경로 `/`에서 중고마켓 페이지 표시하기
- [ ] 상단 내비게이션과 푸터가 랜딩 페이지의 스타일 및 배치 규칙과 일치하는지 확인하기
- [x] [판다마켓 API](https://panda-market-api.vercel.app/docs/)의 `GET /products`로 상품 데이터 가져오기
  - [x] 상품 목록 페이지네이션 구현하기
  - [x] 드롭다운에서 최신순·좋아요순으로 정렬하기
  - [x] 상품 목록 검색 기능 구현하기
- [x] 베스트 상품은 `GET /products`에 `orderBy=favorite`를 전달해 조회하기

## 개발 환경 · React + Vite

이 템플릿은 Vite에서 React를 실행하는 데 필요한 기본 설정을 제공합니다. 코드 변경을 개발 화면에 즉시 반영하는 HMR과 기본 ESLint 규칙이 포함되어 있습니다.

사용할 수 있는 공식 플러그인은 두 가지입니다.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)는 [Oxc](https://oxc.rs)를 사용합니다.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)는 [SWC](https://swc.rs/)를 사용합니다.

## React 컴파일러

개발 서버와 빌드 성능에 영향을 줄 수 있어 이 템플릿에서는 React 컴파일러가 기본적으로 비활성화되어 있습니다. 사용하려면 [설치 문서](https://react.dev/learn/react-compiler/installation)를 참고하세요.

## ESLint 설정 확장하기

실제 서비스에 배포할 앱이라면 TypeScript와 타입 정보를 활용하는 ESLint 규칙을 함께 사용하는 것을 권장합니다. TypeScript와 [`typescript-eslint`](https://typescript-eslint.io)를 프로젝트에 설정하는 방법은 [TypeScript 템플릿](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)을 참고하세요.
