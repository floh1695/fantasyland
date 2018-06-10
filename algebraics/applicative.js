'use strict';

const S = require('stampit');

const assert = require('../assert');
const Apply = require('./apply');

const Applicative = S(Apply)
  .statics({
    of(value) {
      // of :: Applicative f => a -> f a
      return Applicative(value);
    },
  })
  .statics({
    test() {
      console.log('  Applicative Tests');

      const v = Applicative(2);
      const u = Applicative(x => x * 2);

      const x = 3;
      const y = 5;

      const i = x => x;
      const f = x => x + 1;

      assert('Applicative identity')
        (v
          .ap(Applicative
              .of(i))
          ._value)
        (v
          ._value);

      assert('Applicative homomorphism')
        (Applicative
          .of(x)
          .ap(Applicative
            .of(f))
          ._value)
        (Applicative
          .of(f(x))
          ._value);

      assert('Applicative interchange')
        (Applicative
          .of(y)
          .ap(u)
          ._value)
        (u
          .ap(Applicative
            .of(f => f(y)))
          ._value);
    },
  });

module.exports = Applicative;

