import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout.jsx';
import LandingPage from './pages/LandingPage.jsx';
import MarketPage from './pages/MarketPage.jsx';
import RegistrationPage from './pages/RegistrationPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/items" element={<MarketPage />} />
          <Route path="/items/:productId" element={<ProductDetailPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
