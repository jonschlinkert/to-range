# to-range [![NPM version](https://badge.fury.io/js/to-range.svg)](http://badge.fury.io/js/to-range)

> Creates a range (array) from two numbers, negative or positive, with an optional step (increment).

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i to-range --save
```

## Usage

```js
var toRange = require('to-range');
```

## Examples

**supports positive ranges:**

```js
toRange(1, 5)
//=> [1, 2, 3, 4, 5]

toRange(4, 5)
//=> [4, 5]
```

**supports negative equal numbers**

```js
toRange(-1, -1)
//=> [-1]

toRange(-4, -4)
//=> [-4]
```

**supports equal numbers**

```js
toRange(1, 1)
//=> [1]

toRange(4, 4)
//=> [4]
```

**supports negative increasing numbers**

```js
toRange(-1, 1)
//=> [-1, 0, 1]

toRange(-2, 2)
//=> [-2, -1, 0, 1, 2]
```

**supports negative decreasing numbers**

```js
toRange(-1, -2)
//=> [-1, -2]

toRange(-2, -4)
//=> [-2, -3, -4]

toRange(-1, -5)
//=> [-1, -2, -3, -4, -5]
```

**supports decreasing ranges:**

```js
toRange(5, 1)
//=> [5, 4, 3, 2, 1]

toRange(9, 7)
//=> [9, 8, 7]
```

**supports steps:**

```js
toRange(1, 5, 2)
//=> [1, 3, 5]

toRange(1, 5, 3)
//=> [1, 4]

toRange(4, 5, 1)
//=> [4, 5]
```

**negative steps are converted to positive steps:**

```js
toRange(1, 5, -2)
//=> [1, 3, 5]

toRange(1, 5, -3)
//=> [1, 4]

toRange(4, 5, -1)
//=> [4, 5]
```

**ignores non-numeric steps:**

```js
toRange(5, 1, 'foo')
//=> [5, 4, 3, 2, 1]

toRange(9, 7, {})
//=> [9, 8, 7]
```

## Related projects

* [expand-range](https://github.com/jonschlinkert/expand-range): Fast, bash-like range expansion. Expand a range of numbers or letters, uppercase or lowercase. See… [more](https://github.com/jonschlinkert/expand-range)
* [fill-range](https://github.com/jonschlinkert/fill-range): Fill in a range of numbers or letters, optionally passing an increment or multiplier to… [more](https://github.com/jonschlinkert/fill-range)
* [repeat-element](https://github.com/jonschlinkert/repeat-element): Create an array by repeating the given value n times.
* [repeat-string](https://github.com/jonschlinkert/repeat-string): Repeat the given string n times. Fastest implementation for repeating a string.
* [to-regex-range](https://github.com/jonschlinkert/to-regex-range): Returns a regex-compatible range from two numbers, min and max. Useful for creating regular expressions… [more](https://github.com/jonschlinkert/to-regex-range)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/to-range/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on August 07, 2015._