import { useEffect, useState } from "react";
import { getProductList } from "../../api/ProductService";
import BestProductList from "./BestProductList";

export default function BestProductsSection({ favorites, onFavorite }) {
  const [best, setBest] = useState({ list: [], loading: true, error: "" });

  useEffect(() => {
    const controller = new AbortController();
    getProductList(1, 4, "", "favorite", controller.signal)
      .then((data) => {
        if (!controller.signal.aborted)
          setBest({ list: data.list, loading: false, error: "" });
      })
      .catch(() => {
        if (!controller.signal.aborted)
          setBest({
            list: [],
            loading: false,
            error: "베스트 상품을 불러오지 못했습니다.",
          });
      });
    return () => controller.abort();
  }, []);

  return (
    <section className="products-section" aria-busy={best.loading}>
      <div className="products-header">
        <h2 className="products-title">베스트 상품</h2>
      </div>
      <BestProductList
        loading={best.loading}
        error={best.error}
        list={best.list}
        favorites={favorites}
        onFavorite={onFavorite}
      />
    </section>
  );
}
