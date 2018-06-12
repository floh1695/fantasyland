'use strict';

const R = require('ramda');

const testModule = R.curry(function(moduleName) {
  console.log(`--- ${moduleName} ---`);

  const Module = require(`./algebraics/${moduleName}`);
  Module.test(Module.type);

  console.log();
});

testModule('context');
testModule('functor');
testModule('apply');
testModule('applicative');
testModule('chain');
testModule('monad');

