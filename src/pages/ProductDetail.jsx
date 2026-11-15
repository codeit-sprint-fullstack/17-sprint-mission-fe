import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../services/productService";

export default function ProductDetail() {
  const { id } = useParams();

  // 상품 상세 데이터 관리
  const [state, setState] = useState({
    requestId: null,
    product: null,
    error: "",
  });

  useEffect(() => {
    const controller = new AbortController();

    // 상품 상세 정보 API 요청
    getProduct(id, controller.signal)
      .then((product) => {
        if (!controller.signal.aborted) {
          setState({
            requestId: id,
            product,
            error: "",
          });
        }
      })
      .catch((err) => {
        if (!controller.signal.aborted) {
          setState({
            requestId: id,
            product: null,
            error: err.message || "상품을 불러오는데 실패했습니다.",
          });
        }
      });

    // 이전 요청 취소
    return () => controller.abort();
  }, [id]);

  // 현재 상품 ID에 해당하는 응답이 없으면 로딩 중
  const loading = state.requestId !== id;

  // 현재 상품에 해당하는 데이터만 사용
  const product = loading ? null : state.product;
  const error = loading ? "" : state.error;

  return (
    <main className="page detail">
      <Link to="/">← 상품 목록으로</Link>

      {loading ? (
        <p>불러오는 중...</p>
      ) : error ? (
        <p>상품 조회 오류: {error}</p>
      ) : (
        <>
          <h1>{product?.name}</h1>

          {product?.images?.[0] && (
            <img
              className="detail-image"
              src={product.images[0]}
              alt={product.name}
            />
          )}

          <p>{Number(product?.price || 0).toLocaleString()}원</p>

          <p>{product?.description}</p>
        </>
      )}
    </main>
  );
}
