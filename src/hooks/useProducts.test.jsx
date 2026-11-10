import { act, cleanup, renderHook, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useProducts } from "./useProducts";

const product = (id) => ({
  id,
  name: `상품 ${id}`,
  price: id * 1000,
  images: [],
  favoriteCount: 0,
});
const response = (list, totalCount = list.length) => ({
  ok: true,
  status: 200,
  json: async () => ({ list, totalCount }),
});
function deferred() {
  let resolve;
  let reject;
  const promise = new Promise((resolvePromise, rejectPromise) => {
    resolve = resolvePromise;
    reject = rejectPromise;
  });
  return { promise, resolve, reject };
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("useProducts", () => {
  it("loads products and hides a previous page immediately when the page changes", async () => {
    const second = deferred();
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(response([product(1)], 12))
      .mockReturnValueOnce(second.promise);
    vi.stubGlobal("fetch", fetchMock);
    const { result, rerender } = renderHook((props) => useProducts(props), {
      initialProps: { page: 1, pageSize: 4 },
    });
    expect(result.current.isLoading).toBe(true);
    await waitFor(() => expect(result.current.products).toEqual([product(1)]));
    expect(result.current.totalCount).toBe(12);

    rerender({ page: 2, pageSize: 4 });
    expect(result.current.products).toEqual([]);
    expect(result.current.isLoading).toBe(true);
    expect(fetchMock.mock.calls[0][1].signal.aborted).toBe(true);

    await act(async () => second.resolve(response([product(2)], 12)));
    expect(result.current.products).toEqual([product(2)]);
    expect(result.current.isLoading).toBe(false);
  });

  it("keeps the latest search result even when an obsolete request ignores cancellation and resolves late", async () => {
    const oldRequest = deferred();
    const newRequest = deferred();
    const fetchMock = vi
      .fn()
      .mockReturnValueOnce(oldRequest.promise)
      .mockReturnValueOnce(newRequest.promise);
    vi.stubGlobal("fetch", fetchMock);
    const { result, rerender } = renderHook((props) => useProducts(props), {
      initialProps: { keyword: "이전 검색" },
    });
    rerender({ keyword: "새 검색" });

    await act(async () => newRequest.resolve(response([product(2)])));
    await act(async () => oldRequest.resolve(response([product(1)])));
    expect(result.current.products).toEqual([product(2)]);
    expect(result.current.error).toBeNull();
  });

  it("ignores a rejection from an obsolete request", async () => {
    const oldRequest = deferred();
    const fetchMock = vi
      .fn()
      .mockReturnValueOnce(oldRequest.promise)
      .mockResolvedValueOnce(response([product(2)]));
    vi.stubGlobal("fetch", fetchMock);
    const { result, rerender } = renderHook((props) => useProducts(props), {
      initialProps: { orderBy: "recent" },
    });
    rerender({ orderBy: "favorite" });
    await waitFor(() => expect(result.current.products).toEqual([product(2)]));
    await act(async () => oldRequest.reject(new Error("Old network failure")));
    expect(result.current.products).toEqual([product(2)]);
    expect(result.current.error).toBeNull();
  });

  it("exposes failure and retries the same query successfully", async () => {
    const fetchMock = vi
      .fn()
      .mockRejectedValueOnce(new Error("Network disconnected"))
      .mockResolvedValueOnce(response([product(3)]));
    vi.stubGlobal("fetch", fetchMock);
    const { result } = renderHook(() =>
      useProducts({ keyword: "책", pageSize: 6 }),
    );
    await waitFor(() =>
      expect(result.current.error?.message).toBe("Network disconnected"),
    );
    expect(result.current.isLoading).toBe(false);
    act(() => result.current.refetch());
    expect(result.current.error).toBeNull();
    expect(result.current.isLoading).toBe(true);
    await waitFor(() => expect(result.current.products).toEqual([product(3)]));
    expect(fetchMock.mock.calls[0][0]).toBe(fetchMock.mock.calls[1][0]);
  });

  it("finishes loading for an empty search", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(response([])));
    const { result } = renderHook(() => useProducts());
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current).toMatchObject({
      products: [],
      totalCount: 0,
      error: null,
    });
  });

  it("cancels the active request on unmount", () => {
    const pending = deferred();
    const fetchMock = vi.fn().mockReturnValue(pending.promise);
    vi.stubGlobal("fetch", fetchMock);
    const { unmount } = renderHook(() => useProducts());
    const signal = fetchMock.mock.calls[0][1].signal;
    expect(signal.aborted).toBe(false);
    unmount();
    expect(signal.aborted).toBe(true);
  });
});
