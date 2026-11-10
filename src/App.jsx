// import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BestProducts from "./components/BestProducts";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <Header />

      <main>
        <BestProducts />
        <ProductList />
      </main>

      <Footer />
    </>
  );
}

export default App;
