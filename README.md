# 판다마켓

코드잇 풀스택 부트캠프 스프린트 미션 프로젝트입니다.
HTML, CSS, JavaScript로 판다마켓 웹 페이지를 구현하고, 외부 API를 활용하여 게시글과 상품의 CRUD 함수를 작성합니다.

## 작성자

- 두기표

## 사용 기술

- HTML
- CSS
- JavaScript
- Node.js
- axios
- Git / GitHub

## 진행 상황

- 미션 1: 메인 페이지 구현
- 미션 2: 로그인 및 회원가입 페이지 구현
- 미션 3: 게시글 및 상품 API CRUD 함수 구현, 파일 분리 및 main.js 연결

## 미션 3 구현 내용

### 게시글 API

- 게시글 목록 조회: `getArticleList()`
- 게시글 상세 조회: `getArticle()`
- 게시글 등록: `createArticle()`
- 게시글 수정: `patchArticle()`
- 게시글 삭제: `deleteArticle()`
- `.then()`과 `.catch()`를 사용한 비동기 처리 및 오류 처리

### 상품 API

- 상품 목록 조회: `getProductList()`
- 상품 상세 조회: `getProduct()`
- 상품 등록: `createProduct()`
- 상품 수정: `patchProduct()`
- 상품 삭제: `deleteProduct()`
- `async/await`과 `try/catch`를 사용한 비동기 처리 및 오류 처리

### 공통 사항

- axios를 이용한 HTTP 요청
- 목록 조회 시 `page`, `pageSize`, `keyword` 쿼리 파라미터 사용
- 서버에서 오류 응답을 받은 경우 상태 코드와 오류 메시지 출력
- 서버 응답이 없는 경우 오류 메시지 출력
- `export`와 `import`를 활용한 모듈 분리

## 파일 구성

- `sprint-missions/`: 웹 페이지 파일
- `sprint-missions/css/`: 스타일 파일
- `sprint-missions/img/`: 이미지 파일
- `sprint-missions/js/ArticleService.js`: 게시글 API 함수
- `sprint-missions/js/ProductService.js`: 상품 API 함수
- `sprint-missions/js/main.js`: API 함수 import 및 실행 코드

## API 코드 실행 방법

Node.js가 설치된 환경에서 저장소 최상위 폴더의 터미널을 열고 실행합니다.

```bash
npm install
node sprint-missions/js/main.js
```

실행할 함수와 전달할 값은 `main.js`에서 설정하며, 응답 결과는 터미널에서 확인합니다.

## API 문서

[판다마켓 API 문서](https://panda-market-api-crud.vercel.app/docs/)

## 배포 주소

[판다마켓 웹 페이지](https://17-sprint-mission.netlify.app/)