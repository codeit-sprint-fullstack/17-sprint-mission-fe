import { useEffect, useState } from "react";

export function useMarketplaceLayout() {
  const [layout, setLayout] = useState(() => getLayout(window.innerWidth));

  useEffect(() => {
    const updateLayout = () => setLayout(getLayout(window.innerWidth));
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return layout;
}

function getLayout(width) {
  if (width < 744) return { type: "mobile", bestPageSize: 1, productPageSize: 6 };
  if (width < 1200) return { type: "tablet", bestPageSize: 2, productPageSize: 6 };
  return { type: "desktop", bestPageSize: 4, productPageSize: 10 };
}
