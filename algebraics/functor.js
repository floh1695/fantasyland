'use strict';

const S = require('stampit');

const assert = require('../assert');

const Functor = S({
  props: {
    _value: null,
  },
  init(value) {
    this._value = value;
  },
  methods: {
    map(f) {
      // map :: Functor f => f a ~> (a -> b) -> f b
      return Functor(f(this._value));
    },
  },
});

(() => {
  console.log('  Functor Tests');

  const u = Functor(2)
  const i = x => x;
  const f = x => x * 2;
  const g = x => x + 1;
 
  assert('Functor identity')
    (u
      .map(i)
      ._value)
    (u._value);

  assert('Functor composition')
    (u
      .map(g)
      .map(f)
      ._value)
    (u
      .map(x => f(g(x)))
      ._value);
})();

module.exports = Functor;

