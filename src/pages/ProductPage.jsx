import Header from "../components/Header";
import Footer from "../components/Footer";
import BestProducts from "../components/products/BestProducts";
import ProductList from "../components/products/ProductList";
import "../styles/products.css";

export default function ProductPage() {
  return (
    <>
      <Header />

      <main className="main-content">
        <BestProducts />
        <ProductList />
      </main>

      <Footer />
    </>
  );
}
