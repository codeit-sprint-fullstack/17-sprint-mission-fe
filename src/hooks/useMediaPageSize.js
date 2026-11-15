import { useEffect, useState } from "react";

const getWidth = () =>
  typeof window === "undefined" ? 1200 : window.innerWidth;

export default function useMediaPageSize() {
  const [width, setWidth] = useState(getWidth);

  useEffect(() => {
    const update = () => setWidth(getWidth());
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const device = width < 768 ? "mobile" : width < 1200 ? "tablet" : "desktop";
  return {
    device,
    pageSize: device === "mobile" ? 6 : device === "tablet" ? 9 : 10,
    bestPageSize: device === "mobile" ? 1 : device === "tablet" ? 2 : 4,
  };
}
