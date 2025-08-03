function CallableFunctionAsk(question, yes, no) {
    if(confirm(question)) {
        yes();
    } else {
        no();
    }
}

function showOk() {
    alert("Ok!");
}

function showCancel() {
    alert("Cancel!");
}

let arrowFunction = (val1, val2) => {
    return val1 + val2;
}

CallableFunctionAsk("Do You Agree ?", showOk, showCancel);

CallableFunctionAsk("Arrow Function Ok !" , () => alert("Ok!") , () => alert("cancel!"));


alert("Result of arrow function : "+arrowFunction(10,10));

// Closure
// A closure is created when a function returns another function and that inner function accesses variables from the outer function 
// even after the outer function has finished executing.


function outer() {
    let counter = 0;

    return function inner() {
        count++;
        console.log("Counter: ", counter);
    };
}

const counter = outer();
counter(); //1
counter(); //2
counter(); //3


function createCounter() {
    let count = 0;

    return {
        increment: () => count++,
        decrement: () => count--,
        get: () => count,
        reset: () => count = 0
    };
}


const count = createCounter();
console.log(count.increment()); //1
console.log(count.increment()); //2
console.log(count.get()); //2
count.reset() //0



