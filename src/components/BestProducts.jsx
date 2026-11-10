// import testData from "./testData";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import getProduct from "../api/productApi";

export default function BestProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // useEffect의 콜백함수는 프로미스를 반환하면 안됨
    // 그래서 awiat이나 .then으로 비동기 작업을 완료 한 뒤에 결과값을 받아서 사용
    getProduct().then((data) => {
      setProducts(data.list);
    });
  }, []);

  const sortedBest = [...products]
    .sort((a, b) => b.favoriteCount - a.favoriteCount)
    .slice(0, 4);

  return (
    <section>
      <h3>베스트 상품</h3>
      <div className="best-product">
        {sortedBest.map((item) => (
          <ProductCard key={item.id} products={item} />
        ))}
      </div>
    </section>
  );
}
