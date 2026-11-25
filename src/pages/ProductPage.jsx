import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/products/ProductList";
import "../styles/products.css";

export default function ProductPage() {
  return (
    <>
      <Header />

      <main className="main-content">
        <ProductList />
      </main>

      <Footer />
    </>
  );
}
