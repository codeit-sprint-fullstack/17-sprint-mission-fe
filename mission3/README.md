# 스프린트 미션 3

Article API와 Product API를 사용하여 생성, 조회, 수정, 삭제(CRUD) 기능을 구현합니다.

[API 명세 확인하기](https://panda-market-api-crud.vercel.app/docs/)

## 기본 요구사항 체크리스트

현재 코드 점검 결과를 기준으로 표시했습니다. GitHub PR 생성 여부는 아직 확인되지 않았습니다.

### 공통

- [ ] GitHub에 스프린트 미션 PR을 생성합니다.
- [x] `fetch` 혹은 `axios`를 사용합니다. (현재 구현: `fetch`)
- [x] 응답 상태 코드가 2XX가 아니면 에러 메시지를 콘솔에 출력합니다.

### Article API

[Article API 명세](https://panda-market-api-crud.vercel.app/docs/#/Article)

- [x] `getArticleList()`: GET 메서드로 목록을 조회합니다.
  - [x] `page`, `pageSize`, `keyword` 쿼리 파라미터를 사용합니다.
- [x] `getArticle()`: GET 메서드로 상세 정보를 조회합니다.
- [x] `createArticle()`: POST 메서드로 게시글을 생성합니다.
  - [x] request body에 `title`, `content`, `image`를 포함합니다.
- [x] `patchArticle()`: PATCH 메서드로 게시글을 수정합니다.
- [x] `deleteArticle()`: DELETE 메서드로 게시글을 삭제합니다.
- [x] `.then()` 메서드로 비동기 처리를 합니다.
- [x] `.catch()`로 오류를 처리합니다.

### Product API

[Product API 명세](https://panda-market-api-crud.vercel.app/docs/#/Product)

- [x] `getProductList()`: GET 메서드로 목록을 조회합니다.
  - [x] `page`, `pageSize`, `keyword` 쿼리 파라미터를 사용합니다.
- [x] `getProduct()`: GET 메서드로 상세 정보를 조회합니다.
- [x] `createProduct()`: POST 메서드로 상품을 생성합니다.
  - [x] request body에 `name`, `description`, `price`, `tags`, `images`를 포함합니다.
- [x] `patchProduct()`: PATCH 메서드로 상품을 수정합니다.
- [x] `deleteProduct()`: DELETE 메서드로 상품을 삭제합니다.
- [x] `async/await`로 비동기 처리를 합니다.
- [x] `try/catch`로 오류를 처리합니다.

### 파일 분리 및 실행

- [x] 구현한 함수를 파일별로 분리합니다.
  - [x] `export`를 사용합니다.
  - [x] `ProductService.js`에 Product API 관련 함수를 작성합니다.
  - [x] `ArticleService.js`에 Article API 관련 함수를 작성합니다.
- [x] 이외의 실행 코드는 `main.js`에 작성합니다.
  - [x] `import`를 사용합니다.
  - [x] 각 함수를 실행하고 동작 결과를 확인하는 코드를 작성합니다.

## 실행 방법

1. VS Code에서 프로젝트 폴더를 엽니다.
2. Live Server로 `index.html`을 실행합니다.
3. 게시글과 상품 목록을 확인합니다.
4. **함수 10개 실행 확인** 버튼을 누릅니다.
5. 화면과 개발자 도구 Console에서 결과를 확인합니다.

전체 실행은 연습 게시글과 상품을 각각 하나 생성하고, 검색·상세 조회·수정·재조회 후 삭제합니다. 직접 생성한 데이터만 수정·삭제합니다.

## 점검 범위

- 코드에서 요구된 함수, 비동기 처리 방식, 파일 분리, 실행 코드를 확인했습니다.
- 가짜 응답을 이용하여 함수 10개의 요청 경로·메서드·쿼리·body와 404 오류 처리를 검사했습니다.
- JavaScript 문법 검사를 통과했습니다.
- 이번 점검에서는 실제 서버 CRUD와 브라우저 실행을 재확인하지 않았습니다.
