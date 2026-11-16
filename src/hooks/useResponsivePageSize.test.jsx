import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useResponsivePageSize } from "./useResponsivePageSize";

function mockViewport(initialWidth) {
  let width = initialWidth;
  const queries = new Map();
  vi.stubGlobal(
    "matchMedia",
    vi.fn((media) => {
      if (!queries.has(media)) {
        const minimum = Number(media.match(/\d+/)[0]);
        const listeners = new Set();
        queries.set(media, {
          media,
          get matches() {
            return width >= minimum;
          },
          addEventListener: (_event, listener) => listeners.add(listener),
          removeEventListener: (_event, listener) => listeners.delete(listener),
          listeners,
        });
      }
      return queries.get(media);
    }),
  );
  return {
    setWidth(nextWidth) {
      const previous = new Map(
        [...queries].map(([media, query]) => [media, query.matches]),
      );
      width = nextWidth;
      for (const [media, query] of queries) {
        if (query.matches !== previous.get(media)) {
          query.listeners.forEach((listener) =>
            listener({ matches: query.matches, media }),
          );
        }
      }
    },
    listenerCount: () =>
      [...queries.values()].reduce(
        (sum, query) => sum + query.listeners.size,
        0,
      ),
  };
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("useResponsivePageSize", () => {
  it.each([
    [375, "mobile", 4, 1, 2],
    [743, "mobile", 4, 1, 2],
    [744, "tablet", 6, 2, 3],
    [1199, "tablet", 6, 2, 3],
    [1200, "desktop", 10, 4, 5],
    [1920, "desktop", 10, 4, 5],
  ])(
    "uses matching API page sizes at width %i",
    (width, size, pageSize, bestPageSize, columns) => {
      mockViewport(width);
      const { result } = renderHook(() => useResponsivePageSize());
      expect(result.current).toEqual({ size, pageSize, bestPageSize, columns });
    },
  );

  it("updates at breakpoints in both directions and removes listeners on unmount", () => {
    const viewport = mockViewport(375);
    const { result, unmount } = renderHook(() => useResponsivePageSize());
    expect(viewport.listenerCount()).toBe(2);
    act(() => viewport.setWidth(744));
    expect(result.current.pageSize).toBe(6);
    act(() => viewport.setWidth(1200));
    expect(result.current.pageSize).toBe(10);
    act(() => viewport.setWidth(743));
    expect(result.current.pageSize).toBe(4);
    unmount();
    expect(viewport.listenerCount()).toBe(0);
  });
});
