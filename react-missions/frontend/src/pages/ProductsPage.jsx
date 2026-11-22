import { useState } from "react";
import ProductsListSection from "../components/products/ProductsListSection";

export default function ProductsPage() {
  const [favorites, setFavorites] = useState({});
  function toggleFavorite(id) {
    setFavorites((previous) => ({ ...previous, [id]: !previous[id] }));
  }

  return (
    <main className="sub-page">
      <ProductsListSection favorites={favorites} onFavorite={toggleFavorite} />
    </main>
  );
}
