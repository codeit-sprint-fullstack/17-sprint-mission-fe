import axios from "axios";
import { afterEach, describe, expect, it, vi } from "vitest";
import { getProducts } from "./products";

vi.mock("axios", () => ({
  default: {
    get: vi.fn(),
    isCancel: (error) => Boolean(error?.__CANCEL__),
  },
}));

const product = {
  id: 7,
  name: "판다 인형",
  price: 12000,
  images: ["https://example.com/panda.jpg"],
  favoriteCount: 8,
};
const response = (data) => ({ data, status: 200 });

afterEach(() => {
  vi.resetAllMocks();
  vi.unstubAllGlobals();
});

describe("getProducts with Axios", () => {
  it("passes the API address, favorite sorting, pagination, Korean search and cancellation to Axios", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    axios.get.mockResolvedValue(response({ list: [product], totalCount: 18 }));
    const controller = new AbortController();

    const result = await getProducts({
      page: 2,
      pageSize: 6,
      orderBy: "favorite",
      keyword: "  판다 & 인형  ",
      signal: controller.signal,
    });
    expect(axios.get).toHaveBeenCalledWith(
      "https://panda-market-api.vercel.app/products",
      {
        params: {
          page: 2,
          pageSize: 6,
          orderBy: "favorite",
          keyword: "판다 & 인형",
        },
        signal: controller.signal,
      },
    );
    expect(result).toEqual({ list: [product], totalCount: 18 });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("uses recent sorting by default and prevents invalid zero or negative page requests", async () => {
    axios.get.mockResolvedValue(response({ list: [], totalCount: 0 }));
    await getProducts({ page: 0, pageSize: -4 });
    expect(axios.get.mock.calls[0][1].params).toEqual({
      page: 1,
      pageSize: 1,
      orderBy: "recent",
    });
  });

  it("reads an empty search result from response.data without treating it as an error", async () => {
    axios.get.mockResolvedValue(response({ list: [], totalCount: 0 }));
    await expect(getProducts({ keyword: "없는 물건" })).resolves.toEqual({
      list: [],
      totalCount: 0,
    });
  });

  it("reports the HTTP status when Axios rejects an unsuccessful response", async () => {
    const error = new Error("Request failed with status code 500");
    error.response = { status: 500, data: { message: "Internal Server Error" } };
    axios.get.mockRejectedValue(error);
    await expect(getProducts()).rejects.toThrow("500");
  });

  it("gives a useful message when the network request fails without an HTTP response", async () => {
    axios.get.mockRejectedValue(new Error("Network Error"));
    await expect(getProducts()).rejects.toThrow("인터넷 연결");
  });

  it.each([
    null,
    { list: null, totalCount: 3 },
    { list: [], totalCount: -1 },
    { list: [], totalCount: "3" },
    { list: [{ id: 1, price: 500 }], totalCount: 1 },
  ])("rejects malformed response.data: %j", async (data) => {
    axios.get.mockResolvedValue(response(data));
    await expect(getProducts()).rejects.toThrow("형식");
  });

  it("normalizes optional image and favorite fields without depending on ownerNickname", async () => {
    axios.get.mockResolvedValue(
      response({
        list: [{ id: 1, name: "책", price: 500, images: null }],
        totalCount: 1,
      }),
    );
    const result = await getProducts();
    expect(result.list[0]).toMatchObject({ images: [], favoriteCount: 0 });
  });

  it("preserves Axios cancellation so an obsolete request is not reported as a network failure", async () => {
    const error = new Error("canceled");
    error.name = "CanceledError";
    error.code = "ERR_CANCELED";
    error.__CANCEL__ = true;
    axios.get.mockRejectedValue(error);
    await expect(getProducts()).rejects.toBe(error);
  });

  it("preserves an abort error from a canceled signal", async () => {
    const controller = new AbortController();
    controller.abort();
    const error = new DOMException("Aborted", "AbortError");
    axios.get.mockRejectedValue(error);
    await expect(getProducts({ signal: controller.signal })).rejects.toBe(error);
  });

  it("does not send unsupported sort values to Axios", async () => {
    await expect(getProducts({ orderBy: "latest" })).rejects.toThrow("정렬");
    expect(axios.get).not.toHaveBeenCalled();
  });
});
