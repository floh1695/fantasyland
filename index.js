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

const Apply = S(Functor, {
  methods: {
    ap(f) {
      // ap :: Apply f => f a ~> f (a -> b) -> f b
      return Apply(f._value(this._value));
    },
  },
});

(() => {
  console.log('  Apply Tests');

  const v = Apply(2);
  const u = Apply(x => x + 1);
  const a = Apply(x => x * 2);

  assert('Apply composition')
    (v
      .ap(u
        .ap(a
          .map(f => g => x => f(g(x)))))
      ._value)
    (v
      .ap(u)
      .ap(a)
      ._value);
})();

