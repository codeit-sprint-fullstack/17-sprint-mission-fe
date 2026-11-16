import { StrictMode } from "react";
import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useAnimatedAmount } from "./useAnimatedAmount";

const EOK = 100_000_000;
let now;
let frameNumber;
let frames;
let reducedMotion;

beforeEach(() => {
  now = 0;
  frameNumber = 0;
  frames = new Map();
  reducedMotion = false;
  vi.spyOn(performance, "now").mockImplementation(() => now);
  vi.stubGlobal(
    "requestAnimationFrame",
    vi.fn((callback) => {
      const id = ++frameNumber;
      frames.set(id, callback);
      return id;
    }),
  );
  vi.stubGlobal(
    "cancelAnimationFrame",
    vi.fn((id) => frames.delete(id)),
  );
  vi.stubGlobal(
    "matchMedia",
    vi.fn(() => ({
      get matches() {
        return reducedMotion;
      },
    })),
  );
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

function advanceFrameTo(timestamp) {
  now = timestamp;
  const pending = [...frames.values()];
  frames.clear();
  act(() => pending.forEach((callback) => callback(timestamp)));
}

function renderAmount(initialTarget, options = {}) {
  return renderHook(({ target }) => useAnimatedAmount(target), {
    initialProps: { target: initialTarget },
    ...options,
  });
}

describe("animated space cart total", () => {
  it("animates smaller clothing prices without overshooting or rounding away the final amount", () => {
    const { result, rerender } = renderAmount(0);
    rerender({ target: 30_000_000 });
    advanceFrameTo(350);
    expect(result.current).toBeGreaterThan(0);
    expect(result.current).toBeLessThan(30_000_000);
    advanceFrameTo(700);
    expect(result.current).toBe(30_000_000);
    rerender({ target: 230_000_000 });
    advanceFrameTo(1390);
    expect(result.current).toBeLessThanOrEqual(230_000_000);
    advanceFrameTo(1400);
    expect(result.current).toBe(230_000_000);
  });

  it("shows restored totals immediately, then counts in whole 억 with an exact final target", () => {
    const { result, rerender } = renderAmount(350 * EOK, {
      wrapper: StrictMode,
    });
    expect(result.current).toBe(350 * EOK);
    expect(frames.size).toBe(0);

    rerender({ target: 1000 * EOK });
    expect(result.current).toBe(350 * EOK);
    advanceFrameTo(350);
    expect(result.current).toBe(919 * EOK);
    expect(result.current % EOK).toBe(0);
    advanceFrameTo(700);
    expect(result.current).toBe(1000 * EOK);
    expect(frames.size).toBe(0);
  });

  it("continues a rapid second addition from the displayed amount without restarting from zero", () => {
    const { result, rerender } = renderAmount(0);
    rerender({ target: 800 * EOK });
    advanceFrameTo(350);
    expect(result.current).toBe(700 * EOK);

    rerender({ target: 1600 * EOK });
    expect(result.current).toBe(700 * EOK);
    expect(frames.size).toBe(1);
    advanceFrameTo(700);
    expect(result.current).toBe(1488 * EOK);
    advanceFrameTo(1050);
    expect(result.current).toBe(1600 * EOK);
    expect(frames.size).toBe(0);
  });

  it("animates removals downward and reaches zero exactly when the basket is cleared", () => {
    const { result, rerender } = renderAmount(800 * EOK);
    rerender({ target: 0 });
    advanceFrameTo(350);
    expect(result.current).toBe(100 * EOK);
    advanceFrameTo(700);
    expect(result.current).toBe(0);
    expect(frames.size).toBe(0);
  });

  it("cancels the pending frame on unmount and ignores callbacks already captured by the browser", () => {
    const { result, rerender, unmount } = renderAmount(0);
    rerender({ target: 800 * EOK });
    const pendingCallback = [...frames.values()][0];
    unmount();
    expect(cancelAnimationFrame).toHaveBeenCalled();
    expect(frames.size).toBe(0);
    act(() => pendingCallback(700));
    expect(result.current).toBe(0);
    expect(frames.size).toBe(0);
  });

  it("respects reduced motion immediately on the next frame, including a mid-animation preference change", () => {
    reducedMotion = true;
    const { result, rerender } = renderAmount(350 * EOK);
    rerender({ target: 800 * EOK });
    advanceFrameTo(16);
    expect(result.current).toBe(800 * EOK);
    expect(frames.size).toBe(0);

    reducedMotion = false;
    rerender({ target: 1600 * EOK });
    advanceFrameTo(366);
    expect(result.current).toBe(1500 * EOK);
    reducedMotion = true;
    advanceFrameTo(382);
    expect(result.current).toBe(1600 * EOK);
    expect(frames.size).toBe(0);
  });
});
