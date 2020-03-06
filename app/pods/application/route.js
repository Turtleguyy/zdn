import Route from '@ember/routing/route'
import SunCalc from 'suncalc'
import $ from 'jquery'

export default Route.extend({
  latitude: 39.17791945096009,
  longitude: -94.5441925529041,

  // Yes yes, I'm fully aware this will only accurately calculate dawn/dusk
  // for my location. I really didn't want to ask people for their permission to
  // use their location anytime they simply visited my website. That'd be weird.
  model() {
    let now   = new Date().getTime()
    let times = SunCalc.getTimes(new Date(), this.latitude, this.longitude)
    let dawn  = times.dawn.getTime()
    let dusk  = times.dusk.getTime()
    let night = dusk < now && (dawn > now || dawn < dusk)

    return {
      style: night ? 'nighttime' : 'daytime',
    }
  },

  afterModel(model) {
    $('html').addClass(model.style)
  },
})
