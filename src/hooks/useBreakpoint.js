import { useState, useEffect } from 'react';

function getBreakpoint(width) {
  if (width >= 1200) return 'pc';
  if (width >= 768) return 'tablet';
  return 'mobile';
}

export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(() =>
    getBreakpoint(window.innerWidth),
  );

  useEffect(() => {
    let timer;

    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setBreakpoint(getBreakpoint(window.innerWidth));
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  return breakpoint;
}
