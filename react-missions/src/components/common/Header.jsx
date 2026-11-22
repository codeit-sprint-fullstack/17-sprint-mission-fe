import { Link, NavLink } from "react-router";
import "./Header.css";

export default function Header({ showNavigation = true }) {
  return (
    <header className="header">
      <div className="header_inner">
        <div className="header-left">
            <Link to="/" className="logo">
                <img src="/logo.png" alt="판다마켓 로고 이미지" />
            </Link>

            {showNavigation && (
              <nav className="header-nav" aria-label="주 메뉴">
                <NavLink to="/boards" onClick={(event) => event.preventDefault()}>
                  자유게시판
                </NavLink>
                <NavLink to="/items">중고마켓</NavLink>
              </nav>
            )}
        </div>

        <Link to="/login" className="login-but">로그인</Link>
      </div>
    </header>
  );
}
