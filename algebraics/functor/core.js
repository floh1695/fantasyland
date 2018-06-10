'use strict';

const S = require('stampit');

const ContextCore = require('../context').core;

const FunctorCore = S(ContextCore)
  .methods({
    // map :: Functor f => f a ~> (a -> b) -> f b
    _map(type, f) {
      return type(f(this._value));
    }
  });

module.exports = FunctorCore;

