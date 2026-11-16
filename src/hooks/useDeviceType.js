import { useEffect, useState } from 'react'

const TABLET_MIN = 744
const PC_MIN = 1200

function getDeviceType() {
  const width = window.innerWidth
  if (width >= PC_MIN) return 'pc'
  if (width >= TABLET_MIN) return 'tablet'
  return 'mobile'
}

export function useDeviceType() {
  const [deviceType, setDeviceType] = useState(getDeviceType)

  useEffect(() => {
    const handleResize = () => setDeviceType(getDeviceType())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return deviceType
}
