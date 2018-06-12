'use strict';

const assert = require('../../assert');

const contextTest = function(context) {
  console.log('  Context Tests');

  const value = 2;

  assert('Context')
    (context(value)
      .value())
    (value);
};

module.exports = contextTest;

