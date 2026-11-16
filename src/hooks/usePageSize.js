import { useState, useEffect } from "react";

function getPageSize(width, sizes) {
  if (width <= 767) {
    return sizes.mobile;
  } else if (width <= 1199) {
    return sizes.tablet;
  } else {
    return sizes.desktop;
  }
}

export default function usePageSize({ mobile, tablet, desktop }) {
  const [width, setwidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setwidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return getPageSize(width, { mobile, tablet, desktop });
}
