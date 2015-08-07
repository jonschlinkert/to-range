'use strict';

/* deps: mocha */
var assert = require('assert');
var should = require('should');
var toRange = require('./');

describe('toRange', function () {
  it('should return a single number:', function () {
    toRange(1).should.eql([1]);
    toRange(4).should.eql([4]);
  });

  it('should support positive ranges:', function () {
    toRange(1, 5).should.eql([1, 2, 3, 4, 5]);
    toRange(4, 5).should.eql([4, 5]);
  });

  it('should support equal numbers', function () {
    toRange(1, 1).should.eql([1]);
    toRange(4, 4).should.eql([4]);
  });

  it('should support negative equal numbers', function () {
    toRange(-1, -1).should.eql([-1]);
    toRange(-4, -4).should.eql([-4]);
  });

  it('should support negative increasing numbers', function () {
    toRange(-1, 1).should.eql([-1, 0, 1]);
    toRange(-2, 2).should.eql([-2, -1, 0, 1, 2]);
  });

  it('should support negative decreasing numbers', function () {
    toRange(-1, -2).should.eql([-1, -2]);
    toRange(-2, -4).should.eql([-2, -3, -4]);
    toRange(-1, -5).should.eql([-1, -2, -3, -4, -5]);
  });

  it('should support positive ranges:', function () {
    toRange(5, 1).should.eql([5, 4, 3, 2, 1]);
    toRange(9, 7).should.eql([9, 8, 7]);
  });

  it('should support steps:', function () {
    toRange(1, 5, 2).should.eql([1, 3, 5]);
    toRange(1, 5, 3).should.eql([1, 4]);
    toRange(4, 5, 1).should.eql([4, 5]);
  });

  it('should make negative steps positive:', function () {
    toRange(1, 5, -2).should.eql([1, 3, 5]);
    toRange(1, 5, -3).should.eql([1, 4]);
    toRange(4, 5, -1).should.eql([4, 5]);
  });

  it('should ignore non-numeric steps:', function () {
    toRange(5, 1, 'foo').should.eql([5, 4, 3, 2, 1]);
    toRange(9, 7, {}).should.eql([9, 8, 7]);
  });

  it('should throw an error when invalid args are passed:', function () {
    (function () {
      toRange();
    }).should.throw('expected start to be a number.');
  });
});
