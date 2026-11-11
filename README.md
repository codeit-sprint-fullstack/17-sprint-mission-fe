# 판다마켓 · Sprint Mission 4

스프린트 미션 4로 만든 React 중고마켓입니다
기존 판다마켓의 로고와 랜딩 화면을 활용하고, 상품 목록을 API와 연결했습니다

## 실행

`package.json`이 있는 저장소 루트에서 실행합니다

```sh
npm install
npm run dev
```

터미널에 표시된 주소를 열면 중고마켓이 나옵니다
`index.html`을 직접 열거나 Live Server를 사용하는 대신 Vite로 실행합니다
Windows에서 `npm.ps1` 실행 정책 오류가 나면 `npm` 대신 `npm.cmd`를 사용하면 됩니다

## 사용한 도구

- React, Vite, Axios
- CSS 미디어 쿼리
- Vitest, React Testing Library, ESLint

## 중고마켓

- `/`에 베스트 상품과 판매 중인 상품 표시
- 랜딩 화면과 공통으로 사용하는 상단 메뉴와 푸터
- 최신 순·좋아요 순 정렬, 검색, 페이지 이동
- 검색·정렬·화면 크기가 바뀌면 1페이지부터 표시
- 로딩, 검색 결과 없음, 요청 실패와 다시 시도, 이미지 오류 안내
- `useProducts`, `useResponsivePageSize` 커스텀 훅 사용

상품은 Axios로 `GET https://panda-market-api.vercel.app/products`를 요청합니다
`page`, `pageSize`, `orderBy`, `keyword`를 전달하며 베스트 상품은 `orderBy=favorite`으로 따로 조회합니다
최신 순은 `recent`, 좋아요 순은 `favorite`이며 검색은 Enter 또는 검색 버튼으로 실행합니다
이전 요청을 취소하고 늦게 도착한 응답을 무시해, 검색 결과가 뒤섞이지 않도록 했습니다

| 화면 | 너비 | 베스트 열·개수 | 전체 상품 열 | 전체 요청 개수 |
| --- | --- | --- | --- | --- |
| PC | 1200px 이상 | 4 | 5 | 10 |
| Tablet | 744~1199px | 2 | 3 | 6 |
| Mobile | 743px 이하 | 1 | 2 | 4 |

전체 상품은 두 줄씩 보여 주며 화면에 맞춰 서버에 보내는 `pageSize`도 바뀝니다

## 파일 구성

```text
package.json, package-lock.json
index.html, landing.html, login.html, signup.html ...
src/
├─ App.jsx, Marketplace.jsx
├─ api/          상품 API 요청
├─ hooks/        상품 조회와 반응형 처리
├─ components/   메뉴, 푸터, 상품 카드, 페이지 버튼
├─ styles/       공통·중고마켓 스타일
└─ space/        이스터에그
images/, styles/ 기존 화면에서 사용하는 자원
public/          이미지와 음원
```

## 이스터에그

이스터에그가 숨겨져있습니다

## 상품 데이터 메모

ID가 `900`이고 원래 이름이 `스프린트 프론트엔드 21기 화이팅`인 상품만 화면에서 `17기`로 표시합니다
가격은 `17,000,000,000원`(170억 원), 썸네일은 돈다발을 든 판다 이미지로 바꿨습니다
API 원본은 그대로이므로 이 상품을 찾을 때는 `21기`로 검색해야 합니다
다른 상품과 서버의 정렬·페이지네이션은 기존 데이터를 사용합니다

## 현재 범위

상품 등록·상품 상세·자유게시판은 미션 4 구현 범위에 포함하지 않았습니다
로그인·회원가입은 기존 화면을 연결했으며 FAQ와 Privacy 페이지는 아직 내용이 없는 상태입니다

## 확인

```sh
npm run lint
npm test
npm run build
```

2026-11-11 기준 전체 테스트 164개 통과, 린트 오류·경고 없음, 빌드 성공
빌드 결과는 `dist/`에 생성됩니다

## 제출 메모

- 작업 브랜치: `react-WonJongSeok`
- PR 대상: `codeit-sprint-fullstack/17-sprint-mission-fe`의 `react-원종석`
- PR 제목: `[React] WonJongSeok - Sprint Mission`
