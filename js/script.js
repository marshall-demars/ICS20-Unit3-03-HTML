// Created by: Marshall
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-04-HTML/sw.js", {
    scope: "/ICS2O-Unit3-04-HTML/",
  })
}

'use strict'

/**
 * This function calculates area of a triangle.
 */
function calculate () {
  // input
  const radius = parseFloat(document.getElementById('radius-sphere').value)

  // process
  const volume = 4/3 * Math.PI * Math.pow(radius, 3)

  // output
  document.getElementById('volume').innerHTML = 'Area of the sphere is: ' + volume.toFixed(2) + ' km³'
}