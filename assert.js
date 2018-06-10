'use strict';

const R = require('ramda');

const assert = R.curry(function (testName, shouldBe, isThis) {
  if (isThis === shouldBe) {
    console.log('Passed:', testName);
  }
  else {
    console.error('Failed:', testName);
  }
});

module.exports = assert;

