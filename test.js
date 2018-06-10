'use strict';

console.log('----Functor----');
const FunctorModule = require('./algebraics/functor');
FunctorModule.test(FunctorModule.type);

console.log('----Apply----');
const ApplyModule = require('./algebraics/apply');
FunctorModule.test(ApplyModule.type);
ApplyModule.test(ApplyModule.type);

// require('./algebraics/applicative')
  // .test();

