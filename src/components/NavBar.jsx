import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="주 메뉴">
        {/* 판다마켓 로고 */}
        <Link to="/" className="brand" aria-label="판다마켓 홈">
          <img src="/images/pandamarket-logo.png" alt="판다마켓" />
        </Link>

        {/* 내비게이션 메뉴 */}
        <div className="nav-links">
          <NavLink
            to="/board"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            자유게시판
          </NavLink>

          <NavLink
            to="/items"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            중고마켓
          </NavLink>
        </div>

        {/* 로그인 버튼 */}
        <Link className="login-button" to="/login">
          로그인
        </Link>
      </nav>
    </header>
  );
}
