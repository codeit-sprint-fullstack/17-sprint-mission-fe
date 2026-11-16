import { useEffect, useId, useRef, useState } from "react";
import {
  playAirlockSound,
  playTargetFoundSound,
  stopSpaceAudio,
} from "../space/sounds";
import "./secret-market-entrance.css";

const ACTIVATIONS_TO_ENTER = 5;
const SECRET_WINDOW_MS = 5000;

export default function SecretMarketEntrance({
  navigate = (url) => window.location.assign(url),
}) {
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const sequence = useRef({ count: 0, startedAt: 0 });
  const entryPending = useRef(false);
  const [isEntering, setIsEntering] = useState(false);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(
    () => () => {
      entryPending.current = false;
      stopSpaceAudio();
    },
    [],
  );

  function enterMarket(event) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;

    event.preventDefault();
    if (entryPending.current || isEntering) return;
    entryPending.current = true;
    setIsEntering(true);
    function completeEntry() {
      if (!entryPending.current) return;
      entryPending.current = false;
      try {
        sessionStorage.setItem("panda-space-arrival", "1");
      } catch {
        // 저장소가 제한되어도 비밀 거래소에는 입장할 수 있습니다.
      }
      navigate("/space-market");
    }
    if (!playAirlockSound({ onComplete: completeEntry })) completeEntry();
  }

  function closeEntrance() {
    entryPending.current = false;
    stopSpaceAudio();
    if (isEntering) {
      try {
        sessionStorage.removeItem("panda-space-arrival");
      } catch {
        // 저장소를 사용할 수 없어도 닫기 동작은 유지합니다.
      }
    }
    setIsEntering(false);
    triggerRef.current?.focus();
  }

  function findSecret() {
    const now = Date.now();
    const previous = sequence.current;
    const count =
      previous.count === 0 || now - previous.startedAt >= SECRET_WINDOW_MS
        ? 1
        : previous.count + 1;

    sequence.current = {
      count,
      startedAt: count === 1 ? now : previous.startedAt,
    };

    if (count === ACTIVATIONS_TO_ENTER) {
      sequence.current = { count: 0, startedAt: 0 };
      if (!dialogRef.current.open) {
        dialogRef.current.showModal();
        playTargetFoundSound();
      }
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="site-copyright space-secret-trigger"
        onClick={findSecret}
      >
        ©NeoGround - 2026
      </button>
      <dialog
        ref={dialogRef}
        className={`space-secret-dialog${isEntering ? " space-secret-dialog--entering" : ""}`}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onClose={closeEntrance}
      >
        <div className="space-secret-signal">
          <span aria-hidden="true" /> ACCESS GRANTED
        </div>
        <div className="space-secret-emblem" aria-hidden="true">
          <span className="space-secret-orbit" />
          <span className="space-secret-sparks">
            {Array.from({ length: 8 }, (_, index) => (
              <i key={index} style={{ "--spark-angle": `${index * 45}deg` }} />
            ))}
          </span>
          <svg viewBox="0 0 120 120" fill="none">
            <circle
              cx="60"
              cy="60"
              r="53"
              stroke="currentColor"
              strokeOpacity=".15"
            />
            <circle
              cx="60"
              cy="60"
              r="41"
              stroke="currentColor"
              strokeOpacity=".2"
              strokeDasharray="3 6"
            />
            <path
              d="M51 76 43 84l-7-7 8-8m29-42c-16 6-28 20-31 37l14 14c17-3 31-15 37-31l5-24-25 4Z"
              fill="currentColor"
              fillOpacity=".12"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path
              d="m43 60-14 3-4 17 17-7m18 4-3 14-17 4 7-17M35 87l-9 9"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="76"
              cy="45"
              r="8"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <path
              d="M25 30v10m-5-5h10m58 50v8m-4-4h8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="space-secret-eyebrow">PANDA MARKET / HIDDEN SECTOR</p>
        <h2 id={titleId} className="space-secret-discovery-title">
          비밀 거래소 <strong>발견!</strong>
        </h2>
        <p id={descriptionId} className="space-secret-description">
          지구 가격으로는 설명이 안 되는 매물들
          <br />
          지갑 대신 상상력을 준비하세요
        </p>
        <a
          className="space-secret-enter"
          href="/space-market"
          onClick={enterMarket}
          aria-disabled={isEntering || undefined}
        >
          {isEntering ? "입장 신호 확인 중" : "우주마켓 입장하기"}
          <span aria-hidden="true">{isEntering ? "◌" : "↗"}</span>
        </a>
        <div
          className="space-secret-airlock"
          aria-hidden="true"
        >
          <span />
        </div>
        <button
          className="space-secret-dismiss"
          type="button"
          onClick={() => dialogRef.current.close()}
        >
          아직 지구에 있을게요
        </button>
        <p className="space-secret-note">가상 매물 · 실제 결제 없음</p>
      </dialog>
    </>
  );
}
