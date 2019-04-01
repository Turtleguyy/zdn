import Route from '@ember/routing/route'
import Parser from 'npm:rss-parser'

export default Route.extend({
  model() {
    return new Promise(function(resolve, reject) {
      let parser = new Parser()
      let proxy = 'https://crossorigin.me/'
      let url = `${proxy}https://codepen.io/Turtleguyy/public/feed`
      let feed = parser.parseURL(url).then((json) => {
        resolve(json)
      }, (error) => {
        reject(error)
      })
    })
  },

  setupController(controller, model) {
    let pens = []
    for (let item of model.items.slice(0, 9)) {
      pens.push(/.*pen\/(.*)/.exec(item.link)[1])
    }

    controller.set('pens', pens)
  },
})
