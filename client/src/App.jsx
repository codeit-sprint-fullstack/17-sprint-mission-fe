import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Landing from './pages/Landing.jsx'
import Products from './pages/Products.jsx'
import Registration from './pages/Registration.jsx'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/items" element={<Products />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/items/:id" element={<main aria-label="상품 상세" />} />
        <Route path="/boards" element={<main aria-label="자유게시판" />} />
        <Route path="*" element={<main><h1>페이지를 찾을 수 없습니다.</h1></main>} />
      </Routes>
      <Footer />
    </>
  )
}
