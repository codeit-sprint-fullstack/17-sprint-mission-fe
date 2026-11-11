import { useEffect, useRef, useState } from "react";
import { SPACE_CATEGORIES, SPACE_PRODUCTS } from "./products";
import { useSpaceCart } from "./useSpaceCart";
import { useAnimatedAmount } from "./useAnimatedAmount";
import { formatKoreanMoney, formatWon } from "./cart";
import ProductDemo from "./ProductDemo";
import SpaceSalePrice from "./SpaceSalePrice";
import {
  isSpaceSoundEnabled,
  playAirlockSound,
  SOUND_STORAGE_KEY,
  stopSpaceAudio,
} from "./sounds";
import "./space-market.css";

const PLANET_CLUB_TOTAL = 1_000_000_000_000;
const PLANET_CLUB_MESSAGE = "고객님, 행성도 하나 사실래요?";

function AnimatedTotal({ total, label }) {
  const amount = useAnimatedAmount(total);
  return (
    <strong
      aria-label={label}
      className={amount !== total ? "space-amount is-counting" : "space-amount"}
    >
      {formatKoreanMoney(amount)}
    </strong>
  );
}

function CartNotice({ toast, inline = false }) {
  return (
    <div
      className={`space-toast ${toast ? "is-visible" : ""} ${toast?.milestone ? "space-toast--milestone" : ""} ${inline ? "space-toast--inline" : ""}`}
      role="status"
      aria-atomic="true"
    >
      {toast && (
        <>
          {toast.milestone ? (
            <span className="space-planet-badge" aria-hidden="true">
              🪐
            </span>
          ) : (
            <Icon name="check" />
          )}
          <div>
            {toast.milestone && <small>1조 클럽 입성 · 다음 목표는 행성</small>}
            <span>{toast.message}</span>
          </div>
        </>
      )}
    </div>
  );
}

function Icon({ name, size = 20 }) {
  const paths = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    cart: (
      <>
        <path d="M3 4h2l2 11h12l2-8H6" />
        <circle cx="9" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </>
    ),
    search: (
      <>
        <circle cx="10" cy="10" r="6.5" />
        <path d="m15 15 5 5" />
      </>
    ),
    close: <path d="m6 6 12 12M18 6 6 18" />,
    plus: <path d="M12 5v14M5 12h14" />,
    check: <path d="m5 12 4 4L20 5" />,
    moon: <path d="M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10Z" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
      </>
    ),
    sound: (
      <>
        <path d="m3 9 4 0 5-4v14l-5-4H3ZM16 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14" />
      </>
    ),
    mute: (
      <>
        <path d="m3 9 4 0 5-4v14l-5-4H3Zm13-1 6 8m0-8-6 8" />
      </>
    ),
    plane: (
      <path d="m3 14 7-4V4c0-3 4-3 4 0v6l7 4v3l-7-2v5l2 2H8l2-2v-5l-7 2Z" />
    ),
    rocket: (
      <>
        <path d="M8 15c-3-7 2-12 4-13 2 1 7 6 4 13ZM8 10l-4 7 4-1m8-6 4 7-4-1M10 19l2 3 2-3" />
        <circle cx="12" cy="8" r="1.5" />
      </>
    ),
    satellite: (
      <>
        <path d="m8 10 6-6 6 6-6 6Zm-2 1-4 4 4 4 4-4Zm8 7 4 4 4-4-4-4M3 5a4 4 0 0 1 4-4M3 9a8 8 0 0 1 8-8" />
      </>
    ),
    internet: (
      <>
        <path d="M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0m-10 4a5 5 0 0 1 6 0" />
        <circle cx="12" cy="20" r="1" />
      </>
    ),
    phone: (
      <>
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <path d="M10 5h4m-3 14h2" />
      </>
    ),
    robot: (
      <>
        <path d="M5 8 2 3l7 2m10 3 3-5-7 2M8 19l-2 3m10-3 2 3" />
        <rect x="4" y="7" width="16" height="12" rx="5" />
        <circle cx="9" cy="12" r="1" />
        <circle cx="15" cy="12" r="1" />
        <path d="m10 16 2 1 2-1" />
      </>
    ),
    drone: (
      <><rect x="9" y="9" width="6" height="6" rx="2" /><path d="m9 9-4-4m10 4 4-4M9 15l-4 4m10-4 4 4" /><ellipse cx="5" cy="5" rx="4" ry="2" /><ellipse cx="19" cy="5" rx="4" ry="2" /><ellipse cx="5" cy="19" rx="4" ry="2" /><ellipse cx="19" cy="19" rx="4" ry="2" /></>
    ),
    carrier: (
      <><path d="M3 8h18l-2 8H5ZM8 8V5h8v3M6 19h12" /><circle cx="7" cy="20" r="1" /><circle cx="17" cy="20" r="1" /></>
    ),
    assistant: (
      <><circle cx="12" cy="7" r="4" /><path d="M4 22v-4a8 8 0 0 1 16 0v4M9 18h6m-3-3v6" /></>
    ),
    food: (
      <><path d="M4 11h16l-2 10H6ZM7 7c-3-3 3-3 0-6m5 6c-3-3 3-3 0-6m5 6c-3-3 3-3 0-6" /><path d="M8 16h8" /></>
    ),
    land: (
      <><path d="m2 17 10-5 10 5-10 5Zm10-5V2l7 3-7 3M4 13v5m16-5v5" /></>
    ),
    living: (
      <><path d="m3 10 9-8 9 8M5 9v13h14V9M8 17h8v3H8Zm1 0v-4h6v4" /></>
    ),
    building: (
      <>
        <path d="M3 22V9l8-6v19m0-16 10 4v12M7 11v2m0 3v2m8-7v2m3 0v2m-3 1v2m3 0v2" />
      </>
    ),
    wearable: <path d="m8 3-6 4 3 5 3-2v12h8V10l3 2 3-5-6-4c0 5-8 5-8 0Z" />,
    gear: (
      <>
        <path d="m4 20 6-6m-3 7-4-4m5-4 3 3L22 5l-3-3Z" />
        <path d="m14 4 1-2m5 8 2-1" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="6" height="6" rx="1" />
        <rect x="15" y="3" width="6" height="6" rx="1" />
        <rect x="3" y="15" width="6" height="6" rx="1" />
        <rect x="15" y="15" width="6" height="6" rx="1" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.rocket}
    </svg>
  );
}

