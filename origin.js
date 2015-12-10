var eegSimulator = require('./lib/eeg-simulator.js')

function setup () {
  var emitter = eegSimulator()
  return [ 
    [ emitter, 'raw' ]
  ]
}

module.exports = setup