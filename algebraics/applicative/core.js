'use strict';

const S = require('stampit');

const ApplyCore = require('../apply').core;

const ApplicativeCore = S(ApplyCore)
  .statics({
    _of(type, value) {
      // of :: Applicative f => a -> f a
      return type(value);
    },
  });

module.exports = ApplicativeCore;

