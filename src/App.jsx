import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Market2 from "./Market2.jsx";
import Landing from "./Landing.jsx";
import Registration from "./Registration.jsx";

function ProductDetail() {
  return <section aria-label="상품 상세" />;
}

export default function App() {
  const path = window.location.pathname;
  const isProductDetail = /^\/items\/[^/]+\/?$/.test(path);

  return (
    <>
      <Header />
      <main className="container">
        {path === "/" && <Landing />}
        {path === "/items" && <Market2 />}
        {path === "/registration" && <Registration />}
        {isProductDetail && <ProductDetail />}
      </main>
      <Footer />
    </>
  );
}
