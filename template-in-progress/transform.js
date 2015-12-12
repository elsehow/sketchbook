module.exports = function (numbers) {
  return [
    numbers,
    numbers.slidingWindow(20)
  ]
}