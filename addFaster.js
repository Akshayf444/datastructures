const performance = require('perf_hooks').performance;
function addNumberAlgo(n){
    return n * (n + 1)/2
}
let n = 10000000;
let t3 = performance.now();
console.log(addNumberAlgo(n));
let t4 = performance.now();
console.log(t4-t3/1000);