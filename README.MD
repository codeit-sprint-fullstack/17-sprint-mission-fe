# 🐼 판다마켓

중고 물품을 사고팔 수 있는 **판다마켓**의 프론트엔드 페이지입니다.

## 페이지

| 경로                         | 설명            |
| ---------------------------- | --------------- |
| `/`                          | 랜딩 페이지     |
| `/login`                     | 로그인 페이지   |
| `/signup`                    | 회원가입 페이지 |
| `/items`, `/privacy`, `/faq` | 빈 페이지       |

## 폴더 구조

```
panda-market/
├── index.html          # 랜딩 페이지
├── login/index.html    # 로그인
├── signup/index.html   # 회원가입
├── css/
│   ├── reset.css       # 브라우저 기본 스타일 초기화
│   ├── variables.css   # 색상 palette CSS 변수
│   ├── style.css       # 랜딩 페이지 스타일
│   └── auth.css        # 로그인·회원가입 공통 스타일
└── images/
```

## 사용 기술

- HTML5
- CSS3
- Netlify 배포
- Google Analytics

## 구현 포인트

- **rem 단위**: 모든 크기를 `rem`으로 작성해서 브라우저 글꼴 크기 설정에 따라 페이지 전체가 함께 커지고 작아집니다.
- **CSS 변수**: 디자인 palette 색상을 `variables.css`에 모아 `var(--primary-100)`처럼 사용합니다.
- **focus 스타일**: 입력창에 커서가 들어가면 `#3692FF` 테두리가 생기고, 빠져나오면 테두리가 사라집니다.

## 실행 방법

`/login`처럼 `/`로 시작하는 경로를 쓰기 때문에 파일을 더블클릭하면 링크가 동작하지 않습니다.
VS Code의 **Live Server**로 `panda-market` 폴더를 열어서 확인해 주시길 바랍니다.
