import { StrictMode } from "react";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import SpaceMarket from "./SpaceMarket";
import { SPACE_PRODUCTS } from "./products";
import { isSpaceSoundEnabled, playAirlockSound, stopSpaceAudio } from "./sounds";
import { CART_STORAGE_KEY, formatKoreanMoney, formatWon } from "./cart";

vi.mock("./sounds", () => ({
  SOUND_STORAGE_KEY: "panda-space-sound-v1",
  stopSpaceAudio: vi.fn(),
  isSpaceSoundEnabled: vi.fn(() => false),
  playAirlockSound: vi.fn(),
}));

const dialogPrototype = HTMLDialogElement.prototype;
const originalShowModal = Object.getOwnPropertyDescriptor(
  dialogPrototype,
  "showModal",
);
const originalClose = Object.getOwnPropertyDescriptor(dialogPrototype, "close");

beforeAll(() => {
  // jsdom에는 브라우저의 모달 열기/닫기가 없으므로 open 상태만 재현합니다.
  Object.defineProperty(dialogPrototype, "showModal", {
    configurable: true,
    value() {
      this.setAttribute("open", "");
    },
  });
  Object.defineProperty(dialogPrototype, "close", {
    configurable: true,
    value() {
      this.removeAttribute("open");
    },
  });
});

afterAll(() => {
  if (originalShowModal)
    Object.defineProperty(dialogPrototype, "showModal", originalShowModal);
  else delete dialogPrototype.showModal;
  if (originalClose)
    Object.defineProperty(dialogPrototype, "close", originalClose);
  else delete dialogPrototype.close;
});

beforeEach(() => {
  vi.mocked(isSpaceSoundEnabled).mockReturnValue(false);
  vi.mocked(playAirlockSound).mockReset().mockReturnValue(true);
  localStorage.clear();
  sessionStorage.clear();
  sessionStorage.setItem("panda-space-arrival", "1");
});

