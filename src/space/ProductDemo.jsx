import { useState } from "react";
import KineticProductScene, { getKineticDemoConfig } from "./KineticProductScene";
import "./product-demo.css";

const CHANNELS = {
  phone: { label: "음성 명령", voice: true, accent: "#9ee3ef" },
  assistant: { label: "음성 명령", voice: true, accent: "#d1c3ef" },
  internet: { label: "전파 연결", accent: "#9dc9ee" },
  satellite: { label: "지상국 연결", accent: "#b4b5ef" },
  aircraft: { label: "관제 연결", accent: "#9fd4e7" },
  rocket: { label: "임무 통신", accent: "#e7c598" },
  robot: { label: "교감 신호", accent: "#e5bdd4" },
  drone: { label: "배송 신호", accent: "#a9d9c8" },
  carrier: { label: "따라가기 신호", accent: "#d9d0ad" },
  building: { label: "홈 네트워크", accent: "#b2d5e7" },
  wearable: { label: "센서 연결", accent: "#c8bce4" },
  gear: { label: "상태 연결", accent: "#c5dba5" },
  food: { label: "보관 상태", accent: "#c9dca5" },
  land: { label: "현장 스캔", accent: "#e4c3a0" },
  living: { label: "스마트홈 연결", accent: "#b3d8cf" },
};

function CommandIndicator({ voice, storage, scan }) {
  return (
    <div className="space-demo-command" aria-hidden="true">
      <span>{storage ? "보관 상태" : scan ? "현장 스캔" : voice ? "음성 명령" : "연결 신호"}</span>
      <div className="space-demo-command-bars">
        {[12, 22, 16, 28, 18, 12].map((height, index) => (
          <i key={index} style={{ "--signal-height": `${height}px`, "--signal-index": index }} />
        ))}
      </div>
      <small>{storage ? "밀봉 상태 확인" : scan ? "경계 확인" : "동작 연결"}</small>
    </div>
  );
}

export default function ProductDemo({ product }) {
  const [mode, setMode] = useState("action");
  const [paused, setPaused] = useState(false);
  const [run, setRun] = useState(0);
  const [failed, setFailed] = useState(false);
  const demo = getKineticDemoConfig(product);
  const channel = CHANNELS[product.category] || CHANNELS.gear;
  const photo = mode === "photo";
  const photoLabel = product.generatedPhoto ? "실사형 콘셉트 이미지" : "참고 사진";
  const greeting = mode === "greet";
  const signal = mode === "signal";
  const status = paused
    ? "시연 일시정지"
    : greeting
      ? product.category === "assistant" ? "손을 흔들며 인사하는 중" : "관절을 움직여 인사하는 중"
      : demo.status;

  function changeMode(next) {
    setMode(next);
    setPaused(false);
    setFailed(false);
    setRun((value) => value + 1);
  }

  return (
    <section
      className="space-product-demo"
      aria-label={`${product.name} 기능 시뮬레이션`}
      style={{ "--demo-accent": channel.accent }}
    >
      <div className="space-demo-heading">
        <span><i aria-hidden="true" />{photo ? photoLabel : "기능 시뮬레이션"}</span>
        <small>{photo ? product.generatedPhoto ? "가상 상품 이미지" : "제품 이해를 위한 참고" : "움직임을 살펴보세요"}</small>
      </div>

      <div
        key={run}
        className={`space-demo-stage space-demo-stage--${product.category}${photo ? " is-photo" : ""}${paused ? " is-paused" : ""}${signal ? " is-signal" : ""}`}
      >
        {photo ? failed ? (
          <div className="space-demo-missing" role="status">
            <span aria-hidden="true">▧</span>
            <p>이미지를 불러오지 못했어요</p>
            <button type="button" onClick={() => changeMode("photo")}>다시 불러오기</button>
          </div>
        ) : (
          <img
            className="space-demo-product-photo"
            src={product.image}
            alt={`${product.name} ${photoLabel}`}
            onError={() => setFailed(true)}
          />
        ) : (
          <>
            <div className="space-demo-stage-grid" aria-hidden="true" />
            <div className="space-demo-stage-caption">
              <strong>{greeting ? demo.greeting : demo.action}</strong>
              <span>{greeting ? "반가워요" : demo.detail}</span>
            </div>
            <KineticProductScene product={product} action={greeting ? "greet" : "work"} signal={signal} />
            {signal && <CommandIndicator voice={channel.voice} storage={product.category === "food"} scan={product.category === "land"} />}
          </>
        )}
      </div>

      {!photo && (
        <div className="space-demo-telemetry" role="status" aria-live="polite" aria-atomic="true">
          <span className={`space-demo-status-dot${paused ? " is-stopped" : ""}`} aria-hidden="true" />
          <span>{status}</span>
          {signal && <small>{product.category === "food" ? "보관 상태 시뮬레이션" : product.category === "land" ? "현장 스캔 시뮬레이션" : channel.voice ? "음성 명령 시뮬레이션" : "연결 신호 시뮬레이션"}</small>}
        </div>
      )}

      <div className="space-demo-controls" role="group" aria-label="상품 시연 선택">
        <button type="button" aria-pressed={mode === "action"} onClick={() => changeMode("action")}>{demo.action}</button>
        {demo.greeting && <button type="button" aria-pressed={greeting} onClick={() => changeMode("greet")}>{demo.greeting}</button>}
        <button type="button" aria-pressed={signal} onClick={() => changeMode("signal")}>{channel.label}</button>
        <button type="button" aria-pressed={photo} onClick={() => changeMode("photo")}>상품 이미지</button>
      </div>

      {!photo && (
        <div className="space-demo-playback" role="group" aria-label="시연 재생 제어">
          <span>가상 작동 모형</span>
          <button
            type="button"
            aria-label={paused ? "시연 재생" : "시연 일시정지"}
            aria-pressed={paused}
            onClick={() => setPaused((value) => !value)}
          >
            <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>{paused ? "이어서 재생" : "일시정지"}
          </button>
          <button type="button" onClick={() => changeMode(mode)}><span aria-hidden="true">↻</span>처음부터</button>
        </div>
      )}
    </section>
  );
}
