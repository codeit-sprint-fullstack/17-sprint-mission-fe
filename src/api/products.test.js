import { afterEach, describe, expect, it, vi } from "vitest";
import { getProducts } from "./products";

const product = {
  id: 7,
  name: "판다 인형",
  price: 12000,
  images: ["https://example.com/panda.jpg"],
  favoriteCount: 8,
};
const response = (data, status = 200) => ({
  ok: status >= 200 && status < 300,
  status,
  json: async () => data,
});

afterEach(() => vi.unstubAllGlobals());

describe("getProducts", () => {
  it("uses the required API and passes favorite sorting, pagination, Korean search and cancellation", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(response({ list: [product], totalCount: 18 }));
    vi.stubGlobal("fetch", fetchMock);
    const controller = new AbortController();

    const result = await getProducts({
      page: 2,
      pageSize: 6,
      orderBy: "favorite",
      keyword: "  판다 & 인형  ",
      signal: controller.signal,
    });
    const [address, options] = fetchMock.mock.calls[0];
    const url = new URL(address);
    expect(url.origin + url.pathname).toBe(
      "https://panda-market-api.vercel.app/products",
    );
    expect(Object.fromEntries(url.searchParams)).toEqual({
      page: "2",
      pageSize: "6",
      orderBy: "favorite",
      keyword: "판다 & 인형",
    });
    expect(options.signal).toBe(controller.signal);
    expect(result).toEqual({ list: [product], totalCount: 18 });
  });

  it("uses recent sorting by default and prevents invalid zero or negative page requests", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(response({ list: [], totalCount: 0 }));
    vi.stubGlobal("fetch", fetchMock);
    await getProducts({ page: 0, pageSize: -4 });
    const url = new URL(fetchMock.mock.calls[0][0]);
    expect(Object.fromEntries(url.searchParams)).toEqual({
      page: "1",
      pageSize: "1",
      orderBy: "recent",
    });
  });

  it("treats a successful empty search as an empty result, not an error", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(response({ list: [], totalCount: 0 })),
    );
    await expect(getProducts({ keyword: "없는 물건" })).resolves.toEqual({
      list: [],
      totalCount: 0,
    });
  });

  it("reports an HTTP failure instead of returning its error body as products", async () => {
    vi.stubGlobal(
      "fetch",
      vi
        .fn()
        .mockResolvedValue(response({ message: "Internal Server Error" }, 500)),
    );
    await expect(getProducts()).rejects.toThrow("500");
  });

  it.each([
    null,
    { list: null, totalCount: 3 },
    { list: [], totalCount: -1 },
    { list: [], totalCount: "3" },
    { list: [{ id: 1, price: 500 }], totalCount: 1 },
  ])(
    "rejects malformed data rather than breaking the card view: %j",
    async (data) => {
      vi.stubGlobal("fetch", vi.fn().mockResolvedValue(response(data)));
      await expect(getProducts()).rejects.toThrow("형식");
    },
  );

  it("normalizes optional image and favorite fields without depending on ownerNickname", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        response({
          list: [{ id: 1, name: "책", price: 500, images: null }],
          totalCount: 1,
        }),
      ),
    );
    const result = await getProducts();
    expect(result.list[0]).toMatchObject({ images: [], favoriteCount: 0 });
  });

  it("preserves network rejection and abort errors for the caller", async () => {
    const error = new DOMException("Aborted", "AbortError");
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(error));
    await expect(getProducts()).rejects.toBe(error);
  });

  it("does not send unsupported sort values to the server", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    await expect(getProducts({ orderBy: "latest" })).rejects.toThrow("정렬");
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
