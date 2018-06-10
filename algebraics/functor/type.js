'use strict';

const S = require('stampit');

const FunctorCore = require('./core');

const Functor = S(FunctorCore)
  .methods({
    map(f) {
      return this._map(Functor, f);
    },
  });

module.exports = Functor;

