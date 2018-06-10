'use strict';

const assert = require('../../assert');

const applyTest = function(apply) {
  console.log('  Apply Tests');

  const v = apply(2);
  const u = apply(x => x + 1);
  const a = apply(x => x * 2);

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
};

module.exports = applyTest;

