import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import SecretMarketEntrance from "./SecretMarketEntrance";
import {
  playAirlockSound,
  playTargetFoundSound,
  stopSpaceAudio,
} from "../space/sounds";

vi.mock("../space/sounds", () => ({
  playAirlockSound: vi.fn(() => true),
  playTargetFoundSound: vi.fn(() => true),
  stopSpaceAudio: vi.fn(),
}));

let showModal;
let originalShowModal;
let originalClose;

beforeEach(() => {
  vi.mocked(playAirlockSound).mockReset().mockReturnValue(true);
  originalShowModal = Object.getOwnPropertyDescriptor(
    HTMLDialogElement.prototype,
    "showModal",
  );
  originalClose = Object.getOwnPropertyDescriptor(
    HTMLDialogElement.prototype,
    "close",
  );
  showModal = vi.fn(function () {
    this.setAttribute("open", "");
  });
  Object.defineProperty(HTMLDialogElement.prototype, "showModal", {
    configurable: true,
    writable: true,
    value: showModal,
  });
  Object.defineProperty(HTMLDialogElement.prototype, "close", {
    configurable: true,
    writable: true,
    value: vi.fn(function () {
      this.removeAttribute("open");
      this.dispatchEvent(new Event("close"));
    }),
  });
});

afterEach(() => {
  cleanup();
  if (originalShowModal) {
    Object.defineProperty(
      HTMLDialogElement.prototype,
      "showModal",
      originalShowModal,
    );
  } else {
    delete HTMLDialogElement.prototype.showModal;
  }
  if (originalClose) {
    Object.defineProperty(HTMLDialogElement.prototype, "close", originalClose);
  } else {
    delete HTMLDialogElement.prototype.close;
  }
  vi.restoreAllMocks();
  vi.useRealTimers();
  sessionStorage.clear();
  vi.clearAllMocks();
});

function activate(count) {
  const trigger = screen.getByRole("button", { name: "©NeoGround - 2026" });
  for (let index = 0; index < count; index += 1) fireEvent.click(trigger);
  return trigger;
}

describe("SecretMarketEntrance", () => {
  it("keeps the market hidden through four activations and opens it on the fifth", () => {
    render(<SecretMarketEntrance />);
    activate(4);
    expect(showModal).not.toHaveBeenCalled();
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(playTargetFoundSound).not.toHaveBeenCalled();

    activate(1);
    expect(showModal).toHaveBeenCalledTimes(1);
    expect(playTargetFoundSound).toHaveBeenCalledTimes(1);
    expect(playAirlockSound).not.toHaveBeenCalled();
    const dialog = screen.getByRole("dialog", {
      name: "비밀 거래소 발견!",
    });
    expect(dialog.open).toBe(true);
    expect(
      screen
        .getByRole("link", { name: "우주마켓 입장하기" })
        .getAttribute("href"),
    ).toBe("/space-market");
  });

  it("starts a new sequence when five seconds have passed", () => {
    const now = vi.spyOn(Date, "now").mockReturnValue(1000);
    render(<SecretMarketEntrance />);
    activate(4);
    now.mockReturnValue(6000);
    activate(1);
    expect(showModal).not.toHaveBeenCalled();
    activate(4);
    expect(showModal).toHaveBeenCalledTimes(1);
  });

  it("can be dismissed and returns focus to the unchanged copyright button", () => {
    render(<SecretMarketEntrance />);
    const trigger = activate(5);
    fireEvent.click(
      screen.getByRole("button", { name: "아직 지구에 있을게요" }),
    );
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(document.activeElement).toBe(trigger);
    expect(stopSpaceAudio).toHaveBeenCalledTimes(1);

    activate(4);
    expect(showModal).toHaveBeenCalledTimes(1);
    activate(1);
    expect(showModal).toHaveBeenCalledTimes(2);
  });

  it("waits for actual completion before marking arrival and navigating once", () => {
    vi.useFakeTimers();
    const navigate = vi.fn();
    render(<SecretMarketEntrance navigate={navigate} />);
    activate(5);
    const entry = screen.getByRole("link", { name: "우주마켓 입장하기" });
    fireEvent.click(entry);
    fireEvent.click(entry);
    expect(playAirlockSound).toHaveBeenCalledOnce();
    expect(sessionStorage.getItem("panda-space-arrival")).toBeNull();
    expect(screen.getByRole("link", { name: "입장 신호 확인 중" })).toBeTruthy();
    vi.advanceTimersByTime(9000);
    expect(navigate).not.toHaveBeenCalled();
    const { onComplete } = playAirlockSound.mock.calls[0][0];
    onComplete("ended");
    onComplete("ended");
    expect(sessionStorage.getItem("panda-space-arrival")).toBe("1");
    expect(navigate).toHaveBeenCalledExactlyOnceWith("/space-market");
  });

  it("cancels an entry and ignores a delayed completion event", () => {
    const navigate = vi.fn();
    render(<SecretMarketEntrance navigate={navigate} />);
    activate(5);
    fireEvent.click(screen.getByRole("link", { name: "우주마켓 입장하기" }));
    const { onComplete } = playAirlockSound.mock.calls[0][0];
    fireEvent.click(screen.getByRole("button", { name: "아직 지구에 있을게요" }));
    onComplete("ended");
    expect(navigate).not.toHaveBeenCalled();
    expect(sessionStorage.getItem("panda-space-arrival")).toBeNull();
    expect(stopSpaceAudio).toHaveBeenCalledOnce();
  });

  it("continues without waiting when audio is muted or unavailable", () => {
    playAirlockSound.mockReturnValueOnce(false);
    const navigate = vi.fn();
    render(<SecretMarketEntrance navigate={navigate} />);
    activate(5);
    fireEvent.click(screen.getByRole("link", { name: "우주마켓 입장하기" }));
    expect(navigate).toHaveBeenCalledExactlyOnceWith("/space-market");
  });

  it("ignores completion after unmounting", () => {
    const navigate = vi.fn();
    const view = render(<SecretMarketEntrance navigate={navigate} />);
    activate(5);
    fireEvent.click(screen.getByRole("link", { name: "우주마켓 입장하기" }));
    const { onComplete } = playAirlockSound.mock.calls[0][0];
    view.unmount();
    onComplete("ended");
    expect(navigate).not.toHaveBeenCalled();
  });

  it("leaves modified clicks to the browser without playing sound", () => {
    render(<SecretMarketEntrance />);
    activate(5);
    const entry = screen.getByRole("link", { name: "우주마켓 입장하기" });
    // The real browser opens a new tab; suppress jsdom's unsupported navigation.
    entry.addEventListener("click", (event) => event.preventDefault());
    fireEvent.click(entry, { ctrlKey: true });
    expect(playAirlockSound).not.toHaveBeenCalled();
    expect(
      screen.getByRole("link", { name: "우주마켓 입장하기" }),
    ).toBeTruthy();
  });
});
