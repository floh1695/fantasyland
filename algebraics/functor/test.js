'use strict';

const assert = require('../../assert');

const functorTest = function(functor) {
  require('../context')
    .test(functor); 

  console.log('  Functor Tests');

  const u = functor(2)
  const i = x => x;
  const f = x => x * 2;
  const g = x => x + 1;

  assert('Functor identity')
    (u
      .map(i)
      .value())
    (u.value());

  assert('Functor composition')
    (u
      .map(g)
      .map(f)
      .value())
    (u
      .map(x => f(g(x)))
      .value());
};

module.exports = functorTest;

