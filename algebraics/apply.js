'use strict';

const S = require('stampit');

const assert = require('../assert');
const Functor = require('./functor');

const Apply = S(Functor)
  .methods({
    ap(f) {
      // ap :: Apply f => f a ~> f (a -> b) -> f b
      return Apply(f._value(this._value));
    },
  })
  .statics({
    test() {
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
    }, 
 });

module.exports = Apply;

