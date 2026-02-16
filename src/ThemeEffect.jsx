import { useEffect } from 'react'
import SunCalc from 'suncalc'

const LATITUDE = 39.17791945096009
const LONGITUDE = -94.5441925529041

export function ThemeEffect() {
  useEffect(() => {
    const now = Date.now()
    const times = SunCalc.getTimes(new Date(), LATITUDE, LONGITUDE)
    const dawn = times.dawn.getTime()
    const isNight = now < dawn

    if (isNight) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return null
}
