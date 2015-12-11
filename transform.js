var fftjs = require('fft-js')

function mags (list) {
  return fftjs.util.fftMag(
      fftjs.fft(list, 512))
}

function process (raws) {
  var ffts = raws
    .slidingWindow(512,512)
    .throttle(15)
    .map(mags)
    .map(m => m.slice(0,100))

// need
// - log
// - histogram

// do
// - no more open dev tools
// - remember shape like text editor
// - recent folders (that were successfully opened)
// - notification should re-turn-blue on save

// downstream
// - where to start - origin to endpoint?
// - whats the new user experience like?
// - 'new' template

  return [
    ffts
  ]
}

module.exports = process
