import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ProductDemo from "./ProductDemo";

function item(category, id = `${category}-01`, demoType) {
  return Object.freeze({ id, category, demoType, name: `${id} 선택 상품`, image: `/space-assets/photoreal/${id}.webp`, generatedPhoto: true, demoImage: "/obsolete-bobbing-image.svg" });
}
let originalMediaDevices;
let getUserMedia;
let speechRecognition;

beforeEach(() => {
  originalMediaDevices = Object.getOwnPropertyDescriptor(navigator, "mediaDevices");
  getUserMedia = vi.fn();
  speechRecognition = vi.fn();
  Object.defineProperty(navigator, "mediaDevices", { configurable: true, value: { getUserMedia } });
  vi.stubGlobal("SpeechRecognition", speechRecognition);
  vi.stubGlobal("webkitSpeechRecognition", speechRecognition);
});
afterEach(() => {
  cleanup();
  if (originalMediaDevices) Object.defineProperty(navigator, "mediaDevices", originalMediaDevices);
  else delete navigator.mediaDevices;
  vi.unstubAllGlobals();
});

describe("ProductDemo functional simulation", () => {
  it.each([
    ["assistant-01", "cooking", "팬 돌리고 요리하기", "pan"],
    ["assistant-02", "cleaning", "바닥 청소하기", "vacuum-wand"],
  ])("%s shows its specific job and moving tool instead of a floating image", (id, demoType, action, part) => {
    const { container } = render(<ProductDemo product={item("assistant", id, demoType)} />);
    expect(screen.getByText("기능 시뮬레이션", { exact: true })).toBeTruthy();
    expect(screen.getByRole("button", { name: action, exact: true }).getAttribute("aria-pressed")).toBe("true");
    expect(container.querySelector(`[data-part="${part}"]`)).not.toBeNull();
    expect(container.querySelector("img")).toBeNull();
    expect(screen.getByRole("status").textContent).toContain(demoType === "cooking" ? "팬으로 뒤집는 중" : "먼지를 흡입하는 중");
  });

  it.each([
    ["assistant", "손 흔들어 인사하기", "팬 돌리고 요리하기"],
    ["robot", "인사받기", "걷고 인사하기"],
  ])("%s can greet and return to its work without changing product", async (category, greeting, action) => {
    const user = userEvent.setup();
    const product = item(category);
    const { container } = render(<ProductDemo product={product} />);
    await user.click(screen.getByRole("button", { name: greeting, exact: true }));
    expect(container.querySelector(".kin-scene").getAttribute("data-action")).toBe("greet");
    expect(screen.getByRole("button", { name: greeting, exact: true }).getAttribute("aria-pressed")).toBe("true");
    await user.click(screen.getByRole("button", { name: action, exact: true }));
    expect(container.querySelector(".kin-scene").getAttribute("data-action")).toBe("work");
    expect(screen.getByRole("region", { name: `${product.name} 기능 시뮬레이션` })).toBeTruthy();
  });

  it("keeps voice mode a simulation and preserves the selected concept image", async () => {
    const user = userEvent.setup();
    const product = item("phone", "phone-05");
    const { container } = render(<ProductDemo product={product} />);
    expect(container.querySelector('[data-part="rolling-screen"]')).not.toBeNull();
    expect(screen.queryByRole("button", { name: "인사받기" })).toBeNull();
    await user.click(screen.getByRole("button", { name: "음성 명령", exact: true }));
    expect(container.querySelector(".kin-scene").getAttribute("data-signal")).toBe("on");
    expect(screen.getByRole("status").textContent).toContain("음성 명령 시뮬레이션");
    expect(getUserMedia).not.toHaveBeenCalled();
    expect(speechRecognition).not.toHaveBeenCalled();

    await user.click(screen.getByRole("button", { name: "상품 이미지", exact: true }));
    expect(screen.getByText("실사형 콘셉트 이미지", { exact: true })).toBeTruthy();
    expect(screen.getByRole("img", { name: `${product.name} 실사형 콘셉트 이미지` }).getAttribute("src")).toBe(product.image);
    expect(container.querySelector(".kin-scene")).toBeNull();
    expect(screen.queryByRole("group", { name: "시연 재생 제어" })).toBeNull();
  });

  it("pauses in place, resumes in place, and restarts only when requested", async () => {
    const user = userEvent.setup();
    const { container } = render(<ProductDemo product={item("drone")} />);
    const scene = container.querySelector(".kin-scene");
    await user.click(screen.getByRole("button", { name: "시연 일시정지" }));
    expect(container.querySelector(".kin-scene")).toBe(scene);
    expect(container.querySelector(".space-demo-stage.is-paused")).not.toBeNull();
    expect(screen.getByRole("status").textContent).toBe("시연 일시정지");
    await user.click(screen.getByRole("button", { name: "시연 재생" }));
    expect(container.querySelector(".kin-scene")).toBe(scene);
    expect(container.querySelector(".space-demo-stage.is-paused")).toBeNull();
    await user.click(screen.getByRole("button", { name: /처음부터/ }));
    expect(container.querySelector(".kin-scene")).not.toBe(scene);
    expect(container.querySelector('[data-part="winch-cable"]')).not.toBeNull();
  });

  it("labels an original reference photo without claiming it is generated concept art", async () => {
    const user = userEvent.setup();
    const product = { ...item("rocket"), generatedPhoto: false, image: "/space-assets/nasa-rocket.webp" };
    render(<ProductDemo product={product} />);
    await user.click(screen.getByRole("button", { name: "상품 이미지", exact: true }));
    expect(screen.getByText("참고 사진", { exact: true })).toBeTruthy();
    expect(screen.queryByText("실사형 콘셉트 이미지", { exact: true })).toBeNull();
    expect(screen.getByRole("img", { name: `${product.name} 참고 사진` }).getAttribute("src")).toBe(product.image);
  });

  it("shows food preparation and storage status without requesting a microphone", async () => {
    const user = userEvent.setup();
    const product = item("food", "food-13", "noodles");
    const { container } = render(<ProductDemo product={product} />);
    expect(screen.getByRole("button", { name: "물 붓고 면 펼치기", exact: true })).toBeTruthy();
    expect(container.querySelector('[data-part="unfolding-noodles"]')).not.toBeNull();
    await user.click(screen.getByRole("button", { name: "보관 상태", exact: true }));
    expect(screen.getByRole("status").textContent).toContain("보관 상태 시뮬레이션");
    expect(screen.queryByRole("button", { name: "음성 명령", exact: true })).toBeNull();
    expect(getUserMedia).not.toHaveBeenCalled();
    expect(speechRecognition).not.toHaveBeenCalled();
    await user.click(screen.getByRole("button", { name: "상품 이미지", exact: true }));
    expect(screen.getByRole("img", { name: `${product.name} 실사형 콘셉트 이미지` }).getAttribute("src")).toBe(product.image);
  });

  it("connects a living product to the smart home without replacing its working parts", async () => {
    const user = userEvent.setup();
    const product = item("living", "living-04", "oven");
    const { container } = render(<ProductDemo product={product} />);
    expect(screen.getByRole("button", { name: "한 접시 준비하기", exact: true })).toBeTruthy();
    await user.click(screen.getByRole("button", { name: "스마트홈 연결", exact: true }));
    expect(container.querySelector(".kin-scene").getAttribute("data-signal")).toBe("on");
    expect(container.querySelector('[data-part="oven-sliding-meal"]')).not.toBeNull();
    expect(container.querySelector('[data-part="oven-door"]')).not.toBeNull();
    expect(getUserMedia).not.toHaveBeenCalled();
    expect(speechRecognition).not.toHaveBeenCalled();
    await user.click(screen.getByRole("button", { name: "시연 일시정지" }));
    expect(container.querySelector(".space-demo-stage.is-paused")).not.toBeNull();
    expect(screen.getByRole("status").textContent).toContain("시연 일시정지");
  });

  it("lets users retry a failed concept image or return to a working simulation", async () => {
    const user = userEvent.setup();
    const product = item("internet");
    const { container } = render(<ProductDemo product={product} />);
    await user.click(screen.getByRole("button", { name: "상품 이미지", exact: true }));
    fireEvent.error(screen.getByRole("img", { name: `${product.name} 실사형 콘셉트 이미지` }));
    expect(screen.getByRole("status").textContent).toContain("이미지를 불러오지 못했어요");
    await user.click(screen.getByRole("button", { name: "다시 불러오기" }));
    expect(screen.getByRole("img", { name: `${product.name} 실사형 콘셉트 이미지` }).getAttribute("src")).toBe(product.image);
    await user.click(screen.getByRole("button", { name: "안테나 정렬하기", exact: true }));
    expect(container.querySelector('[data-part="dish-elevation"]')).not.toBeNull();
    expect(container.querySelector("img")).toBeNull();
  });

  it("starts a different keyed product in its own action mode", async () => {
    const user = userEvent.setup();
    const first = item("assistant", "assistant-03", "organizing");
    const next = item("gear", "gear-10");
    const view = render(<ProductDemo key={first.id} product={first} />);
    await user.click(screen.getByRole("button", { name: "손 흔들어 인사하기", exact: true }));
    await user.click(screen.getByRole("button", { name: "시연 일시정지" }));
    view.rerender(<ProductDemo key={next.id} product={next} />);
    expect(screen.queryByRole("region", { name: `${first.name} 기능 시뮬레이션` })).toBeNull();
    expect(screen.getByRole("region", { name: `${next.name} 기능 시뮬레이션` })).toBeTruthy();
    expect(screen.getByRole("button", { name: "실드 펼치기", exact: true }).getAttribute("aria-pressed")).toBe("true");
    expect(screen.getByRole("button", { name: "시연 일시정지" })).toBeTruthy();
    expect(screen.queryByRole("button", { name: "손 흔들어 인사하기", exact: true })).toBeNull();
    expect(view.container.querySelector('[data-part="shield-panel-1"]')).not.toBeNull();
  });
});
