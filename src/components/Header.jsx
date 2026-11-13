// 공통 Header
// - 라우터 대신 a 태그의 href="#id"로 같은 페이지의 섹션으로 이동한다.

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="logo">
          <img src="/images/logo.png" alt="" />
          <span>판다마켓</span>
        </a>

        <nav className="nav">
          <a href="/boards">자유게시판</a>
          <a href="/" aria-current="page">
            중고마켓
          </a>
        </nav>

        <a href="/login/" className="login-button">
          로그인
        </a>
      </div>
    </header>
  );
}
