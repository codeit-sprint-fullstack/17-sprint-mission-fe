import { useEffect, useRef, useState } from "react";

const DURATION_MS = 700;
const WON_STEP = 100_000_000;

export function useAnimatedAmount(target) {
  // 새로고침으로 복원된 금액은 0원부터 다시 세지 않습니다.
  const [displayedAmount, setDisplayedAmount] = useState(target);
  const currentAmount = useRef(target);

  useEffect(() => {
    const from = currentAmount.current;
    if (from === target) return;
    // 옷처럼 억 단위보다 작은 상품도 숫자가 부드럽게 올라갑니다.
    const step = Math.min(
      WON_STEP,
      10 ** Math.max(0, Math.floor(Math.log10(Math.abs(target - from))) - 1),
    );

    const motionPreference = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    );
    const startedAt = performance.now();
    let frameId;
    let cancelled = false;

    function updateAmount() {
      if (cancelled) return;
      const progress = motionPreference?.matches
        ? 1
        : Math.min(
            1,
            Math.max(0, (performance.now() - startedAt) / DURATION_MS),
          );
      const eased = 1 - (1 - progress) ** 3;
      const amount =
        progress === 1
          ? target
          : Math.min(
              Math.max(from, target),
              Math.max(
                Math.min(from, target),
                Math.round((from + (target - from) * eased) / step) * step,
              ),
            );

      currentAmount.current = amount;
      setDisplayedAmount(amount);
      if (progress < 1) frameId = requestAnimationFrame(updateAmount);
    }

    frameId = requestAnimationFrame(updateAmount);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frameId);
    };
  }, [target]);

  return displayedAmount;
}
