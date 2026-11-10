// import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BestProducts from "./components/BestProducts";
import ProductList from "./components/ProductList";

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
