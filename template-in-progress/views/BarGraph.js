'use strict'

var h = require('virtual-dom/h')
  , main = require('main-loop')
  , _ = require('lodash')
  , LinScale = require('simple-linear-scale')


// a function that builds the graph from a list
// returns virtual-dom/h
function makeGraph (list) {

  var divHeight = 100

  var maxValue = _.max(list)

  var normalize = LinScale([0, maxValue], [0, divHeight])

  function drawMagnitude (mag) {
    return h('div.point', { style: {
        'height': normalize(mag) + 'px'
      , 'width': '1px' 
      , 'float': 'left'
      , 'padding':'1px' 
      , 'background-color': '#3ee'
      }
     })
    }

  function maxValueAxis (v) {
    return h('div', { style: {
      'position':'absolute'
    , 'bottom': '10px'
    , 'left': '0'
    , 'font-size': '8pt'
    , 'font-style': 'italic'
    , 'color': '#ccc'
    }}
    , v)
  }

  return h('div', { 
    style: {
       'overflow': 'hidden'
     , 'padding-bottom': '30px'
     , 'position': 'relative'
     , 'height': divHeight + 'px'
   }}, [
      list.map(drawMagnitude) 
    , maxValueAxis(maxValue)
  ])
}


module.exports = function () {
  // setup DOM
  var viewsEl = document.getElementById('views')
  var ourDiv = document.createElement('div')
  viewsEl.appendChild(ourDiv)
  // setup main-loop
  // `loop.update` will pass values to `makeGraph`
  var loop = main([], makeGraph, require('virtual-dom'))
  // now add loop to div
  ourDiv.appendChild(loop.target)
  // return handler and taredown methods
  return {
    handler: (x) => loop.update(x),
    taredown: () => viewsEl.remove(ourDiv),
  }
}

