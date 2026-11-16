import { useSyncExternalStore } from "react";

const TABLET_QUERY = "(min-width: 744px)";
const DESKTOP_QUERY = "(min-width: 1200px)";
const LAYOUTS = {
  mobile: { size: "mobile", pageSize: 4, bestPageSize: 1, columns: 2 },
  tablet: { size: "tablet", pageSize: 6, bestPageSize: 2, columns: 3 },
  desktop: { size: "desktop", pageSize: 10, bestPageSize: 4, columns: 5 },
};

function getSize() {
  if (typeof window === "undefined") return "mobile";
  if (typeof window.matchMedia !== "function") {
    return window.innerWidth >= 1200
      ? "desktop"
      : window.innerWidth >= 744
        ? "tablet"
        : "mobile";
  }
  if (window.matchMedia(DESKTOP_QUERY).matches) return "desktop";
  return window.matchMedia(TABLET_QUERY).matches ? "tablet" : "mobile";
}

function subscribe(onChange) {
  if (typeof window.matchMedia !== "function") {
    window.addEventListener("resize", onChange);
    return () => window.removeEventListener("resize", onChange);
  }

  const mediaQueries = [
    window.matchMedia(TABLET_QUERY),
    window.matchMedia(DESKTOP_QUERY),
  ];
  mediaQueries.forEach((query) => query.addEventListener("change", onChange));
  return () =>
    mediaQueries.forEach((query) =>
      query.removeEventListener("change", onChange),
    );
}

export function useResponsivePageSize() {
  const size = useSyncExternalStore(subscribe, getSize, () => "mobile");
  return LAYOUTS[size];
}