function ProductPhoto({ product, className = "", eager = false }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className={`space-photo-fallback ${className}`}>
      <Icon name="satellite" size={40} />
      <span>지구와 이미지 연결이 끊겼습니다</span>
    </div>
  ) : (
    <img
      className={className}
      src={product.image}
      alt={product.name}
      style={{
        objectPosition: product.imagePosition || "center",
        objectFit: product.artwork ? "contain" : undefined,
        backgroundColor: product.artwork ? "#0b1523" : undefined,
      }}
      loading={eager ? "eager" : "lazy"}
      onError={() => setFailed(true)}
    />
  );
}

function Modal({ titleId, onClose, className = "", children }) {
  const dialog = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      aria-labelledby={titleId}
      className={`space-dialog ${className}`}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="space-dialog-inner">{children}</div>
    </dialog>
  );
}

function getInitialTheme() {
  try {
    return localStorage.getItem("panda-space-theme-v1") === "light"
      ? "light"
      : "dark";
  } catch {
    return "dark";
  }
}

function arrivedThroughSecretDoor() {
  try {
    return sessionStorage.getItem("panda-space-arrival") === "1";
  } catch {
    return false;
  }
}

export default function SpaceMarket() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [sound, setSound] = useState(isSpaceSoundEnabled);
  const [entered, setEntered] = useState(arrivedThroughSecretDoor);
  const [opening, setOpening] = useState(false);
  const [listening, setListening] = useState(false);
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("curated");
  const [selected, setSelected] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [quoteReady, setQuoteReady] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);
  const entryTimer = useRef(null);
  const entryPending = useRef(false);
  const cart = useSpaceCart(SPACE_PRODUCTS);
  const featured = SPACE_PRODUCTS.find(
    (product) => product.category === "rocket",
  );
  const visibleProducts = SPACE_PRODUCTS.filter(
    (product) =>
      (category === "all" || product.category === category) &&
      `${product.name} ${product.subtitle} ${product.description}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  ).sort((a, b) =>
    sort === "low"
      ? a.price - b.price
      : sort === "high"
        ? b.price - a.price
        : 0,
  );

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "ORBIT MARKET — 다음 지구를 위한 쇼핑";
    try {
      sessionStorage.removeItem("panda-space-arrival");
    } catch {
      /* 세션 저장소 없이도 직접 입장할 수 있습니다 */
    }
    return () => {
      document.title = previousTitle;
      clearTimeout(toastTimer.current);
      clearTimeout(entryTimer.current);
      entryPending.current = false;
      stopSpaceAudio();
    };
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem("panda-space-theme-v1", theme);
    } catch {
      /* 화면 설정만 유지합니다 */
    }
  }, [theme]);
  useEffect(() => {
    if (!sound) stopSpaceAudio();
    try {
      localStorage.setItem(SOUND_STORAGE_KEY, sound ? "on" : "off");
    } catch {
      /* 설정 저장 실패는 사용을 막지 않습니다 */
    }
  }, [sound]);

  function finishDoorOpening() {
    clearTimeout(entryTimer.current);
    setEntered(true);
    setOpening(false);
  }
  function revealMarket() {
    if (!entryPending.current) return;
    entryPending.current = false;
    setListening(false);
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      finishDoorOpening();
      return;
    }
    setOpening(true);
    // 문 애니메이션이 생략되거나 transitionend가 누락되어도 입장은 끝납니다.
    entryTimer.current = setTimeout(finishDoorOpening, 450);
  }
  function enterMarket() {
    if (entryPending.current || opening || entered) return;
    entryPending.current = true;
    setListening(true);
    if (!sound || !playAirlockSound({ onComplete: revealMarket })) revealMarket();
  }
  function toggleSound() {
    const next = !sound;
    setSound(next);
    if (!next) {
      stopSpaceAudio();
      revealMarket();
    }
  }
  function addToCart(product) {
    if (cart.hasItem(product.id)) return;
    const milestone =
      (cart.total < PLANET_CLUB_TOTAL &&
        cart.total + product.price >= PLANET_CLUB_TOTAL) ||
      (toast?.milestone && cart.total >= PLANET_CLUB_TOTAL);
    cart.addItem(product.id);
    setToast({
      milestone,
      message: milestone
        ? PLANET_CLUB_MESSAGE
        : `${product.name} · 장바구니 확보 완료`,
    });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(
      () => setToast(null),
      milestone ? 5200 : 2600,
    );
  }
  function openCart() {
    setQuoteReady(false);
    setCartOpen(true);
  }

  return (
    <div className="space-market" data-theme={theme}>
      {!entered && (
        <div className={`space-airlock ${opening ? "is-opening" : ""}`}>
          <div
            className="space-airlock-door space-airlock-door--left"
            onTransitionEnd={(event) => {
              if (event.target === event.currentTarget && event.propertyName === "transform" && opening)
                finishDoorOpening();
            }}
          />
          <div className="space-airlock-door space-airlock-door--right" />
          {!opening && <div className="space-airlock-content">
            <span className="space-eyebrow">
              UNLISTED DESTINATION · DOCK 017
            </span>
            <div className="space-orbit-emblem">
              <Icon name="rocket" size={42} />
            </div>
            <h1>좌표를 찾으셨군요</h1>
            <p>
              다음 지구에 필요한 물건들이 기다립니다
              <br />
              에어록을 열고 비밀 거래소로 들어오세요
            </p>
            <button
              className="space-primary"
              onClick={enterMarket}
              disabled={listening}
            >
              {listening ? "입장 신호 확인 중" : "에어록 열고 입장"}
              <Icon name="arrow" />
            </button>
            <button
              className="space-sound-entry"
              onClick={toggleSound}
            >
              <Icon name={sound ? "sound" : "mute"} />
              효과음 {sound ? "켜짐" : "꺼짐"}
            </button>
            <a className="space-earth-link" href="/">
              지구로 돌아가기
            </a>
          </div>}
        </div>
      )}
      <div className="space-page-content" inert={!entered ? true : undefined}>
        <header className="space-header space-shell">
          <a
            href="/space-market"
            className="space-brand"
            aria-label="오빗마켓 홈"
          >
            <span className="space-brand-mark">◎</span>
            <span>
              ORBIT<span className="space-brand-light">MARKET</span>
            </span>
            <span className="space-private">PRIVATE</span>
          </a>
          <div className="space-header-actions">
            <a className="space-earth" href="/">
              지구로 돌아가기 <span>↗</span>
            </a>
            <button
              className="space-icon-button"
              aria-label={
                theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"
              }
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Icon name={theme === "dark" ? "sun" : "moon"} />
            </button>
            <button
              className="space-icon-button"
              aria-label={sound ? "효과음 끄기" : "효과음 켜기"}
              title="발견: 기내 띵동 · 입장: 공기 방출"
              onClick={toggleSound}
            >
              <Icon name={sound ? "sound" : "mute"} />
            </button>
            <button className="space-cart-button" onClick={openCart}>
              <Icon name="cart" />
              <span className="space-cart-label">장바구니</span>
              <span className="space-cart-count">{cart.count}</span>
            </button>
          </div>
        </header>

        <main id="space-main" className="space-shell">
          <section className="space-hero" aria-labelledby="space-heading">
            <div className="space-hero-copy">
              <div className="space-eyebrow">
                <span className="space-status-dot" /> SECRET EXCHANGE · EST 2026
              </div>
              <h1 id="space-heading">
                다음 지구를 위한
                <br />
                <em>새로운 장바구니</em>
              </h1>
              <p>
                다음 지구에서 꼭 필요한 물건을 구입하세요
                <br />
                함께할 로봇부터 새로운 집과 우주선까지
              </p>
              <a href="#space-inventory" className="space-primary">
                궤도 밖 매물 둘러보기 <Icon name="arrow" />
              </a>
              <div className="space-hero-facts">
                <span>
                  <b>{String(SPACE_PRODUCTS.length).padStart(2, "0")}</b> 엄선한
                  매물
                </span>
                <span>
                  <b>01</b> 상품당 한 개
                </span>
                <span>
                  <b>∞</b> 상상력 한도
                </span>
              </div>
            </div>
            <button
              className="space-hero-photo"
              aria-label={`${featured.name} 상세보기`}
              onClick={() => setSelected(featured)}
            >
              <ProductPhoto product={featured} eager />
              <div className="space-hero-coordinate">
                28°36′N 80°36′W <span>LAUNCH SITE / 01</span>
              </div>
              <span className="space-featured-label">THIS WEEK’S ORBIT</span>
              <div className="space-featured-info">
                <div>
                  <span>지구 밖으로 출근하시는 분께</span>
                  <h2>{featured.name}</h2>
                  <strong>{formatKoreanMoney(featured.price)}</strong>
                </div>
                <span className="space-featured-arrow">
                  <Icon name="arrow" size={26} />
                </span>
              </div>
            </button>
          </section>

          <div className="space-marquee">
            <span>
              <Icon name="check" size={16} /> 실제 사진과 오리지널 콘셉트
            </span>
            <span>전 상품 단 한 개 · 선착순 장바구니</span>
            <span className="space-marquee-last">지구 배송은 협의하세요 ↗</span>
          </div>

          <section
            id="space-inventory"
            className="space-inventory"
            aria-labelledby="inventory-heading"
          >
            <div className="space-section-heading">
              <div>
                <span className="space-eyebrow">
                  THE COLLECTION / 001—
                  {String(SPACE_PRODUCTS.length).padStart(3, "0")}
                </span>
                <h2 id="inventory-heading">어떤 미래를 담아볼까요?</h2>
              </div>
              <p>상품을 눌러 작동 모습을 체험해 보세요</p>
            </div>
            <div className="space-controls">
              <div className="space-tabs" aria-label="매물 종류">
                {SPACE_CATEGORIES.map((item) => (
                  <button
                    key={item.id}
                    aria-pressed={category === item.id}
                    className={category === item.id ? "is-active" : ""}
                    onClick={() => setCategory(item.id)}
                  >
                    <Icon
                      name={
                        {
                          all: "grid",
                          aircraft: "plane",
                          rocket: "rocket",
                          satellite: "satellite",
                          internet: "internet",
                          phone: "phone",
                          robot: "robot",
                          drone: "drone",
                          carrier: "carrier",
                          assistant: "assistant",
                          building: "building",
                          wearable: "wearable",
                          gear: "gear",
                          food: "food",
                          land: "land",
                          living: "living",
                        }[item.id]
                      }
                      size={17}
                    />
                    {item.label}
                    <span>
                      {item.id === "all"
                        ? SPACE_PRODUCTS.length
                        : SPACE_PRODUCTS.filter(
                            (product) => product.category === item.id,
                          ).length}
                    </span>
                  </button>
                ))}
              </div>
              <div className="space-search">
                <Icon name="search" size={18} />
                <input
                  aria-label="우주마켓 매물 검색"
                  placeholder="비행기, 반려로봇, 가정도우미 검색"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
                {query && (
                  <button
                    aria-label="검색어 지우기"
                    onClick={() => setQuery("")}
                  >
                    <Icon name="close" size={15} />
                  </button>
                )}
              </div>
            </div>
            <div className="space-results-heading">
              <span>
                발견된 매물 <b>{visibleProducts.length}</b>
              </span>
              <label>
                <span className="sr-only">우주마켓 정렬</span>
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                >
                  <option value="curated">추천 매물순</option>
                  <option value="low">낮은 가격순</option>
                  <option value="high">높은 가격순</option>
                </select>
              </label>
            </div>
            <div className="space-product-grid">
              {visibleProducts.map((product, index) => (
                <article className="space-product" key={product.id}>
                  <button
                    className="space-product-photo"
                    aria-label={`${product.name} 상세보기`}
                    onClick={() => setSelected(product)}
                  >
                    <ProductPhoto product={product} eager={index < 3} />
                    <span className="space-product-tag">{product.tag}</span>
                    <span className="space-photo-open">매물 확인 ↗</span>
                  </button>
                  <div className="space-product-meta">
                    <span>{product.condition}</span>
                    <span>{product.location}</span>
                  </div>
                  <h3>
                    <button onClick={() => setSelected(product)}>
                      {product.name}
                    </button>
                  </h3>
                  <p className="space-product-subtitle">{product.subtitle}</p>
                  <div className="space-product-bottom">
                    <div>
                      <SpaceSalePrice product={product} />
                    </div>
                    <button
                      className={`space-add-button ${cart.hasItem(product.id) ? "is-added" : ""}`}
                      aria-label={`${product.name} ${cart.hasItem(product.id) ? "장바구니에 담김" : "장바구니에 담기"}`}
                      disabled={cart.hasItem(product.id)}
                      onClick={() => addToCart(product)}
                    >
                      <Icon
                        name={cart.hasItem(product.id) ? "check" : "plus"}
                      />
                      <span>{cart.hasItem(product.id) ? "담김" : "담기"}</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
            {!visibleProducts.length && (
              <div className="space-empty-search">
                <Icon name="satellite" size={44} />
                <h3>이 좌표에는 매물이 없네요</h3>
                <p>검색어나 종류를 바꿔 다른 궤도를 탐색해 보세요</p>
                <button
                  className="space-secondary"
                  onClick={() => {
                    setQuery("");
                    setCategory("all");
                  }}
                >
                  전체 매물 보기
                </button>
              </div>
            )}
          </section>

          <section className="space-note">
            <span className="space-note-number">017 / EARTH</span>
            <h2>
              예산은 현실에
              <br />
              <span>장바구니는 우주에</span>
            </h2>
            <div>
              <p>
                지구인 전용 가상 거래소입니다
                <br />
                상품 구성·사양·가격은 재미를 위한 설정이며,
                <br />
                실제 제품의 판매나 제조사의 공식 견적과는 무관합니다
              </p>
              <a
                href="/space-assets/CREDITS.md"
                target="_blank"
                rel="noreferrer"
              >
                이미지 출처 확인 ↗
              </a>
            </div>
          </section>
        </main>
        <footer className="space-footer space-shell">
          <a href="/" className="space-brand">
            <span className="space-brand-mark">◎</span>ORBIT MARKET
          </a>
          <span>AN UNLISTED CORNER OF PANDA MARKET</span>
          <p>© 2026 · 지구에서 만들었습니다</p>
        </footer>

        <aside
          className="space-cart-dock"
          aria-label="장바구니 합계"
          hidden={cart.count === 0}
        >
          <div>
            <span>{cart.count}개 확보 · 장바구니 합계</span>
            <AnimatedTotal total={cart.total} label="장바구니 합계 금액" />
          </div>
          <button className="space-primary" onClick={openCart}>
            장바구니 보기 <Icon name="arrow" />
          </button>
        </aside>
        {!selected && <CartNotice toast={toast} />}
      </div>

      {selected && (
        <Modal
          titleId="space-detail-title"
          onClose={() => setSelected(null)}
          className="space-detail-dialog"
        >
          <button
            className="space-dialog-close"
            aria-label="매물 상세 닫기"
            onClick={() => setSelected(null)}
          >
            <Icon name="close" />
          </button>
          <ProductDemo key={selected.id} product={selected} />
          <div className="space-detail-content">
            <span className="space-eyebrow">
              PRIVATE LISTING / {selected.id.toUpperCase()}
            </span>
            <h2 id="space-detail-title">{selected.name}</h2>
            <p className="space-detail-description">{selected.description}</p>
            <dl className="space-specs">
              {selected.specs.map((spec) => (
                <div key={spec.label}>
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
            <p className="space-delivery">
              <Icon name="check" size={17} /> 인도 전 점검 포함 · 등록 및 운송
              비용 별도 협의
            </p>
            <div className="space-detail-bottom">
              <div>
                <span>가상 매물 가격</span>
                <SpaceSalePrice product={selected} detail />
              </div>
              <button
                className="space-primary"
                disabled={cart.hasItem(selected.id)}
                onClick={() => addToCart(selected)}
              >
                <Icon name={cart.hasItem(selected.id) ? "check" : "cart"} />
                {cart.hasItem(selected.id)
                  ? "장바구니 확보 완료"
                  : "장바구니에 담기"}
              </button>
            </div>
            <CartNotice toast={toast} inline />
            <p className="space-photo-credit">
              {selected.generatedPhoto ? "실사형 콘셉트 이미지: " : selected.artwork ? "오리지널 콘셉트: " : "참고 사진: "}
              <a href={selected.photoSource} target="_blank" rel="noreferrer">
                {selected.photoCredit} ↗
              </a>{" "}
              · 설명과 사양은 가상 설정입니다
            </p>
          </div>
        </Modal>
      )}

      {cartOpen && (
        <Modal
          titleId="space-cart-title"
          onClose={() => setCartOpen(false)}
          className="space-cart-dialog"
        >
          <div className="space-cart-title-row">
            <div>
              <span className="space-eyebrow">YOUR PRIVATE COLLECTION</span>
              <h2 id="space-cart-title">
                {quoteReady ? "견적이 궤도에 올랐습니다" : "당신의 장바구니"}
              </h2>
            </div>
            <button
              className="space-icon-button"
              aria-label="장바구니 닫기"
              onClick={() => setCartOpen(false)}
            >
              <Icon name="close" />
            </button>
          </div>
          {cart.count ? (
            <>
              {quoteReady && (
                <div className="space-quote-banner">
                  <Icon name="check" size={27} />
                  <div>
                    <b>가상 견적서 준비 완료</b>
                    <p>결제는 없어요 상상력만 충분하면 됩니다</p>
                  </div>
                </div>
              )}
              <div className="space-cart-total">
                <span>{cart.count}개 상품 · 총 견적 금액</span>
                <AnimatedTotal total={cart.total} label="장바구니 총액" />
                <p>{formatWon(cart.total)}</p>
                <div>
                  <span>상상 배송비</span>
                  <b>무료</b>
                </div>
                <div>
                  <span>현실 결제 금액</span>
                  <b>0원</b>
                </div>
              </div>
              <div className="space-cart-items">
                {cart.cartItems.map((product) => (
                  <div className="space-cart-item" key={product.id}>
                    <ProductPhoto product={product} />
                    <div>
                      <h3>{product.name}</h3>
                      <span>수량 1개 · {product.condition}</span>
                      <strong>{formatKoreanMoney(product.price)}</strong>
                    </div>
                    {!quoteReady && (
                      <button
                        className="space-icon-button"
                        aria-label={`${product.name} 장바구니에서 삭제`}
                        onClick={() => cart.removeItem(product.id)}
                      >
                        <Icon name="close" size={17} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <p className="space-cart-joke">
                {cart.total >= PLANET_CLUB_TOTAL
                  ? PLANET_CLUB_MESSAGE
                  : cart.total >= 100_000_000_000
                    ? "금액은 크지만, 담을 때만큼은 마음 편하게"
                    : "일단 담아두세요 주차 공간은 나중에 생각합시다"}
              </p>
              {quoteReady ? (
                <button
                  className="space-primary space-full"
                  onClick={() => setCartOpen(false)}
                >
                  계속 우주 구경하기 <Icon name="arrow" />
                </button>
              ) : (
                <>
                  <button
                    className="space-primary space-full"
                    onClick={() => setQuoteReady(true)}
                  >
                    가상 견적서 만들기 <Icon name="arrow" />
                  </button>
                  <button className="space-clear-cart" onClick={cart.clearCart}>
                    장바구니 비우기
                  </button>
                </>
              )}
            </>
          ) : (
            <div className="space-empty-cart">
              <Icon name="cart" size={46} />
              <h3>아직 지구에 계시군요</h3>
              <p>
                마음에 드는 상품을 담아보세요
                <br />
                잔액 조회는 하지 않습니다
              </p>
              <button
                className="space-primary"
                onClick={() => setCartOpen(false)}
              >
                매물 둘러보기 <Icon name="arrow" />
              </button>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
}
