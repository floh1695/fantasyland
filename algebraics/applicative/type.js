'use strict';

const S = require('stampit');

const ApplicativeCore = require('./core');

const Applicative = S(ApplicativeCore)
  .methods({
    map(f) {
      return this._map(Applicative, f);
    },
    ap(f) {
      return this._ap(Applicative, f);
    },
  })
  .statics({
    of(value) {
      return ApplicativeCore._of(Applicative, value);
    },
  });

module.exports = Applicative;

