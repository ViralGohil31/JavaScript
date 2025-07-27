function say(message = "Hi") {
    console.log(message);
}

say("Hello How are You"); //
say(); //Hi

function put(value, data=[]) {
    data.push(value);
    return data;
}

console.log(put("ABCD"));

function date(d = today()) {
    console.log(d);
}

function today() {
    return (new Date()).toLocaleDateString("en-US");

}

date();



// we can use defaultParameter to make the arguments mandatory. if caller doesn't pass any argument, we can throw an error.

function requiredArgument() {
    throw new Error("The argument is required");
}

function add(x=requiredArgument(), y=requiredArgument()) {
    return x+y;
}

// add(); //error
// add(10); //error
add(10,20); //30




let taxRate = () => 0.1;

let getPrice = function(price , tax = price * taxRate()) {
    return price + tax;
}

let fullPrice = getPrice(100); //110
console.log(fullPrice);
