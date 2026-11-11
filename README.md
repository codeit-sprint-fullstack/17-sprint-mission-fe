# React + Vite

이 템플릿은 Vite에서 React를 실행하는 데 필요한 기본 설정을 제공합니다. 코드 변경을 개발 화면에 즉시 반영하는 HMR과 기본 ESLint 규칙이 포함되어 있습니다.

사용할 수 있는 공식 플러그인은 두 가지입니다.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)는 [Oxc](https://oxc.rs)를 사용합니다.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)는 [SWC](https://swc.rs/)를 사용합니다.

## React 컴파일러

개발 서버와 빌드 성능에 영향을 줄 수 있어 이 템플릿에서는 React 컴파일러가 기본적으로 비활성화되어 있습니다. 사용하려면 [설치 문서](https://react.dev/learn/react-compiler/installation)를 참고하세요.

## ESLint 설정 확장하기

실제 서비스에 배포할 앱이라면 TypeScript와 타입 정보를 활용하는 ESLint 규칙을 함께 사용하는 것을 권장합니다. TypeScript와 [`typescript-eslint`](https://typescript-eslint.io)를 프로젝트에 설정하는 방법은 [TypeScript 템플릿](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)을 참고하세요.
