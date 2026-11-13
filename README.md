# 🐼 판다마켓 React (Panda Market)

## 프로젝트 소개

기존 HTML/CSS 판다마켓 미션을 바탕으로 React 컴포넌트 구성과 데이터 렌더링을 학습하는 프로젝트입니다. `react` 브랜치에서는 React 프로젝트를 저장소 최상위에서 관리합니다.

## 현재 구현 내용

- 헤더와 푸터 컴포넌트
- 로컬 예시 데이터로 렌더링하는 베스트 상품 목록
- 상품 카드의 상품명, 가격, 좋아요 수 표시
- 상품 이미지가 없을 때 대체 이미지 표시

현재 상품 데이터는 `src/components/itemData.js`를 사용합니다. API 연동, 좋아요 변경 동작, 로그인·회원가입 화면 및 페이지 라우팅은 아직 구현되지 않았습니다. 기존 HTML 페이지를 가리키는 링크는 React 화면으로 연결되지 않습니다.

## 사용 기술

- React 19
- Vite 8
- JavaScript (ES Modules, JSX)
- CSS
- ESLint
- npm

## 설치 및 실행

Node.js와 npm이 설치된 환경에서 저장소 최상위 폴더를 기준으로 실행합니다. Node.js 버전은 설치된 Vite의 요구 조건을 충족해야 합니다.

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

터미널에 표시되는 로컬 주소로 접속합니다.

### 프로덕션 빌드 및 미리보기

```bash
npm run build
npm run preview
```

빌드 결과는 `dist/`에 생성됩니다. `npm run preview`는 빌드된 결과를 로컬에서 확인하는 명령입니다.

### 코드 검사

```bash
npm run lint
```

## 프로젝트 구조

```text
public/                 이미지, 아이콘, 폰트
src/
  components/           Header, Footer, BestItem, ItemCard, 상품 예시 데이터
  styles/               헤더·푸터 스타일
  App.jsx               화면 구성
  main.jsx              React 진입점
  index.css             공통 스타일
index.html              HTML 진입점
package.json            의존성 및 실행 명령
vite.config.js          Vite 설정
eslint.config.js        ESLint 설정
```

## 학습 이력

기존 HTML/CSS 미션에서는 판다마켓 소개 메인 페이지와 로그인·회원가입 페이지를 작성했습니다. HTML 및 JavaScript 학습 프로젝트는 `basic` 브랜치에 보관되어 있습니다.

기존 HTML 미션의 Netlify 배포 주소입니다. 현재 React 프로젝트의 배포 주소를 의미하지 않습니다.

https://fs17-sujin-sprint-mission.netlify.app/