afterEach(() => {
  cleanup();
  localStorage.clear();
  sessionStorage.clear();
  vi.clearAllMocks();
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

function listedNames() {
  return screen
    .getAllByRole("article")
    .map(
      (article) =>
        within(article).getByRole("heading", { level: 3 }).textContent,
    );
}

function addButton(product) {
  const card = screen.getByRole("heading", {
    level: 3,
    name: product.name,
    exact: true,
  }).closest("article");
  return within(card).getByRole("button", {
    name: `${product.name} 장바구니에 담기`,
  });
}

describe("SpaceMarket interaction", () => {
  it("celebrates crossing one trillion and keeps the joke during rapid additions", async () => {
    const user = userEvent.setup();
    const existing = SPACE_PRODUCTS.find(
      (product) => product.id === "aurora-e12",
    );
    const sportsJet = SPACE_PRODUCTS.find(
      (product) => product.id === "skyline-38",
    );
    const miniSatellite = SPACE_PRODUCTS.find(
      (product) => product.id === "pocket-orbit-6u",
    );
    const relaySatellite = SPACE_PRODUCTS.find(
      (product) => product.id === "orbitnet-relay",
    );
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify([existing.id]));
    render(
      <StrictMode>
        <SpaceMarket />
      </StrictMode>,
    );
    expect(screen.getByRole("status").textContent).toBe("");

    await user.click(addButton(sportsJet));
    expect(screen.getByRole("status").textContent).not.toContain(
      "1조 클럽 입성",
    );
    expect(screen.getByRole("status").textContent).not.toContain(
      "고객님, 행성도 하나 사실래요?",
    );
    await waitFor(() =>
      expect(screen.getByLabelText("장바구니 합계 금액").textContent).toBe(
        formatKoreanMoney(existing.price + sportsJet.price),
      ),
    );

    await user.click(addButton(miniSatellite));
    expect(screen.getByRole("status").textContent).toContain(
      "고객님, 행성도 하나 사실래요?",
    );
    await waitFor(() =>
      expect(screen.getByLabelText("장바구니 합계 금액").textContent).toBe(
        formatKoreanMoney(
          existing.price + sportsJet.price + miniSatellite.price,
        ),
      ),
    );

    await user.click(addButton(relaySatellite));
    expect(screen.getByRole("status").textContent).toContain("1조 클럽 입성");
    const total =
      existing.price +
      sportsJet.price +
      miniSatellite.price +
      relaySatellite.price;
    await waitFor(() =>
      expect(screen.getByLabelText("장바구니 합계 금액").textContent).toBe(
        formatKoreanMoney(total),
      ),
    );
    await user.click(screen.getByRole("button", { name: "장바구니 보기" }));
    const cart = screen.getByRole("dialog", { name: "당신의 장바구니" });
    expect(
      within(cart).getByText("고객님, 행성도 하나 사실래요?"),
    ).toBeTruthy();
    expect(within(cart).getByText(formatWon(total))).toBeTruthy();
  });

  it("does not replay the milestone when restoring a trillion-won cart", () => {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(SPACE_PRODUCTS.map((product) => product.id)),
    );
    render(
      <StrictMode>
        <SpaceMarket />
      </StrictMode>,
    );
    expect(screen.getByLabelText("장바구니 합계 금액").textContent).toBe(
      formatKoreanMoney(
        SPACE_PRODUCTS.reduce((total, product) => total + product.price, 0),
      ),
    );
    expect(screen.getByRole("status").textContent).toBe("");
  });

  it("filters aircraft and satellites, reports no matches, and restores the collection", async () => {
    const user = userEvent.setup();
    render(
      <StrictMode>
        <SpaceMarket />
      </StrictMode>,
    );
    expect(screen.getAllByRole("article")).toHaveLength(SPACE_PRODUCTS.length);

    await user.click(screen.getByRole("button", { name: /^비행기/ }));
    expect(listedNames()).toEqual(
      SPACE_PRODUCTS.filter((item) => item.category === "aircraft").map(
        (item) => item.name,
      ),
    );
    expect(screen.getAllByRole("article")).toHaveLength(
      SPACE_PRODUCTS.filter((item) => item.category === "aircraft").length,
    );

    await user.click(screen.getByRole("button", { name: /^인공위성/ }));
    expect(listedNames()).toEqual(
      SPACE_PRODUCTS.filter((item) => item.category === "satellite").map(
        (item) => item.name,
      ),
    );
    expect(screen.getAllByRole("article")).toHaveLength(
      SPACE_PRODUCTS.filter((item) => item.category === "satellite").length,
    );

    await user.type(
      screen.getByRole("textbox", { name: "우주마켓 매물 검색" }),
      "없는화성잠수함",
    );
    expect(screen.queryAllByRole("article")).toHaveLength(0);
    expect(screen.getByText("이 좌표에는 매물이 없네요")).toBeTruthy();
    await user.click(screen.getByRole("button", { name: "전체 매물 보기" }));
    expect(
      screen.getByRole("textbox", { name: "우주마켓 매물 검색" }).value,
    ).toBe("");
    expect(listedNames()).toEqual(SPACE_PRODUCTS.map((item) => item.name));
  });

  it("sorts the full collection by numeric price in both directions", async () => {
    const user = userEvent.setup();
    render(
      <StrictMode>
        <SpaceMarket />
      </StrictMode>,
    );
    const sorting = screen.getByRole("combobox", { name: "우주마켓 정렬" });

    await user.selectOptions(sorting, "low");
    expect(listedNames()).toEqual(
      [...SPACE_PRODUCTS]
        .sort((a, b) => a.price - b.price)
        .map((item) => item.name),
    );
    await user.selectOptions(sorting, "high");
    expect(listedNames()).toEqual(
      [...SPACE_PRODUCTS]
        .sort((a, b) => b.price - a.price)
        .map((item) => item.name),
    );
  });

  it("adds distinct listings once, sums exact won prices, and updates the quote after removal", async () => {
    const user = userEvent.setup();
    const jet = SPACE_PRODUCTS.find((item) => item.category === "aircraft");
    const rocket = SPACE_PRODUCTS.find((item) => item.category === "rocket");
    render(
      <StrictMode>
        <SpaceMarket />
      </StrictMode>,
    );

    await user.click(addButton(jet));
    await user.click(addButton(rocket));
    expect(
      screen.getByRole("button", { name: `${jet.name} 장바구니에 담김` })
        .disabled,
    ).toBe(true);
    expect(
      screen.getByRole("button", { name: `${rocket.name} 장바구니에 담김` })
        .disabled,
    ).toBe(true);
    expect(JSON.parse(localStorage.getItem(CART_STORAGE_KEY))).toEqual([
      jet.id,
      rocket.id,
    ]);

    await user.click(screen.getByRole("button", { name: /^장바구니\s*2$/ }));
    const cart = screen.getByRole("dialog", { name: "당신의 장바구니" });
    expect(within(cart).getByLabelText("장바구니 총액").textContent).toBe(
      formatKoreanMoney(jet.price + rocket.price),
    );
    expect(
      within(cart).getByText(formatWon(jet.price + rocket.price)),
    ).toBeTruthy();

    await user.click(
      within(cart).getByRole("button", {
        name: `${jet.name} 장바구니에서 삭제`,
      }),
    );
    expect(within(cart).queryByRole("heading", { name: jet.name })).toBeNull();
    await waitFor(() =>
      expect(within(cart).getByLabelText("장바구니 총액").textContent).toBe(
        formatKoreanMoney(rocket.price),
      ),
    );
    await user.click(
      within(cart).getByRole("button", { name: "가상 견적서 만들기" }),
    );
    const quote = screen.getByRole("dialog", {
      name: "견적이 궤도에 올랐습니다",
    });
    expect(within(quote).getByText("가상 견적서 준비 완료")).toBeTruthy();
    expect(within(quote).getByLabelText("장바구니 총액").textContent).toBe(
      formatKoreanMoney(rocket.price),
    );
    expect(within(quote).getByText(formatWon(rocket.price))).toBeTruthy();
    expect(within(quote).getByText("0원")).toBeTruthy();
  });

  it("restores the same basket after remount and persists clearing it", async () => {
    const user = userEvent.setup();
    const satellite = SPACE_PRODUCTS.find(
      (item) => item.category === "satellite",
    );
    const firstView = render(
      <StrictMode>
        <SpaceMarket />
      </StrictMode>,
    );
    await user.click(addButton(satellite));
    firstView.unmount();

    sessionStorage.setItem("panda-space-arrival", "1");
    render(
      <StrictMode>
        <SpaceMarket />
      </StrictMode>,
    );
    expect(
      screen.getByRole("button", { name: `${satellite.name} 장바구니에 담김` })
        .disabled,
    ).toBe(true);
    await user.click(screen.getByRole("button", { name: /^장바구니\s*1$/ }));
    const cart = screen.getByRole("dialog", { name: "당신의 장바구니" });
    expect(within(cart).getByLabelText("장바구니 총액").textContent).toBe(
      formatKoreanMoney(satellite.price),
    );
    await user.click(
      within(cart).getByRole("button", { name: "장바구니 비우기" }),
    );
    expect(
      within(cart).getByRole("heading", { name: "아직 지구에 계시군요" }),
    ).toBeTruthy();
    expect(JSON.parse(localStorage.getItem(CART_STORAGE_KEY))).toEqual([]);
    expect(screen.getByRole("button", { name: /^장바구니\s*0$/ })).toBeTruthy();
  });
});


