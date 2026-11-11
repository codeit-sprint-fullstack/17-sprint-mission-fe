import { describe, expect, it, vi } from "vitest";
import {
  CART_STORAGE_KEY,
  formatKoreanMoney,
  formatWon,
  getCartSummary,
  normalizeCartIds,
  readCartIds,
  writeCartIds,
} from "./cart";

const products = [
  { id: "jet", name: "전용기", price: 35_000_000_000 },
  { id: "rocket", name: "로켓", price: 480_000_000_000 },
  { id: "satellite", name: "인공위성", price: 800_000_000 },
];

describe("space market cart", () => {
  it("keeps one of each existing listing and discards stale or invalid IDs", () => {
    expect(
      normalizeCartIds(["jet", "jet", "missing", null, "satellite"], products),
    ).toEqual(["jet", "satellite"]);
    expect(normalizeCartIds({ jet: 3 }, products)).toEqual([]);
  });

  it("adds numeric won amounts exactly and preserves the product data", () => {
    const summary = getCartSummary(
      ["jet", "rocket", "satellite", "jet"],
      products,
    );
    expect(summary.total).toBe(515_800_000_000);
    expect(summary.count).toBe(3);
    expect(summary.cartItems.map((item) => item.quantity)).toEqual([1, 1, 1]);
    expect(products[0]).not.toHaveProperty("quantity");
    expect(getCartSummary([], products)).toEqual({
      cartItems: [],
      total: 0,
      count: 0,
    });
  });

  it("does not concatenate string prices or exceed safe integer arithmetic", () => {
    const invalidProducts = [
      ...products,
      { id: "string-price", price: "35000000000" },
      { id: "negative-price", price: -100 },
      { id: "large", price: Number.MAX_SAFE_INTEGER },
    ];
    expect(
      normalizeCartIds(
        ["string-price", "negative-price", "jet"],
        invalidProducts,
      ),
    ).toEqual(["jet"]);
    expect(getCartSummary(["large", "jet"], invalidProducts).total).toBe(
      Number.MAX_SAFE_INTEGER,
    );
  });

  it("formats hundreds of billions and totals beyond a trillion without rounding", () => {
    expect(formatWon(35_000_000_000)).toBe("35,000,000,000원");
    expect(formatKoreanMoney(35_000_000_000)).toBe("350억 원");
    expect(formatKoreanMoney(1_230_000_000_000)).toBe("1조 2,300억 원");
    expect(formatKoreanMoney(123_456_789)).toBe("1억 2,345만 6,789원");
    expect(formatKoreanMoney(5_000_000)).toBe("500만 원");
    expect(formatKoreanMoney(0)).toBe("0원");
  });

  it("restores only valid unique IDs and ignores corrupt saved JSON", () => {
    const storage = {
      getItem: vi.fn(() => '["rocket","rocket","removed"]'),
      setItem: vi.fn(),
    };
    expect(readCartIds(products, storage)).toEqual(["rocket"]);
    expect(storage.getItem).toHaveBeenCalledWith(CART_STORAGE_KEY);
    storage.getItem.mockReturnValue("not JSON");
    expect(readCartIds(products, storage)).toEqual([]);
    storage.getItem.mockReturnValue(null);
    expect(readCartIds(products, storage)).toEqual([]);
  });

  it("persists the local cart and tolerates blocked browser storage", () => {
    const storage = { setItem: vi.fn() };
    expect(writeCartIds(["jet"], storage)).toBe(true);
    expect(storage.setItem).toHaveBeenCalledWith(CART_STORAGE_KEY, '["jet"]');
    const unavailable = {
      getItem() {
        throw new Error("Storage blocked");
      },
      setItem() {
        throw new Error("Storage blocked");
      },
    };
    expect(readCartIds(products, unavailable)).toEqual([]);
    expect(writeCartIds(["jet"], unavailable)).toBe(false);
  });
});
