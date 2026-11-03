제목: [미션 3] 게시글·상품 CRUD API 함수 구현

게시글과 상품 API의 생성·목록 조회·상세 조회·수정·삭제 함수를 구현했습니다. 목록 요청에는 page, pageSize, keyword를 전달하고, 비정상 HTTP 응답은 오류 메시지를 콘솔에 출력합니다.

- ArticleService.js: .then() / .catch()로 비동기 처리
- ProductService.js: async/await / try/catch로 비동기 처리
- main.js: import한 함수 10개를 순서대로 실행하고 결과 확인
- index.html: 목록 조회 및 전체 실행 버튼 제공

전체 실행에서는 직접 만든 연습 게시글과 상품만 수정·삭제합니다.

검증: 실제 API에서 생성, 검색, 상세 조회, 수정 후 재조회, 삭제를 확인했습니다. 삭제 후 상세 조회가 404로 실패하는 오류 처리도 확인했습니다. JavaScript 파일의 문법 검사도 통과했습니다.
