var fftjs = require('fft-js')

function mags (list) {
  return fftjs.util.fftMag(
      fftjs.fft(list, 512))
}

module.exports = (raws) => {
  var ffts = raws
    .slidingWindow(512,512)
    .throttle(15)
    .map(mags)
    .map(m => m.slice(5,40))

// need
// -dry-er histogram v. bargraph
// - optional fields/colors for views
// - break out spectral charms

// think about
// - a 'reset' button?
// - taredown() when we load a new file
// - to catch a runtime errors?

// do
// - recent folders (that were successfully opened)
// - setup script for new project..

// downstream
// - whats the new user experience like?
// - where to start? origin to endpoint?

  return [
    ffts
  ]
}
