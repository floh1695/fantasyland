'use strict';

console.log('----Context----');
const ContextModule = require('./algebraics/context');
ContextModule.test(ContextModule.type);

console.log('----Functor----');
const FunctorModule = require('./algebraics/functor');
ContextModule.test(FunctorModule.type);
FunctorModule.test(FunctorModule.type);

console.log('----Apply----');
const ApplyModule = require('./algebraics/apply');
ContextModule.test(ApplyModule.type);
FunctorModule.test(ApplyModule.type);
ApplyModule.test(ApplyModule.type);

console.log('----Applicative----');
const ApplicativeModule = require('./algebraics/applicative');
ContextModule.test(ApplicativeModule.type);
FunctorModule.test(ApplicativeModule.type);
ApplyModule.test(ApplicativeModule.type);
ApplicativeModule.test(ApplicativeModule.type);

console.log('----Chain----');
const ChainModule = require('./algebraics/chain');
ContextModule.test(ChainModule.type);
FunctorModule.test(ChainModule.type);
ApplyModule.test(ChainModule.type);
ChainModule.test(ChainModule.type);

