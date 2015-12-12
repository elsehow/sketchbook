var EventEmitter = require('events').EventEmitter

var emitter = new EventEmitter()

var i = 0
setInterval(function () {
  i+=1
  emitter.emit('number', i % 20)
}, 300)

module.exports = function () {
  return [
    [ emitter, 'number' ]
  ]
}