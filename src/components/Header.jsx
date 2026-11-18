import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import logoMobile from '../assets/logo-mobile.png'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <nav className="header-nav">
          <Link to="/" className="header-logo">
            <picture>
              <source media="(max-width: 743px)" srcSet={logoMobile} />
              <img src={logo} alt="판다마켓" />
            </picture>
          </Link>
          <ul className="header-menu">
            <li>
              <a href="#">자유게시판</a>
            </li>
            <li>
              <NavLink to="/items" end>중고마켓</NavLink>
            </li>
          </ul>
        </nav>
        <button type="button" className="header-login">
          로그인
        </button>
      </div>
    </header>
  )
}

export default Header
