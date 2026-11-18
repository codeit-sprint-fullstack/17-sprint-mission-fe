import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Landing from './Landing.jsx'
import Market from './Market.jsx'
import Registration from './Registration.jsx'

const socialLinks = [
  ['facebook', 'https://www.facebook.com/'],
  ['twitter', 'https://twitter.com/'],
  ['youtube', 'https://www.youtube.com/'],
  ['instagram', 'https://www.instagram.com/'],
]

function Header() {
  const { pathname } = useLocation()
  const isMarket = pathname.replace(/\/$/, '') === '/items'

  return (
    <header>
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="판다마켓 홈">
          <img className="logo" src="/brand/logo.png" alt="" />
        </Link>
        <nav aria-label="주 메뉴">
          <Link to="/boards">자유게시판</Link>
          <Link to="/items" aria-current={isMarket ? 'page' : undefined}>중고마켓</Link>
        </nav>
        <a className="primary login" href="/login/index.html">로그인</a>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <span>©codeit - 2024</span>
        <div className="footer-links">
          <a href="/privacy/index.html">Privacy Policy</a>
          <a href="/faq/index.html">FAQ</a>
        </div>
        <div className="social">
          {socialLinks.map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noreferrer">
              <img src={`/brand/ic_${name}.png`} alt={name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/items" element={<Market />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/items/:id" element={<main aria-label="상품 상세" />} />
        <Route path="/boards" element={<main aria-label="자유게시판" />} />
        <Route path="*" element={<main><h1>페이지를 찾을 수 없습니다.</h1></main>} />
      </Routes>
      <Footer />
    </>
  )
}
