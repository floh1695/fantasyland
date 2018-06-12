'use strict';

const assert = require('../../assert');

const monadTest = function(monad) {
  require('../applicative')
    .test(monad); 
  require('../chain')
    .test(monad); 

  console.log('  Monad Tests');

  const a = 2;
 
  const f = x => monad(x * a);

  const m = monad(a);

  assert('Monad left identity')
    (monad
      .of(a)
      .chain(f)
      .value())
    (f(a)
      .value());

  assert('Monad right identity')
    (m
      .chain(monad.of)
      .value())
    (m
      .value()); 
};

module.exports = monadTest;

