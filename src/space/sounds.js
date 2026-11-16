export const SOUND_STORAGE_KEY = "panda-space-sound-v1";
// 음원의 길이 정보이며 입장 완료를 결정하는 타이머로 사용하지 않습니다.
export const AIRLOCK_SEQUENCE_MS = 2100;
export const TARGET_SIGNAL_MS = 2230;
export const AUDIO_STALL_TIMEOUT_MS = 12000;
const SOUNDS = {
  target: { url: "/space-assets/discovery-chime.wav?v=split-1", volume: 1 },
  airlock: { url: "/space-assets/airlock-air.wav?v=split-1", volume: 1 },
};
let activePlayback = null;

export function isSpaceSoundEnabled() {
  try {
    return localStorage.getItem(SOUND_STORAGE_KEY) !== "off";
  } catch {
    return true;
  }
}

export function stopSpaceAudio() {
  activePlayback?.cancel();
}

function playSound(kind, { onComplete } = {}) {
  if (!isSpaceSoundEnabled() || activePlayback?.kind === kind) return false;
  stopSpaceAudio();

  let audio;
  try {
    audio = new Audio(SOUNDS[kind].url);
  } catch {
    return false;
  }

  let settled = false;
  let watchdog;
  let lastPosition = 0;
  const playback = { kind, cancel: () => finish("cancelled") };

  function finish(reason) {
    if (settled) return;
    settled = true;
    clearTimeout(watchdog);
    audio.onended = null;
    audio.onerror = null;
    audio.onplaying = null;
    audio.ontimeupdate = null;
    if (activePlayback === playback) activePlayback = null;
    if (reason !== "ended") {
      audio.pause();
      audio.currentTime = 0;
    }
    // 취소 후 늦게 도착한 이벤트로 입장하거나 페이지를 이동하지 않습니다.
    if (reason !== "cancelled") onComplete?.(reason);
  }

  function watchForProgress() {
    clearTimeout(watchdog);
    watchdog = setTimeout(() => finish("unavailable"), AUDIO_STALL_TIMEOUT_MS);
  }

  audio.volume = SOUNDS[kind].volume;
  audio.preload = "auto";
  audio.onended = () => finish("ended");
  audio.onerror = () => finish("unavailable");
  audio.onplaying = watchForProgress;
  audio.ontimeupdate = () => {
    if (audio.currentTime > lastPosition) {
      lastPosition = audio.currentTime;
      watchForProgress();
    }
  };
  activePlayback = playback;
  // 로드 또는 재생이 완전히 멎은 경우에만 해제하며 정상 재생 길이와 무관합니다.
  watchForProgress();
  try {
    Promise.resolve(audio.play()).catch(() => finish("unavailable"));
  } catch {
    finish("unavailable");
  }
  return true;
}

export function playTargetFoundSound() {
  return playSound("target");
}

// 실제 ended 이벤트가 공기 방출음의 재생 완료를 알립니다.
export function playAirlockSound(options) {
  return playSound("airlock", options);
}
