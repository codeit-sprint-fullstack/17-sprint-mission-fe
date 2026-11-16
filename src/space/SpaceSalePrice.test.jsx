import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import SpaceSalePrice from "./SpaceSalePrice";
import { formatKoreanMoney, formatWon } from "./cart";

afterEach(cleanup);

describe("SpaceSalePrice", () => {
  it("derives the discount from the original and selling prices and keeps both readable", () => {
    const product = { originalPrice: 20_000_000_000_000, price: 15_000_000_000_000 };
    const { container } = render(<SpaceSalePrice product={product} />);
    expect(screen.getByText("25% 할인")).toBeTruthy();
    expect(container.querySelector("del").textContent).toBe(formatKoreanMoney(product.originalPrice));
    expect(container.querySelector("strong").textContent).toContain(formatKoreanMoney(product.price));
    expect(screen.getByText(formatWon(product.price))).toBeTruthy();
    expect(container.querySelector(".space-sale-arrow").getAttribute("aria-hidden")).toBe("true");
  });

  it("uses the same calculation at detail size rather than a hardcoded badge", () => {
    const { container } = render(<SpaceSalePrice product={{ originalPrice: 40_000_000_000_000, price: 24_000_000_000_000 }} detail />);
    expect(screen.getByText("40% 할인")).toBeTruthy();
    expect(container.querySelector(".space-sale-price--detail")).not.toBeNull();
    expect(container.querySelector("strong").textContent).toContain("24조");
  });

  it.each([undefined, 0, 10_000_000_000_000, 15_000_000_000_000, Infinity])("does not invent a sale when the original price is %s", (originalPrice) => {
    const price = 15_000_000_000_000;
    const { container } = render(<SpaceSalePrice product={{ originalPrice, price }} />);
    expect(container.querySelector("del")).toBeNull();
    expect(screen.queryByText(/% 할인/)).toBeNull();
    expect(container.querySelector("strong").textContent).toBe(formatKoreanMoney(price));
  });
});
