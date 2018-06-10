'use strict';

const S = require('stampit');

const ContextCore = S()
  .props({ _value: null, })
  .init(function(value) {
    this._value = value;
  })
  .methods({
    value() {
      return this._value;
    },
  });

module.exports = ContextCore;

