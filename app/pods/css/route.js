import Route from '@ember/routing/route'
import Parser from 'npm:rss-parser'

export default Route.extend({
  model() {
    return new Promise(function(resolve, reject) {
      let parser = new Parser()
      let proxy = 'https://cors-anywhere.herokuapp.com/'
      let url = `${proxy}https://codepen.io/Turtleguyy/public/feed`
      let feed = parser.parseURL(url).then((json) => {
        resolve(json)
      }, (error) => {
        resolve([])
      })
    })
  },

  setupController(controller, model) {
    if (typeof model.items != "undefined" && model.items.length) {
      let pens = []
      for (let item of model.items.slice(0, 6)) {
        pens.push({
          code: /.*pen\/(.*)/.exec(item.link)[1],
          title: item.title,
        })
      }

      controller.set('pens', pens)
    }
  },
})
