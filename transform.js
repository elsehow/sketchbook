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
    .map(ms => ms.slice(0,40))

  return [
    ffts
  ]
}

module.exports = process