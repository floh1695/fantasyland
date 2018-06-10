'use strict';

const R = require('ramda');
const S = require('stampit');

const assert = R.curry(function (testName, shouldBe, isThis) {
  if (isThis === shouldBe) {
    console.log('Passed:', testName);
  }
  else {
    console.error('Failed:', testName);
  }
});

const Functor = S({
  props: {
    _value: null,
  },
  init(value) {
    this._value = value;
  },
  methods: {
    map(f) {
      return Functor(f(this._value));
    },
  },
});

assert('Functor identity')
  (Functor(5)
    .map(x => x)
    ._value)
  (Functor(5)._value);
assert('Functor composition')
  (Functor(5)
    .map(x => x + 1)
    .map(x => x * 2)
    ._value)
  (Functor(5)
    .map(x => (x + 1) * 2)
    ._value);

