import { Link, NavLink } from 'react-router';
export default function Header() {
  return <header className="market-header"><div className="header-inner">
    <Link className="market-logo" to="/"><img src="/images/panda_face.png" alt="" />판다마켓</Link>
    <nav className="main-nav" aria-label="주요 메뉴">
      <span className="nav-text">자유게시판</span>
      <NavLink to="/items" className={({isActive})=>isActive?'nav-active':''}>중고마켓</NavLink>
    </nav>
    <span className="login-btn" aria-label="로그인 화면은 이번 미션에서 구현하지 않음">로그인</span>
  </div></header>;
}
