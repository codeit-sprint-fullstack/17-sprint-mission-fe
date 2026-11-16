import "../css/layout.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header_inner">
        <div className="header-left">
            <a href="/" className="logo">
                <img src="/logo.png" alt="판다마켓 로고 이미지" />
            </a>

            <nav className="header-nav">
                <a href="/">자유게시판</a>
                <a href="/">중고마켓</a>
            </nav>
        </div>

        <a href="/login" className="login-but">로그인</a>
      </div>
    </header>
  );
}