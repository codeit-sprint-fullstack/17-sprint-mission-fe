import "../styles/header.css";

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <a href="/" className="main-logo">
          <img src="/images/panda_logo.svg" alt="판다마켓" />
          <p className="main-title">판다마켓</p>
        </a>

        {/* 추후 라우터 배우고 나서 페이지간 이동 연결하기 */}
        <a href="../login.html" className="header-login link-button">
          로그인
        </a>
      </div>
    </header>
  );
}
