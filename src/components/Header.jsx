import "../styles/header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <div className="header-left">
          <a href="/" className="main-logo">
            <img src="/images/panda_logo.svg" alt="판다마켓" />
            <p className="main-title">판다마켓</p>
          </a>

          {/* 추후 자유게시판 생성하고 연결할 예정 */}
          <NavLink to="/" className={"post-nav"}>
            자유게시판
          </NavLink>

          <NavLink to="/items" className={"market-nav"}>
            중고마켓
          </NavLink>
        </div>

        {/* 추후 로그인 페이지 만들면 연결하기 */}
        <a href="../login.html" className="header-login link-button">
          로그인
        </a>
      </div>
    </header>
  );
}
