import { useEffect, useState } from "react";
import axios from "axios";
import api from "../api/api.js";

// useProducts
// - 상품 목록 조회 로직(state 4개 + useEffect)을 hook으로 분리한다.
//   ex) const { products, totalCount, loading, error } = useProducts({ page: 1, pageSize: 10 });
// - AbortController : 조건이 바뀌면 이전 요청을 취소한다.
//   -> 늦게 도착한 이전 응답이 화면을 덮어쓰는 문제 해결 (data1 Fetch3 참고)

export default function useProducts({ page = 1, pageSize = 10, orderBy = "recent", keyword = "" }) {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get("/products", {
          params: { page, pageSize, orderBy, keyword },
          signal: controller.signal,
        });
        setProducts(response.data.list);
        setTotalCount(response.data.totalCount);
      } catch (e) {
        if (axios.isCancel(e)) return; // 취소된 요청은 무시
        setError(e.message);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    fetchProducts();

    // cleanup : 다음 요청 전에 이전 요청 취소
    return () => controller.abort();
  }, [page, pageSize, orderBy, keyword]);

  return { products, totalCount, loading, error };
}
