import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Placeholder from "./pages/Placeholder";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/board" element={<Placeholder title="자유게시판" />} />
          <Route path="/login" element={<Placeholder title="로그인" />} />
          <Route
            path="/privacy"
            element={<Placeholder title="개인정보 처리방침" />}
          />
          <Route path="/faq" element={<Placeholder title="FAQ" />} />
          <Route
            path="*"
            element={<Placeholder title="페이지를 찾을 수 없습니다." />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
