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


