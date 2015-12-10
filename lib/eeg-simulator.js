var EventEmitter = require('events').EventEmitter
  , _ = require('lodash')

// returns an emitter
// that gives a 'raw' value every 2 ms
function eegEmitter () {
  var emitter = new EventEmitter()
  // push a piece of raw data every 2 ms
  var raw_data = _.flatten(require('./raw-neurosky-data.js'))
  raw_data.forEach(function (r, i) {
    setTimeout(function () {
      emitter.emit('raw', r)
    }, 2*i)
  })
  return emitter
}

module.exports = eegEmitter