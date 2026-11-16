export const CART_STORAGE_KEY = "panda-space-cart-v1";

const numberFormat = new Intl.NumberFormat("ko-KR");

function isValidPrice(price) {
  return Number.isSafeInteger(price) && price >= 0;
}

// 저장된 값도 다시 확인해서 중복, 삭제된 매물, 잘못된 금액을 걸러냅니다.
// 매물은 한 점씩만 판매하므로 같은 ID를 두 번 담지 않습니다.
export function normalizeCartIds(value, products) {
  if (!Array.isArray(value)) return [];
  const available = new Map(
    products
      .filter((product) => isValidPrice(product.price))
      .map((product) => [product.id, product]),
  );
  const ids = [];
  const seen = new Set();
  let total = 0;

  for (const id of value) {
    const product = available.get(id);
    if (!product || seen.has(id)) continue;
    const nextTotal = total + product.price;
    if (!Number.isSafeInteger(nextTotal)) continue;
    ids.push(id);
    seen.add(id);
    total = nextTotal;
  }

  return ids;
}

export function getCartSummary(ids, products) {
  const validIds = normalizeCartIds(ids, products);
  const byId = new Map(products.map((product) => [product.id, product]));
  const cartItems = validIds.map((id) => ({ ...byId.get(id), quantity: 1 }));
  return {
    cartItems,
    count: cartItems.length,
    total: cartItems.reduce((sum, product) => sum + product.price, 0),
  };
}

export function readCartIds(products, storage) {
  try {
    const target = storage ?? globalThis.localStorage;
    if (!target) return [];
    const saved = target.getItem(CART_STORAGE_KEY);
    return normalizeCartIds(saved ? JSON.parse(saved) : [], products);
  } catch {
    // 저장소를 사용할 수 없는 환경에서도 장바구니는 화면 안에서 작동합니다.
    return [];
  }
}

export function writeCartIds(ids, storage) {
  try {
    const target = storage ?? globalThis.localStorage;
    if (!target) return false;
    target.setItem(CART_STORAGE_KEY, JSON.stringify(ids));
    return true;
  } catch {
    return false;
  }
}

export function formatWon(amount) {
  return `${numberFormat.format(isValidPrice(amount) ? amount : 0)}원`;
}

export function formatKoreanMoney(amount) {
  if (!isValidPrice(amount) || amount === 0) return "0원";
  let remaining = amount;
  const parts = [];

  for (const [unit, size] of [
    ["조", 1_000_000_000_000],
    ["억", 100_000_000],
    ["만", 10_000],
  ]) {
    const count = Math.floor(remaining / size);
    if (count) parts.push(`${numberFormat.format(count)}${unit}`);
    remaining %= size;
  }

  if (remaining)
    return [...parts, `${numberFormat.format(remaining)}원`].join(" ");
  return `${parts.join(" ")} 원`;
}
