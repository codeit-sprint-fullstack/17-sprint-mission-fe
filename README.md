# 🐼 판다마켓 (Panda Market)

코드잇 풀스택 부트캠프 17기 스프린트 미션으로 만드는 중고거래 플랫폼 **판다마켓** 프로젝트입니다.

## 📄 페이지 구성

| 경로 | 페이지 |
| --- | --- |
| `/` | 랜딩 페이지 |
| `/login` | 로그인 |
| `/signup` | 회원가입 |
| `/items` | 상품 구경하기 |
| `/faq` | FAQ ||
| `/privacy` | 개인정보처리방침 |

## ✨ 주요 기능

### 랜딩 페이지
- 히어로 섹션, 서비스 소개(Hot item / Search / Register), 하단 배너, 푸터로 구성
- 반응형 레이아웃 (`1500px`, `1200px`, `1024px`, `767px` 기준)
- 모바일 화면에서는 텍스트형 로고로 교체

### 로그인 · 회원가입
- 필수 입력값을 모두 채워야 제출 버튼 활성화
- 이메일·비밀번호 입력 시 공백 자동 제거
- 비밀번호 보기/숨기기 토글 버튼 UI
- 간편 로그인(구글, 카카오) 링크

## 🛠 기술 스택

- **HTML5** – 시맨틱 마크업, 접근성 속성(`aria-*`, `label`) 적용
- **CSS3** – CSS 변수 기반 디자인 토큰(색상, 폰트), 미디어 쿼리 반응형
- **JavaScript (Vanilla)** – 폼 상태 관리, 입력값 처리

## 📁 폴더 구조

```
17-Sprint-Mission
├── index.html            # 랜딩 페이지
├── login/index.html      # 로그인
├── signup/index.html     # 회원가입
├── items/index.html      # 상품 목록
├── faq/index.html        # FAQ
├── privacy/index.html    # 개인정보처리방침
└── assets
    ├── css
    │   ├── reset.css     # 브라우저 기본 스타일 초기화
    │   ├── variables.css # 색상·폰트 등 디자인 토큰
    │   ├── common.css    # 공통 스타일 (폰트, 버튼, 레이아웃, 유틸 클래스)
    │   ├── style.css     # 랜딩 페이지 스타일
    │   └── auth.css      # 로그인·회원가입 페이지 스타일
    ├── js
    │   ├── script.js     # 공통 스크립트
    │   └── auth.js       # 로그인·회원가입 폼 로직
    ├── fonts             # 웹폰트
    └── images            # 이미지
```
