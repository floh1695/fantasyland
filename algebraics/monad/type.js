'use strict';

const S = require('stampit');

const MonadCore = require('./core');

const Monad = S(MonadCore)
  .methods({
    map(f) {
      return this._map(Monad, f);
    },
    ap(f) {
      return this._ap(Monad, f);
    },
    chain(f) {
      return this._chain(Monad, f);
    },
  })
  .statics({
    of(value) {
      return Monad._of(Monad, value);
    },
  });

module.exports = Monad;