describe("SpaceMarket audio-synchronized entrance", () => {
  beforeEach(() => {
    sessionStorage.removeItem("panda-space-arrival");
    vi.useFakeTimers();
    isSpaceSoundEnabled.mockReturnValue(true);
    vi.stubGlobal("matchMedia", vi.fn(() => ({ matches: false })));
  });

  it("keeps the doors closed during delayed audio and reveals the market on ended", () => {
    const { container } = render(<SpaceMarket />);
    const enter = screen.getByRole("button", { name: "에어록 열고 입장" });
    fireEvent.click(enter);
    fireEvent.click(enter);
    expect(playAirlockSound).toHaveBeenCalledOnce();
    act(() => vi.advanceTimersByTime(9000));
    expect(container.querySelector(".space-airlock.is-opening")).toBeNull();
    expect(screen.getByRole("button", { name: "입장 신호 확인 중" }).disabled).toBe(true);
    const { onComplete } = playAirlockSound.mock.calls[0][0];
    act(() => onComplete("ended"));
    expect(container.querySelector(".space-airlock.is-opening")).not.toBeNull();
    expect(container.querySelector(".space-airlock-content")).toBeNull();
    expect(container.querySelector(".space-page-content")).not.toBeNull();
    act(() => vi.advanceTimersByTime(450));
    expect(container.querySelector(".space-airlock")).toBeNull();
    expect(container.querySelector(".space-page-content").hasAttribute("inert")).toBe(false);
  });

  it("opens immediately on playback failure without waiting for a nominal timer", () => {
    const { container } = render(<SpaceMarket />);
    fireEvent.click(screen.getByRole("button", { name: "에어록 열고 입장" }));
    act(() => playAirlockSound.mock.calls[0][0].onComplete("unavailable"));
    expect(container.querySelector(".space-airlock.is-opening")).not.toBeNull();
  });

  it("muting during playback stops sound and releases the closed doors", () => {
    const { container } = render(<SpaceMarket />);
    fireEvent.click(screen.getByRole("button", { name: "에어록 열고 입장" }));
    const { onComplete } = playAirlockSound.mock.calls[0][0];
    fireEvent.click(screen.getByRole("button", { name: "효과음 켜짐" }));
    expect(stopSpaceAudio).toHaveBeenCalled();
    expect(container.querySelector(".space-airlock.is-opening")).not.toBeNull();
    act(() => vi.advanceTimersByTime(450));
    act(() => onComplete("ended"));
    expect(container.querySelector(".space-airlock")).toBeNull();
    expect(playAirlockSound).toHaveBeenCalledOnce();
  });

  it("skips audio when muted and skips door movement when reduced motion is requested", () => {
    isSpaceSoundEnabled.mockReturnValue(false);
    vi.stubGlobal("matchMedia", vi.fn(() => ({ matches: true })));
    const { container } = render(<SpaceMarket />);
    fireEvent.click(screen.getByRole("button", { name: "에어록 열고 입장" }));
    expect(playAirlockSound).not.toHaveBeenCalled();
    expect(container.querySelector(".space-airlock")).toBeNull();
  });

  it("cleans up playback and ignores late completion after leaving the page", () => {
    const view = render(<SpaceMarket />);
    fireEvent.click(screen.getByRole("button", { name: "에어록 열고 입장" }));
    const { onComplete } = playAirlockSound.mock.calls[0][0];
    view.unmount();
    act(() => onComplete("ended"));
    expect(stopSpaceAudio).toHaveBeenCalled();
    expect(vi.getTimerCount()).toBe(0);
  });
});
