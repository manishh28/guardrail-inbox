import test from 'node:test'; import assert from 'node:assert/strict';
function fingerprint(action){return JSON.stringify({type:action.type,target:action.target,amount:action.amount});}
function approve(action){action.approvedFingerprint=fingerprint(action);action.status='approved';}
function execute(action){if(action.status!=='approved')return {ok:false,reason:'not-approved'};if(action.approvedFingerprint!==fingerprint(action))return {ok:false,reason:'action-hash-mismatch'};action.status='executed';return {ok:true};}
test('tampering after approval is blocked',()=>{const a={type:'Refund',target:'Order 1',amount:'250'};approve(a);a.amount='2500';assert.deepEqual(execute(a),{ok:false,reason:'action-hash-mismatch'});});
test('approved action can execute only once',()=>{const a={type:'Refund',target:'Order 1',amount:'250'};approve(a);assert.deepEqual(execute(a),{ok:true});assert.deepEqual(execute(a),{ok:false,reason:'not-approved'});});
