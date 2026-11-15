import { useState, useEffect } from 'react';

const getBreakpoint = (width) => {
  if (width >= 1200) return 'pc';
  if (width >= 768) return 'tablet';
  return 'mobile';
};

export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(() =>
    getBreakpoint(window.innerWidth),
  );

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
}
