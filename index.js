/*!
 * to-range <https://github.com/jonschlinkert/to-range>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isNumber = require('is-number');

module.exports = function toRange(start, stop, step) {
  if (!isNumber(start)) {
    throw new TypeError('expected start to be a number.');
  }
  if (!isNumber(stop)) {
    return [start];
  }
  if (typeof step !== 'undefined' && !isNumber(step)) {
    step = 1;
  }

  if (start === stop) return [start];

  step = Math.abs(step || 1);
  var arr = new Array(Math.round(Math.abs(stop - start) / step));
  var num = 0;

  for (var i = start; start > stop ? i >= stop : i <= stop; start > stop ? i -= step : i += step) {
    arr[num++] = i;
  }
  return arr;
};
