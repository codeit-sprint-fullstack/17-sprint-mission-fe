import { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [keyword, setKeyword] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  const product = useProducts(1, 10, sortBy, keyword);

  return (
    <section>
      <div>
        <h4>판매 중인 상품</h4>
        <div>
          <input
            type="text"
            placeholder="검색할 상품을 입력해주세요."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <a>상품 등록하기</a>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
      </div>
      <div className="product-list">
        {product.map((item) => (
          <ProductCard key={item.id} products={item} />
        ))}
      </div>
    </section>
  );
}
