'use strict';

const S = require('stampit');

const ApplicativeCore = require('../applicative').core;
const ChainCore = require('../chain').core;

const MonadCore = S(ApplicativeCore, ChainCore);

module.exports = MonadCore;

