import { useCallback, useEffect, useState } from "react";
import { getProducts } from "../api/products";

const EMPTY_PRODUCTS = [];

export function useProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
} = {}) {
  const [retry, setRetry] = useState(0);
  const [result, setResult] = useState(null);
  const requestKey = JSON.stringify([page, pageSize, orderBy, keyword, retry]);
  const refetch = useCallback(() => setRetry((value) => value + 1), []);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    getProducts({ page, pageSize, orderBy, keyword, signal: controller.signal })
      .then(({ list, totalCount }) => {
        if (active) {
          setResult({ requestKey, products: list, totalCount, error: null });
        }
      })
      .catch((error) => {
        if (active && !controller.signal.aborted) {
          setResult({
            requestKey,
            products: EMPTY_PRODUCTS,
            totalCount: 0,
            error:
              error instanceof Error
                ? error
                : new Error("상품을 불러오지 못했어요."),
          });
        }
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, [page, pageSize, orderBy, keyword, retry, requestKey]);

  // A changed query must not briefly display the previous page or search results.
  const current = result?.requestKey === requestKey ? result : null;
  return {
    products: current?.products ?? EMPTY_PRODUCTS,
    totalCount: current?.totalCount ?? 0,
    isLoading: current === null,
    error: current?.error ?? null,
    refetch,
  };
}
