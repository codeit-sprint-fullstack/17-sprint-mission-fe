import { useEffect, useState } from 'react';

const TABLET_MIN_WIDTH = 768;
const DESKTOP_MIN_WIDTH = 1200;

function getDeviceType() {
  const width = window.innerWidth;
  if (width >= DESKTOP_MIN_WIDTH) return 'desktop';
  if (width >= TABLET_MIN_WIDTH) return 'tablet';
  return 'mobile';
}

function useDeviceType() {
  const [deviceType, setDeviceType] = useState(getDeviceType);

  useEffect(() => {
    const handleResize = () => setDeviceType(getDeviceType());

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
}

export default useDeviceType;
