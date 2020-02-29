const performance = require('perf_hooks').performance;
function addNumberUpTo(n){
    let total = 0;
    for(let i = 0 ;i <= n;i++){
        total = total + i;
    }
    return total;
}

let n = 10000000;
let t1 = performance.now();
console.log(addNumberUpTo(n));
let t2 = performance.now();
console.log(t2-t1/1000);

