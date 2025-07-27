// JS allow us the new kind of parameter that has the prefix with three dots ...
// a rest paramter allows you to respresent an indefinite number of arguments as an array.



function sum(...args) {
    let total = 0;
    for (const a of args) {
        total+= a;
    }
    return total;
}

sum(1,2,3);




function totalSum(...args) {
    return args
    .filter(function(e) { return typeof e === 'number'})
    .map(function(e) {
        console.log("filtered value",e);
        return e;
    })
    .reduce(function(prev, curr) { return prev + curr;}, 0);
}

let result = totalSum(10, 'Hi', undefined, 20);
console.log("Result = ",result);


