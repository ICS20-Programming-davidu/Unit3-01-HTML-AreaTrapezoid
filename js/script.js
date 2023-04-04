 // Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin edited by david ukiri
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the surface area of a cube.
 */
function calculate () {
  // input
  let a = parseFloat(document.getElementById('Side a').value);
  let b = parseFloat(document.getElementById('Side b').value);
  let h = parseFloat(document.getElementById('Side h').value);

  // process
  let area = (a + b) * h / 2 ;
  // output
  document.getElementById('user-info').innerHTML = 'Area is: ' + area + ' cm²'
}
