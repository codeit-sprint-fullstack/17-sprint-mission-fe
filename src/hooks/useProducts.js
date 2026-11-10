import { useState, useEffect } from "react";
import getProduct from "../api/productApi";

export default function useProducts(page, pageSize, orderBy, keyword) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // useEffect의 콜백함수는 프로미스를 반환하면 안됨
    // 그래서 awiat이나 .then으로 비동기 작업을 완료 한 뒤에 결과값을 받아서 사용
    getProduct(page, pageSize, orderBy, keyword).then((data) => {
      setProducts(data.list);
    });
  }, [page, pageSize, orderBy, keyword]);

  return products;
}
