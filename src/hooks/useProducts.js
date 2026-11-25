import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

export default function useProducts({
  page,
  pageSize,
  keyword = "",
  orderBy = "recent",
}) {
  // 현재 API 요청 조건을 구분하는 값
  const requestKey = JSON.stringify([page, pageSize, keyword, orderBy]);

  // 상품 목록과 오류 상태 관리
  const [state, setState] = useState({
    requestKey: null,
    list: [],
    totalCount: 0,
    error: "",
  });

  useEffect(() => {
    const controller = new AbortController();

    // 상품 목록 API 요청
    getProducts({
      page,
      pageSize,
      keyword,
      orderBy,
      signal: controller.signal,
    })
      .then((data) => {
        if (!controller.signal.aborted) {
          setState({
            requestKey,
            list: data.list,
            totalCount: data.totalCount,
            error: "",
          });
        }
      })
      .catch((err) => {
        if (!controller.signal.aborted) {
          setState({
            requestKey,
            list: [],
            totalCount: 0,
            error: err.message || "상품을 불러오는데 실패했습니다.",
          });
        }
      });

    // 요청 조건 변경 또는 컴포넌트 종료 시 이전 요청 취소
    return () => controller.abort();
  }, [page, pageSize, keyword, orderBy, requestKey]);

  // 현재 요청에 대한 응답이 아직 없으면 로딩 중
  const loading = state.requestKey !== requestKey;

  return {
    list: loading ? [] : state.list,
    totalCount: loading ? 0 : state.totalCount,
    loading,
    error: loading ? "" : state.error,
  };
}
