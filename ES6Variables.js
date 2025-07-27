// 1. let vs var keyword

//In Es5, the scope of the variable either global or local. if you declare the variable inside function then scope of the variable is local and if declaring outside of the function then scope is global.
let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); //referecne x inside the block
}
console.log(x); // referecne x outside the block

// output of above = 20 10
//  when declaring the global keyword using the var keyword, we add that varible to the property list of the global object.
// in case of web browser, the global object is window.
// var a = 10; console.log(window.a); will print 10
// when declaring the variable using the let keyword, it will not attached to global object.
// let a = 10; console.log(window.a) // print undefined


// var allows us to redeclare a variable without any issue 
var counter = 10;
var counter;
console.log(counter); //10

//However, if you redeclare the variable with let keyword , you will get an error
let counter = 10;
let counter; //error



//2.  Temporal Dead zone
//The LEt variable have temporal Dead zone while the var variable don't.

//The Var Variable
//-> In the creational phase , the JavaScript engine assign storage space to var variables and immediately initialize them to undefined.
//Int the Execution phase, the JAvascript engine assign the var variables the values specified by the assignments if any ones Otherwise, the var variable remain undefined.


// The let variable
// Int the creational phase, The Javascript engine assign the storage space to the let variables but doesn't initialize the variables.
//      Referencing uninitialize variable will cause a ReferenceError.

// The let variable have the same execution phase ad the var variables.


// Constant Declaration in JavaScript
// Es5 provides the new way to declaring the constant using the const keyword.
// The const keyword create a read only reference to a value.
// Like a let keyword, the const keyword declares a blocked scope variables.
// However the blocked scope variables declared by the const keyword can't be reassined.
// The varaible declared by the let keyword are mutable means we can able to change the value
// The varaible declared by the const keyword are immutable means we can't reassign to different values.


// 3. JavaScript Const and Objects
// The const keyword ensures that the variable it creates is read only. However it doesn't mean that the actual value to which the const variable reference is immutable.
  const person = {name: "ABC"};
  person.name = "XYZ"; //ok
  console.log(person.name); // XYZ
// even though person variable is constant , you can change the value of it's property
// However you can reassign a value to the person constant lik this 
  person = {name: "XYZ"}; //Type error

// If you want the person object to be immutable , you have to freeze it by Object.freeze() method
 const person = Object.freeze({name: "ABC"});
 person.name = "XYZ"; //Type error

 // Note that Object.freeze() is shallow , meaning that it can freeze the properties of the object, not the object referenced by the properties.
// For example, the company object is constant and frozen.

const company = Object.freeze({
    name: 'ABC corp',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        zipcode: 95134
    }
});

//But the company.address object is not immutable, you can add a new property to the company.address object as follows:
company.address.country = 'USA';


