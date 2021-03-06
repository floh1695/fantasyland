'use strict'

const assert = require('../../assert');

const applicativeTest = function(applicative) {
  require('../apply')
    .test(applicative);

  console.log('  Applicative Tests');

  const v = applicative(2);
  const u = applicative(x => x * 2);

  const x = 3;
  const y = 5;

  const i = x => x;
  const f = x => x + 1;

  assert('Applicative identity')
    (v
      .ap(applicative
          .of(i))
      .value())
    (v
      .value());

  assert('Applicative homomorphism')
    (applicative
      .of(x)
      .ap(applicative
        .of(f))
      .value())
    (applicative
      .of(f(x))
      .value());

  assert('Applicative interchange')
    (applicative
      .of(y)
      .ap(u)
      .value())
    (u
      .ap(applicative
        .of(f => f(y)))
      .value());
};

module.exports = applicativeTest;

