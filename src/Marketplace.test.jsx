import {
  act,
  cleanup,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { afterEach, describe, expect, it, vi } from "vitest";
import Marketplace from "./Marketplace";

vi.mock("axios", () => ({
  default: {
    get: vi.fn(),
    isCancel: (error) => Boolean(error?.__CANCEL__),
  },
}));

function viewport(initialWidth = 1440) {
  let width = initialWidth;
  const mediaQueries = new Map();
  vi.stubGlobal("matchMedia", (media) => {
    if (!mediaQueries.has(media)) {
      const minimum = Number(media.match(/\d+/)[0]);
      const listeners = new Set();
      mediaQueries.set(media, {
        media,
        get matches() {
          return width >= minimum;
        },
        addEventListener: (_event, listener) => listeners.add(listener),
        removeEventListener: (_event, listener) => listeners.delete(listener),
        listeners,
      });
    }
    return mediaQueries.get(media);
  });
  return (nextWidth) => {
    const previous = new Map(
      [...mediaQueries].map(([media, query]) => [media, query.matches]),
    );
    width = nextWidth;
    mediaQueries.forEach((query, media) => {
      if (previous.get(media) !== query.matches) {
        query.listeners.forEach((listener) =>
          listener({ media, matches: query.matches }),
        );
      }
    });
  };
}

function serveProducts(customResponse) {
  const requestMock = axios.get.mockImplementation(async (_address, { params }) => {
    const query = new URLSearchParams(params);
    const override = customResponse?.(query);
    if (override) return override;
    const page = Number(query.get("page"));
    const pageSize = Number(query.get("pageSize"));
    const totalCount = 23;
    const length = Math.min(
      pageSize,
      Math.max(0, totalCount - (page - 1) * pageSize),
    );
    const list = Array.from({ length }, (_, index) => ({
      id: (page - 1) * pageSize + index + 1,
      name: `${query.get("orderBy")} 상품 ${(page - 1) * pageSize + index + 1}`,
      price: (index + 1) * 1000,
      images: [],
      favoriteCount: 23 - index,
    }));
    return { status: 200, data: { list, totalCount } };
  });
  return requestMock;
}

const queries = (requestMock) =>
  requestMock.mock.calls.map(([, { params }]) =>
    Object.fromEntries(new URLSearchParams(params)),
  );
const bestRegion = () => screen.getByRole("region", { name: "베스트 상품" });
const allRegion = () => screen.getByRole("region", { name: "판매 중인 상품" });
const productCount = (region) =>
  within(region).queryAllByRole("article").length;

afterEach(() => {
  cleanup();
  vi.resetAllMocks();
  vi.unstubAllGlobals();
});

describe("Marketplace integration", () => {
  it("requests independent desktop best and all products, then paginates through the last page", async () => {
    viewport();
    const requestMock = serveProducts();
    const user = userEvent.setup();
    render(<Marketplace />);

    await waitFor(() => expect(productCount(allRegion())).toBe(10));
    expect(productCount(bestRegion())).toBe(4);
    expect(queries(requestMock)).toEqual(
      expect.arrayContaining([
        { page: "1", pageSize: "4", orderBy: "favorite" },
        { page: "1", pageSize: "10", orderBy: "recent" },
      ]),
    );
    expect(screen.getByRole("button", { name: "이전 페이지" }).disabled).toBe(
      true,
    );

    await user.click(
      screen.getByRole("button", { name: "2페이지", exact: true }),
    );
    await waitFor(() =>
      expect(
        screen
          .getByRole("button", { name: "2페이지", exact: true })
          .getAttribute("aria-current"),
      ).toBe("page"),
    );
    expect(queries(requestMock).at(-1)).toEqual({
      page: "2",
      pageSize: "10",
      orderBy: "recent",
    });
    expect(
      within(allRegion()).getByRole("heading", { name: "recent 상품 11" }),
    ).toBeTruthy();
    expect(productCount(bestRegion())).toBe(4);

    await user.click(screen.getByRole("button", { name: "다음 페이지" }));
    await waitFor(() => expect(productCount(allRegion())).toBe(3));
    expect(screen.getByRole("button", { name: "다음 페이지" }).disabled).toBe(
      true,
    );
    expect(screen.getByRole("button", { name: "이전 페이지" }).disabled).toBe(
      false,
    );
    expect(queries(requestMock).at(-1)).toEqual({
      page: "3",
      pageSize: "10",
      orderBy: "recent",
    });
  });

  it("keeps keyboard focus on the same page button while loading and ignores repeated pending navigation", async () => {
    viewport();
    let resolveSecondPage;
    const secondPageResponse = new Promise((resolve) => {
      resolveSecondPage = resolve;
    });
    const requestMock = serveProducts((query) =>
      query.get("pageSize") === "10" && query.get("page") === "2"
        ? secondPageResponse
        : null,
    );
    const user = userEvent.setup();
    render(<Marketplace />);
    const secondPage = await screen.findByRole("button", {
      name: "2페이지",
      exact: true,
    });
    secondPage.focus();
    await user.keyboard("{Enter}");

    expect(queries(requestMock).at(-1)).toEqual({
      page: "2",
      pageSize: "10",
      orderBy: "recent",
    });
    expect(document.activeElement).toBe(secondPage);
    expect(screen.getByRole("button", { name: "2페이지", exact: true })).toBe(
      secondPage,
    );
    expect(secondPage.getAttribute("aria-disabled")).toBe("true");
    expect(
      screen
        .getByRole("navigation", { name: "상품 목록 페이지" })
        .getAttribute("aria-busy"),
    ).toBe("true");

    const pendingRequestCount = requestMock.mock.calls.length;
    await user.keyboard("{Enter}{Enter}");
    await user.tab();
    expect(document.activeElement).toBe(
      screen.getByRole("button", { name: "3페이지", exact: true }),
    );
    await user.keyboard("{Enter}");
    expect(requestMock.mock.calls.length).toBe(pendingRequestCount);
    expect(secondPage.getAttribute("aria-current")).toBe("page");
    await user.tab({ shift: true });
    expect(document.activeElement).toBe(secondPage);

    await act(async () => {
      resolveSecondPage({
        status: 200,
        data: {
          list: [
            { id: 11, name: "두 번째 페이지 상품", price: 12000, images: [] },
          ],
          totalCount: 23,
        },
      });
    });
    expect(
      within(allRegion()).getByRole("heading", { name: "두 번째 페이지 상품" }),
    ).toBeTruthy();
    expect(document.activeElement).toBe(secondPage);
    expect(screen.getByRole("button", { name: "2페이지", exact: true })).toBe(
      secondPage,
    );
    expect(secondPage.getAttribute("aria-disabled")).toBeNull();
    expect(requestMock.mock.calls.length).toBe(pendingRequestCount);
  });

  it("submits a trimmed Korean search and resets pagination on search and sort changes", async () => {
    viewport();
    const requestMock = serveProducts();
    const user = userEvent.setup();
    render(<Marketplace />);
    await user.click(
      await screen.findByRole("button", { name: "2페이지", exact: true }),
    );
    await waitFor(() => expect(queries(requestMock).at(-1).page).toBe("2"));
    const requestCount = requestMock.mock.calls.length;
    await user.type(
      screen.getByRole("searchbox", { name: "검색할 상품" }),
      "  판다 인형  ",
    );
    expect(requestMock.mock.calls.length).toBe(requestCount);
    await user.click(screen.getByRole("button", { name: "상품 검색" }));
    await waitFor(() =>
      expect(queries(requestMock).at(-1)).toEqual({
        page: "1",
        pageSize: "10",
        orderBy: "recent",
        keyword: "판다 인형",
      }),
    );
    expect(
      (
        await screen.findByRole("button", { name: "1페이지", exact: true })
      ).getAttribute("aria-current"),
    ).toBe("page");

    await user.click(
      screen.getByRole("button", { name: "2페이지", exact: true }),
    );
    await waitFor(() =>
      expect(
        screen
          .getByRole("button", { name: "2페이지", exact: true })
          .getAttribute("aria-current"),
      ).toBe("page"),
    );
    await user.selectOptions(
      screen.getByRole("combobox", { name: "상품 정렬" }),
      "favorite",
    );
    await waitFor(() =>
      expect(queries(requestMock).at(-1)).toEqual({
        page: "1",
        pageSize: "10",
        orderBy: "favorite",
        keyword: "판다 인형",
      }),
    );
    expect(
      (
        await screen.findByRole("button", { name: "1페이지", exact: true })
      ).getAttribute("aria-current"),
    ).toBe("page");
    expect(
      queries(requestMock).filter((query) => query.pageSize === "4"),
    ).toEqual([{ page: "1", pageSize: "4", orderBy: "favorite" }]);
  });

  it("changes server page sizes on mobile resize and resets the page while keeping search and sorting", async () => {
    const resize = viewport();
    const requestMock = serveProducts();
    const user = userEvent.setup();
    render(<Marketplace />);
    await screen.findByRole("button", { name: "2페이지", exact: true });
    await user.type(
      screen.getByRole("searchbox", { name: "검색할 상품" }),
      "책{Enter}",
    );
    await user.selectOptions(
      screen.getByRole("combobox", { name: "상품 정렬" }),
      "favorite",
    );
    await user.click(
      await screen.findByRole("button", { name: "2페이지", exact: true }),
    );
    await waitFor(() =>
      expect(
        screen
          .getByRole("button", { name: "2페이지", exact: true })
          .getAttribute("aria-current"),
      ).toBe("page"),
    );

    act(() => resize(375));
    await waitFor(() => {
      expect(productCount(allRegion())).toBe(4);
      expect(productCount(bestRegion())).toBe(1);
    });
    expect(queries(requestMock)).toEqual(
      expect.arrayContaining([
        { page: "1", pageSize: "1", orderBy: "favorite" },
        { page: "1", pageSize: "4", orderBy: "favorite", keyword: "책" },
      ]),
    );
    expect(
      screen
        .getByRole("button", { name: "1페이지", exact: true })
        .getAttribute("aria-current"),
    ).toBe("page");
    expect(screen.getByRole("searchbox", { name: "검색할 상품" }).value).toBe(
      "책",
    );
    expect(screen.getByRole("combobox", { name: "상품 정렬" }).value).toBe(
      "favorite",
    );
  });

  it("keeps best products visible during an empty search and restores all products when cleared", async () => {
    viewport();
    const requestMock = serveProducts((query) =>
      query.get("keyword") === "없는 물건"
        ? {
            status: 200,
            data: { list: [], totalCount: 0 },
          }
        : null,
    );
    const user = userEvent.setup();
    render(<Marketplace />);
    await waitFor(() => expect(productCount(allRegion())).toBe(10));
    await user.type(
      screen.getByRole("searchbox", { name: "검색할 상품" }),
      "없는 물건{Enter}",
    );
    expect(
      await screen.findByText("“없는 물건” 검색 결과가 없어요."),
    ).toBeTruthy();
    expect(productCount(bestRegion())).toBe(4);
    expect(
      screen.queryByRole("navigation", { name: "상품 목록 페이지" }),
    ).toBeNull();

    await user.click(screen.getByRole("button", { name: "전체 상품 보기" }));
    await waitFor(() => expect(productCount(allRegion())).toBe(10));
    expect(screen.getByRole("searchbox", { name: "검색할 상품" }).value).toBe(
      "",
    );
    expect(queries(requestMock).at(-1)).toEqual({
      page: "1",
      pageSize: "10",
      orderBy: "recent",
    });
    expect(
      queries(requestMock).filter((query) => query.pageSize === "4"),
    ).toHaveLength(1);
  });

  it("allows a failed all-products request to be retried without replacing the successful best products", async () => {
    viewport();
    let failAllProducts = true;
    const requestMock = serveProducts((query) =>
      query.get("pageSize") === "10" && failAllProducts
        ? Promise.reject({ response: { status: 503, data: { message: "Unavailable" } } })
        : null,
    );
    const user = userEvent.setup();
    render(<Marketplace />);
    expect(await within(allRegion()).findByRole("alert")).toBeTruthy();
    expect(productCount(bestRegion())).toBe(4);
    expect(
      screen.queryByRole("navigation", { name: "상품 목록 페이지" }),
    ).toBeNull();

    failAllProducts = false;
    await user.click(
      within(allRegion()).getByRole("button", { name: "다시 시도" }),
    );
    await waitFor(() => expect(productCount(allRegion())).toBe(10));
    expect(within(allRegion()).queryByRole("alert")).toBeNull();
    const allRequests = queries(requestMock).filter(
      (query) => query.pageSize === "10",
    );
    expect(allRequests).toEqual([
      { page: "1", pageSize: "10", orderBy: "recent" },
      { page: "1", pageSize: "10", orderBy: "recent" },
    ]);
  });
});
