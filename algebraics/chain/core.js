'use strict';

const S = require('stampit');

const ApplyCore = require('../apply').core;

const ChainCore = S(ApplyCore)
  .methods({
    _chain(type, f) {
      // chain :: Chain m => m a ~> (a -> m b) -> m b
      // TODO: verify that f returns a chain
      return f(this._value)
    },
  });

module.exports = ChainCore;

