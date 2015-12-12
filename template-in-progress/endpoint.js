var Log = require('./views/Log.js')
var BarGraph = require('./views/BarGraph.js')
var Histogram = require('./views/Histogram.js')

module.exports = function () {

  var log1 = Log()
  var b = BarGraph()
  var h = Histogram(100)
  var log2 = Log()

  return {

    handlers: [

      // handler for the first stream
      function (x) {
        log1.handler(x)
        h.handler(x)
        // one more handler here
      },

      // // handler for the second stream
      function (y) {
        b.handler(y)
        log2.handler(y)
      }

    ],

   // taredown function 
   taredown: () => {
      log1.taredown()
      b.taredown()
      log2.taredown()
      h.taredown()
   }
 }
}
