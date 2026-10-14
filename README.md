# 판다마켓

판다마켓 스프린트 미션의 정적 프론트엔드 프로젝트입니다.

## 주요 화면

- 메인 페이지: `index.html`
- 로그인 페이지: `login.html`
- 회원가입 페이지: `signup.html`
- 상품, FAQ, 개인정보 페이지: `item.html`, `faq.html`, `privacy.html`

## 실행 방법

프로젝트 루트에서 아래 명령을 실행한 다음 브라우저에서 `http://localhost:8000`을 엽니다.

```sh
python3 -m http.server 8000
```

## 배포

Netlify에서 이 저장소를 연결하고 publish directory를 저장소 루트(`/`)로 지정합니다. `_redirects`에서 `/login`과 `/signup` 경로를 각각 정적 HTML 페이지로 연결합니다.

Google Analytics 4 방문자 측정은 측정 ID가 준비되면 연결할 수 있습니다. 측정 ID는 `G-`로 시작하는 값을 사용합니다.
