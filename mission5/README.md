# 판다마켓 스프린트 미션 5 프론트엔드

수업예제 구조를 참고하고, 기존 `17-sprint-mission-fe` 랜딩 페이지 HTML/CSS를 React로 마이그레이션했습니다.

## 화면

- `/` 기존 HTML/CSS 랜딩을 React로 마이그레이션, '구경하러 가기' → `/items`
- `/items` 상품 목록 (GET /products), 검색, 최신순, PC 5열/태블릿 3열/모바일 2열, 페이지네이션
- `/registration` 상품 등록 (POST /products), 유효성 검사, 태그 Enter 추가 및 삭제
- `/items/:id` 등록 완료 후 이동하는 빈 상세 화면

## 참고