import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Products from "./pages/Products.jsx";
import "./css/reset.css";

export default function App() {
  return (
    <div className="wrap">
      <Header />
      <Products />
      <Footer />
    </div>
  );
}