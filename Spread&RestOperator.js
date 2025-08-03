function spreadOperatorDemo() {
    data = [1,2,3];
    finalData = [...data, 4,5,6]
    console.log(finalData); // 1,2,3,4,5,6
}

function restDemo(a,b,...args) {
    console.log(args); //3,4,5
}

spreadOperatorDemo();
restDemo(1,2, [3,4,5]);


// Spread operator (Expansion)

//Spread in arrays

const arr1 = [1,2,3,4]
const arr2 = [...arr1, 5,6,7,8]

//Spread in objects

const user = { name: "Alice", age: 25};
const updatedUser = {...user, city: "Mumbai"};

console.log(updatedUser);


// Rest Operator (Collection)

// Rest in functional parameter

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



function sum(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1,2,3,4,5))

// Rest in Array destruction

const [first, second, ...remainning] = [10,20,30,40,50,60];
console.log(first);
console.log(second);
console.log(remainning);

//Rest in object destruction

const person = {name: "Viral", id: 1, age: 32 , city: "Mumbai"};
const {name, age, ...rest} = person;
console.log(name);
console.log(age);
console.log(rest);

// Real world use cases


// 1. Merging the object

 const currentState = {user: "ABC", LoggedIn: false};
 const updatedState = {...currentState, LoggedIn: true};

 console.log(updatedState); // {user: "ABC", LoggedIn: true}

 // 2. Removing the properties from an object

 const {password, ...safeUser} = {
    password: "Password@123",
    id: 1,
    UserName: "Viral",
    Role : "Admin"
 };

 console.log(safeUser);  //{id:1, UserName: "Viral", "Role": "Admin"}

 // combing the array
 const array1 = [{userName: "Hello"} , {userName: "World"}];

 const array2 = [{userName: "HelloJavaScript"}]

 const combineResult = [...array1, ...array2];

 console.log(combineResult);

