import { useSyncExternalStore } from "react";

const BREAKPOINTS = { mobile: 375, tablet: 774 };

function getPageSize() {
  if (window.matchMedia(`(max-width: ${BREAKPOINTS.mobile}px)`).matches) return 4;
  if (window.matchMedia(`(max-width: ${BREAKPOINTS.tablet}px)`).matches) return 6;
  return 10;
}

function subscribe(onChange) {
  const mobile = window.matchMedia(`(max-width: ${BREAKPOINTS.mobile}px)`);
  const tablet = window.matchMedia(`(max-width: ${BREAKPOINTS.tablet}px)`);

  mobile.addEventListener("change", onChange);
  tablet.addEventListener("change", onChange);
  return () => {
    mobile.removeEventListener("change", onChange);
    tablet.removeEventListener("change", onChange);
  };
}

export default function usePageSize() {
  return useSyncExternalStore(subscribe, getPageSize);
}
