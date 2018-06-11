'use strict';

const S = require('stampit');

const ChainCore = require('./core');

const Chain = S(ChainCore)
  .methods({
    map(f) {
      return this._map(Chain, f);
    },
    ap(f) {
      return this._ap(Chain, f);
    },
    chain(f) {
      return this._chain(Chain, f);
    },
  });

module.exports = Chain;

