'use strict';

const S = require('stampit');

const FunctorCore = require('../functor').core;

const ApplyCore = S(FunctorCore)
  .methods({
    _ap(type, f) {
      // ap :: Apply f => f a ~> f (a -> b) -> f b
      return this._map(type, f._value);
    },
  });

module.exports = ApplyCore;

