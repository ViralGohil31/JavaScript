// OR || operator
// || returns the first truthy value
// Treats the falsy value (false, 0, "", null, undefined, NaN) as missing.
// Use When , you want to fall back if a value is falsy, not just null/undefined.


let count = 0 || 10; //10 because value 0 is falsy
console.log(count);

let value;
value ||='Not Available';
console.log(value);

// Nullish Coalescing (??)
// Returns the first value that is not null or undefined
// keeps 0, "" and false as valid values.
// Use When, You want to fall back only when a value is null or undefined.
// This is safer when 0 or "" are legitimate values

let name = "" ?? "Guest"; // ""
console.log(name); //""




