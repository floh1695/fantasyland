'use strict'

const assert = require('../../assert');

const chainTest = function(chain) {
  console.log('  Applicative Tests');

  const m = chain(2);

  const f = x => chain(x + 1);
  const g = x => chain(x * 2);

  assert('Chain associativity')
    (m
      .chain(f)
      .chain(g)
      .value())
    (m
      .chain(x => f(x).chain(g))
      .value())
};

module.exports = chainTest;

