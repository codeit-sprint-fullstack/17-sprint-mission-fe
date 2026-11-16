import logo from "../../images/logo/panda-market-logo.png";

export default function Header({ currentPage = "market" }) {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        본문 바로가기
      </a>
      <div className="site-header__inner">
        <a className="site-logo" href="/" aria-label="판다마켓 홈">
          <img src={logo} alt="판다마켓" width="153" />
        </a>
        <nav className="site-nav" aria-label="주요 메뉴">
          <span
            className="site-nav__unavailable"
            aria-disabled="true"
            title="준비 중입니다"
          >
            자유게시판
          </span>
          <a
            href="/"
            aria-current={currentPage === "market" ? "page" : undefined}
          >
            중고마켓
          </a>
        </nav>
        <a className="button site-login" href="/login.html">
          로그인
        </a>
      </div>
    </header>
  );
}
