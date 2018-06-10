'use strict';

const assert = require('../../assert');

const functorTest = function(functor) {
      console.log('  Functor Tests');

      const u = functor(2)
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
};

module.exports = functorTest;

