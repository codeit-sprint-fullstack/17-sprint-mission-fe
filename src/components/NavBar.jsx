import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="주 메뉴">
        <Link to="/" className="brand" aria-label="판다마켓 홈">
          <img src="/images/pandamarket-logo.png" alt="판다마켓" />
        </Link>
        <div className="nav-links">
          <Link to="/board">자유게시판</Link>
          <Link to="/">중고마켓</Link>
        </div>
        <Link className="login-button" to="/login">
          로그인
        </Link>
      </nav>
    </header>
  );
}
