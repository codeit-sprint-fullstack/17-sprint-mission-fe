import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

let instances;
let audioConstructor;
let sound;

beforeEach(async () => {
  vi.resetModules();
  vi.useFakeTimers();
  localStorage.clear();
  instances = [];
  audioConstructor = vi.fn(function (url) {
    this.src = url;
    this.currentTime = 0;
    this.play = vi.fn(() => Promise.resolve());
    this.pause = vi.fn();
    instances.push(this);
  });
  vi.stubGlobal("Audio", audioConstructor);
  sound = await import("./sounds");
});

afterEach(() => {
  sound.stopSpaceAudio();
  vi.useRealTimers();
  vi.unstubAllGlobals();
  localStorage.clear();
});

describe("space airlock audio", () => {
  it("does not create audio while muted", () => {
    localStorage.setItem(sound.SOUND_STORAGE_KEY, "off");
    expect(sound.playAirlockSound()).toBe(false);
    expect(sound.playTargetFoundSound()).toBe(false);
    expect(audioConstructor).not.toHaveBeenCalled();
  });

  it("plays only the approved air-release segment and waits for ended even when loading is delayed", () => {
    const completed = vi.fn();
    expect(sound.playAirlockSound({ onComplete: completed })).toBe(true);
    const audio = instances[0];
    expect(audio.src).toBe("/space-assets/airlock-air.wav?v=split-1");
    expect(audio.volume).toBe(1);
    expect(sound.AIRLOCK_SEQUENCE_MS).toBe(2100);
    vi.advanceTimersByTime(8000);
    expect(completed).not.toHaveBeenCalled();
    expect(sound.playAirlockSound()).toBe(false);
    expect(audioConstructor).toHaveBeenCalledTimes(1);
    audio.onplaying();
    vi.advanceTimersByTime(sound.AIRLOCK_SEQUENCE_MS);
    expect(completed).not.toHaveBeenCalled();
    const ended = audio.onended;
    ended();
    ended();
    expect(completed).toHaveBeenCalledExactlyOnceWith("ended");
    expect(audio.pause).not.toHaveBeenCalled();
    expect(vi.getTimerCount()).toBe(0);
    expect(sound.playAirlockSound()).toBe(true);
  });

  it("plays only the approved cabin chime on discovery without replaying it until ended", () => {
    expect(sound.playTargetFoundSound()).toBe(true);
    expect(sound.TARGET_SIGNAL_MS).toBe(2230);
    const audio = instances[0];
    expect(audio.src).toBe("/space-assets/discovery-chime.wav?v=split-1");
    expect(audio.volume).toBe(1);
    expect(sound.playTargetFoundSound()).toBe(false);
    expect(audioConstructor).toHaveBeenCalledOnce();
    vi.advanceTimersByTime(sound.TARGET_SIGNAL_MS + 500);
    expect(audio.pause).not.toHaveBeenCalled();
    const ended = audio.onended;
    ended();
    ended();
    expect(vi.getTimerCount()).toBe(0);
    expect(audio.pause).not.toHaveBeenCalled();
    expect(sound.playTargetFoundSound()).toBe(true);
    expect(instances[1].src).toBe(audio.src);
  });

  it("replaces discovery with entry without allowing stale discovery callbacks to finish it", () => {
    sound.playTargetFoundSound();
    const target = instances[0];
    const oldEnded = target.onended;
    expect(sound.playTargetFoundSound()).toBe(false);
    const completed = vi.fn();
    sound.playAirlockSound({ onComplete: completed });
    expect(target.pause).toHaveBeenCalledOnce();
    expect(target.currentTime).toBe(0);
    oldEnded();
    expect(completed).not.toHaveBeenCalled();
    instances[1].onended();
    expect(completed).toHaveBeenCalledExactlyOnceWith("ended");
  });

  it("cancels without completing and ignores late ended events", () => {
    const completed = vi.fn();
    sound.playAirlockSound({ onComplete: completed });
    const audio = instances[0];
    const ended = audio.onended;
    audio.currentTime = 2;
    sound.stopSpaceAudio();
    ended();
    expect(audio.pause).toHaveBeenCalledOnce();
    expect(audio.currentTime).toBe(0);
    expect(completed).not.toHaveBeenCalled();
    expect(vi.getTimerCount()).toBe(0);
  });

  it("completes gracefully if the browser rejects playback", async () => {
    audioConstructor.mockImplementationOnce(function () {
      this.play = () => Promise.reject(new Error("Playback blocked"));
      this.pause = vi.fn();
    });
    const completed = vi.fn();
    sound.playAirlockSound({ onComplete: completed });
    await Promise.resolve();
    expect(completed).toHaveBeenCalledExactlyOnceWith("unavailable");
    expect(vi.getTimerCount()).toBe(0);
  });

  it("completes gracefully if decoding fails", () => {
    const completed = vi.fn();
    sound.playAirlockSound({ onComplete: completed });
    instances[0].onerror();
    expect(completed).toHaveBeenCalledExactlyOnceWith("unavailable");
    expect(vi.getTimerCount()).toBe(0);
  });

  it("only falls back when playback stops making progress, not at the nominal clip duration", () => {
    const completed = vi.fn();
    sound.playAirlockSound({ onComplete: completed });
    const audio = instances[0];
    for (let second = 1; second <= 15; second += 1) {
      vi.advanceTimersByTime(1000);
      audio.currentTime = second / 10;
      audio.ontimeupdate();
    }
    expect(completed).not.toHaveBeenCalled();
    vi.advanceTimersByTime(sound.AUDIO_STALL_TIMEOUT_MS);
    expect(completed).toHaveBeenCalledExactlyOnceWith("unavailable");
    expect(audio.pause).toHaveBeenCalledOnce();
  });
});
