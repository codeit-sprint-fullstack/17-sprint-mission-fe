import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage'
import MarketPage from './pages/MarketPage'
import RegistrationPage from './pages/RegistrationPage'
import ProductDetailPage from './pages/ProductDetailPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<Layout />}>
        <Route path="/items" element={<MarketPage />} />
        <Route path="/items/:id" element={<ProductDetailPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Route>
    </Routes>
  )
}

export default App
