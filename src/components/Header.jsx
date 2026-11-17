import { Link, NavLink, useLocation } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();
  const isLanding = pathname === '/';

  const getMarketLinkClass = ({ isActive }) =>
    isActive || pathname === '/registration'
      ? 'gnb__menu-link gnb__menu-link--active'
      : 'gnb__menu-link';

  return (
    <header className="gnb">
      <div className="container gnb__inner">
        <div className="gnb__left">
          <Link to="/" className="gnb__logo">
            <img
              className="gnb__logo-img"
              src="/images/logo/panda-market-text.png"
              alt="판다마켓 홈"
            />
          </Link>
          {!isLanding && (
            <nav className="gnb__menu">
              <NavLink to="/community" className="gnb__menu-link">
                자유게시판
              </NavLink>
              <NavLink to="/items" className={getMarketLinkClass}>
                중고마켓
              </NavLink>
            </nav>
          )}
        </div>
        <Link to="/login" className="gnb__login">
          로그인
        </Link>
      </div>
    </header>
  );
}

export default Header;
