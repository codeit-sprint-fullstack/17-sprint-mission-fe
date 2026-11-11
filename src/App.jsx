// import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BestProducts from "./components/products/BestProducts";
import ProductList from "./components/products/ProductList";
import "./styles/products.css";

function App() {
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

export default App;
