function Header() {
  return (
    <header className="gnb">
      <div className="container gnb__inner">
        <div className="gnb__left">
          <a href="/" className="gnb__logo">
            <img
              className="gnb__logo-img"
              src="/images/logo/panda-market-text.png"
              alt="판다마켓 홈"
            />
          </a>
          <nav className="gnb__menu">
            <a href="/community" className="gnb__menu-link">
              자유게시판
            </a>
            <a href="/" className="gnb__menu-link gnb__menu-link--active">
              중고마켓
            </a>
          </nav>
        </div>
        <a href="/login" className="gnb__login">
          로그인
        </a>
      </div>
    </header>
  );
}

export default Header;
