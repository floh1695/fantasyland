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

const Functor = function (value) {
  return {
    _value: value,
    /* map :: Functor f => f a ~> (a -> b) -> f b */ 
    map: function (func) {
      return Functor(func(this._value));
    },
  };
};

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

