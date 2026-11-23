import { useEffect, useState } from "react";
import { getTitleProductList } from "../api/ProductService";

export default function useProducts(query, onPageCorrection) {
  const [result, setResult] = useState({
    query: null,
    list: [],
    totalCount: 0,
    error: "",
  });

  useEffect(() => {
    const controller = new AbortController();
    const { page, pageSize, keyword, orderBy } = query;

    getTitleProductList(page, pageSize, keyword, orderBy, controller.signal)
      .then((data) => {
        if (controller.signal.aborted) return;

        const lastPage = Math.max(1, Math.ceil(data.totalCount / pageSize));
        if (page > lastPage) {
          onPageCorrection(query, lastPage);
          return;
        }

        setResult({ query, ...data, error: "" });
      })
      .catch(() => {
        if (controller.signal.aborted) return;

        setResult({
          query,
          list: [],
          totalCount: 0,
          error: "상품을 불러오지 못했습니다.",
        });
      });

    return () => controller.abort();
  }, [query, onPageCorrection]);

  const loading = result.query !== query;
  return {
    list: result.list,
    totalCount: result.totalCount,
    loading,
    error: loading ? "" : result.error,
  };
}
