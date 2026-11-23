import { Link, useLocation } from 'react-router-dom'

const siteBase = import.meta.env.BASE_URL

export default function Header() {
  const { pathname } = useLocation()
  const isLanding = pathname === '/'
  const isMarket = pathname.replace(/\/$/, '') === '/items'

  return (
    <header>
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="판다마켓 홈">
          <img className="logo" src={`${siteBase}brand/logo.png`} alt="" />
        </Link>
        {!isLanding && (
          <nav aria-label="주 메뉴">
            <Link to="/boards">자유게시판</Link>
            <Link to="/items" aria-current={isMarket ? 'page' : undefined}>중고마켓</Link>
          </nav>
        )}
        <a className="primary login" href={`${siteBase}login/index.html`}>로그인</a>
      </div>
    </header>
  )
}
