import Route from '@ember/routing/route'
import { getSunrise, getSunset } from 'sunrise-sunset-js'

export default Route.extend({
  latitude: 39.17791945096009,
  longitude: -94.5441925529041,

  // Yes yes, I'm fully aware this will only accurately calculate sunrise/sunset
  // for my location. I really didn't want to ask people for their permission to
  // use their location anytime they simply visited my website. That'd be weird.
  model() {
    let sunrise = getSunrise(this.latitude, this.longitude)
    let sunset  = getSunset(this.latitude, this.longitude)

    let now = new Date().getTime();
    let nighttime = now > sunset.getTime() && now < sunrise.getTime()
    return {
      style: nighttime ? 'dark-mode' : ''
    }
  },
})
