import { useState } from "react";
import BestProductsSection from "../components/products/BestProductsSection";
import ProductsListSection from "../components/products/ProductsListSection";
import "./ProductsPage.css";

export default function ProductsPage() {
  const [favorites, setFavorites] = useState({});
  function toggleFavorite(id) {
    setFavorites((previous) => ({ ...previous, [id]: !previous[id] }));
  }

  return (
    <main className="sub-page">
      <BestProductsSection favorites={favorites} onFavorite={toggleFavorite} />
      <ProductsListSection favorites={favorites} onFavorite={toggleFavorite} />
    </main>
  );
}
