'use strict';

console.log('----Functor----');
const FunctorModule = require('./algebraics/functor');
FunctorModule.test(FunctorModule.type);

console.log('----Apply----');
const ApplyModule = require('./algebraics/apply');
FunctorModule.test(ApplyModule.type);
ApplyModule.test(ApplyModule.type);

console.log('----Applicative----');
const ApplicativeModule = require('./algebraics/applicative');
FunctorModule.test(ApplicativeModule.type);
ApplyModule.test(ApplicativeModule.type);
ApplicativeModule.test(ApplicativeModule.type);

