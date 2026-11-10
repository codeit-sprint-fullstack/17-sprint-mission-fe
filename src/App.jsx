// import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BestProducts from "./components/BestProducts";

function App() {
  return (
    <>
      <Header />

      <main>
        <BestProducts />
      </main>

      <Footer />
    </>
  );
}

export default App;
