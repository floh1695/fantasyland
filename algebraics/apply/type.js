'use strict';

const S = require('stampit');

const ApplyCore = require('./core');

const Apply = S(ApplyCore)
  .methods({
    map(f) {
      return this._map(Apply, f);
    },
    ap(f) {
      //return this._type(f._value(this._value));
      return this._ap(Apply, f);
    },
  });

module.exports = Apply;

