'use strict';
var api = require('./');
var assert = require('assert');

it('should handle falsy values', function() {
  assert(!api());
  assert(!api(null));
  assert(!api(void(0)));
  assert(!api(''));
  assert(!api(false));
});

it('should handle non string truthy values', function() {
  assert(!api({}));
  assert(!api(1));
  assert(!api(true));
  assert(!api(Math));
});

it('should handle hex code values', function() {
  assert(!api('fff'));
  assert(api('#fff'));
  assert(!api('#fffe'));
  assert(api('#FFFFFF'));
  assert(!api('#ABCFGH'));
  assert(api('#123456'));
});

it('should handle rgb & rgba values', function() {
  assert(!api(' rgb(122, 200, 222, 1)'));
  assert(api(' rgb(122, 200, 222)'));
  assert(!api(' rgb(100%, 200, 222)'));
  assert(api(' rgb(100%, 200%, 222%)'));
  assert(api('rgb(-100, 20, 111)'));
  assert(!api('rgba(-100, 20, 111)'));
  assert(!api('rgba(-100, 20, 111, .)'));
  assert(api('rgba(-100, 20, 111, .1)'));
  assert(api('rgba(-100, 20, 111, 1.1)'));
  assert(!api('rgba(-100, 20, 111, 1.)'));
  assert(api('rgba(-100, 20, 111, -22.4)'));
});

it('should handle hsl & hsla values', function() {
  assert(!api(' hsl(122, 200, 222, 1)'));
  assert(!api(' hsl(122, 200, 222)'));
  assert(!api(' hsl(122, 200, 222%)'));
  assert(api(' hsl(122, 200%, 222%)'));
  assert(api('hsla(122, 200%, 222%, 1)'));
});
