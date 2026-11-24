import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Registration from "./pages/Registration";
import ProductDetail from "./pages/ProductDetail";
import Placeholder from "./pages/Placeholder";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/*랜딩페이지*/}
          <Route path="/" element={<Home />} />

          {/*중고마켓 페이지*/}
          <Route path="/items" element={<Items />} />

          {/*상품 등록 페이지*/}
          <Route path="/registration" element={<Registration />} />

          {/* 등록 후 이동할 빈 상세 페이지 */}
          <Route path="/items/:id" element={null} />

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
