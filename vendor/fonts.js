'use strict'

window.WebFontConfig = {
  google: {
    families: [
      'Merriweather:300:latin',
      'Lora'
    ]
  }
};

;(function (d) {
  var el = d.createElement('script')
  var s = d.scripts[0]
  el.async = 1
  el.src = 'https://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.24/webfontloader.js'
  s.parentNode.insertBefore(el, s)
})(document)
