import { useCallback, useEffect, useMemo, useState } from "react";
import {
  getCartSummary,
  normalizeCartIds,
  readCartIds,
  writeCartIds,
} from "./cart";

export function useSpaceCart(products) {
  const [storedIds, setStoredIds] = useState(() => readCartIds(products));
  const ids = useMemo(
    () => normalizeCartIds(storedIds, products),
    [storedIds, products],
  );
  const summary = useMemo(() => getCartSummary(ids, products), [ids, products]);

  // 과제 API에는 보내지 않고 이 브라우저의 장바구니에만 저장합니다.
  useEffect(() => {
    writeCartIds(ids);
  }, [ids]);

  const addItem = useCallback(
    (id) => {
      setStoredIds((current) => normalizeCartIds([...current, id], products));
    },
    [products],
  );
  const removeItem = useCallback((id) => {
    setStoredIds((current) => current.filter((itemId) => itemId !== id));
  }, []);
  const clearCart = useCallback(() => setStoredIds([]), []);
  const hasItem = useCallback((id) => ids.includes(id), [ids]);

  return { ...summary, addItem, removeItem, clearCart, hasItem };
}
