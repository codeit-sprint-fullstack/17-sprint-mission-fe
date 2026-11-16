import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import ProductCard from "./ProductCard";

afterEach(cleanup);

const cohortProduct = Object.freeze({
  id: 900,
  name: "스프린트 프론트엔드 21기 화이팅",
  price: 21,
  images: Object.freeze(["https://example.com/cohort.jpg"]),
  favoriteCount: 259,
});

describe("ProductCard display override", () => {
  it("shows only the exact cohort product as 17기 and 170억 원 without mutating API data", () => {
    render(<ProductCard product={cohortProduct} />);

    const heading = screen.getByRole("heading", {
      name: "스프린트 프론트엔드 17기 화이팅",
    });
    expect(heading.title).toBe("스프린트 프론트엔드 17기 화이팅");
    expect(screen.getByText("17,000,000,000원")).toBeTruthy();
    expect(
      screen.getByRole("img", {
        name: "스프린트 프론트엔드 17기 화이팅, 돈다발을 든 판다",
      }).getAttribute("src"),
    ).toBe("/market-assets/panda-cohort17-cash.png");
    expect(cohortProduct.name).toBe("스프린트 프론트엔드 21기 화이팅");
    expect(cohortProduct.price).toBe(21);
    expect(cohortProduct.images).toEqual(["https://example.com/cohort.jpg"]);
  });

  it.each([
    { ...cohortProduct, id: 901 },
    { ...cohortProduct, name: "다른 상품" },
    { ...cohortProduct, id: 8, name: "일반 중고 상품", price: 12000 },
  ])("keeps unrelated products unchanged: $id / $name", (product) => {
    render(<ProductCard product={product} />);
    expect(screen.getByRole("heading", { name: product.name }).title).toBe(
      product.name,
    );
    expect(screen.getByText(`${product.price.toLocaleString("ko-KR")}원`)).toBeTruthy();
    expect(screen.queryByText("17,000,000,000원")).toBeNull();
    expect(screen.getByRole("img", { name: product.name }).getAttribute("src")).toBe(
      product.images[0],
    );
  });

  it("shows the existing image failure fallback if the local panda thumbnail cannot load", () => {
    render(<ProductCard product={{ ...cohortProduct, images: [] }} />);
    const image = screen.getByRole("img", {
      name: "스프린트 프론트엔드 17기 화이팅, 돈다발을 든 판다",
    });
    expect(image.getAttribute("src")).toBe("/market-assets/panda-cohort17-cash.png");
    fireEvent.error(image);
    expect(
      screen.getByRole("img", {
        name: "스프린트 프론트엔드 17기 화이팅, 사진을 불러오지 못했어요",
      }),
    ).toBeTruthy();
  });
});
