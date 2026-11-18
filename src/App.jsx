import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductRegistrationPage from "./pages/ProductRegistrationPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<ProductPage />} />
        <Route path="/item/:id" element={<ProductDetailPage />} />
        <Route path="/registration" element={<ProductRegistrationPage />} />
      </Routes>
    </>
  );
}

export default App;
