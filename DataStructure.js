// Array

let a = ["A", "B", "C"];

for(const [index, data] of a.entries()) {
    console.log("index : ", index, "data :", data);
}

  // sort an array of object

  let products = [
    {name: "Iphone", price: 900},
    {name: "Samsung", price: 100},
    {name: "Motorola", price: 200}
    ];

    function compareBy(propertyName) {
      return function(a, b) {
        let x = a[propertyName];
        let y = b[propertyName];

        if (x > y) {
          return 1;
        } else if (x < y) {
          return -1;
        } else {
          return 0;
        }
      };
    }


    products.sort(compareBy('name'));
    console.table(products);


    // put other objects into products array

    let otherProducts = [
      {name: "OnePlus", price: 300},
      {name: "Xiomi", price: 50}
    ]

    products.push(...otherProducts);

    console.log("Merged Products list");

    console.table(products);


    // get another array by combing the both the array products and otherProducts

    let results = [...products, ...otherProducts];

    console.table(results);


    // CRUD operations

    let students = [];
    students.push({ id: 1, name: "Alice"});
    students.push({ id: 2, name: "Jack"});
    students.push({ id: 3, name: "PushpaRaj"});
    students.push({ id: 3, name: "PushpaRaj123"});
    students.push({ id: 3, name: "PushpaRaj456"});
    students.unshift({ id: 0 , name: "BOB"}); // add at beginnng


    //Read
    console.log("FIRST student name", students[0].name);


    //Update
    students[0].name = "Bobby";

    //Delete
    // students.splice(1, 1); //rermove 1 item at index 1


    // Search & Filter

    const student = students.find(student => student.name === "PushpaRaj");
    console.log("student found : ", student);

    //filter multiple items

    const filterStudents = students.filter(student => (student.name === "Bobby" || student.name === "Jack"));

    console.log("Filtered students", filterStudents);


    // Get all the names of students in an array
    const names = students.map(student => student.name); //["Alice", "Jack" , "PushpaRaj", "BOB"]
    console.log("Names :", names);

    //Sort
     students.sort((a,b)=> a.name.localeCompare(b.name)); //sort the array by student name
     console.log("Sorted Array by name ", students);

    //loop
    students.forEach(student =>  console.log(student.name));


    //Remove duplicates
    const uniqueStudents = [
      ...new Map(students.map(student => [student.id, student])).values()
    ];

    console.log("unique students" , uniqueStudents);

//Map

// Map is key-value collection that  maintains the insertion order, allow any data types as key
// Map has better performance for frequent add/remove/lookups than plain objects.

const myMap = new Map();

//add or updating a value
myMap.set('name', 'Alice');
myMap.set(42, 'BOB');
myMap.set(true, 'Boolean');
myMap.set({id: 1}, 'object key');

//accessing the value
console.log(myMap.get(42));
console.log(myMap.get({id: 1}));


//check if key exists
console.log(myMap.has(42));


//deltete by key
myMap.delete(42);

//Getting the size
console.log(myMap.size);

//Iterate over the map
console.log("Iterating over map");
for (const [key,value] of myMap) {
  console.log(key, value);
}


// iterating over the key only
console.log("Iterating over map for keys only");
for (const key of myMap.keys()) {
  console.log('key : ', key);
}

// iterating over the values only
console.log("Iterating over map for values only");
for (const value of myMap.values()) {
  console.log('value : ', value);
}


//iterating key-value pair
console.log("Iterating using map entries");
for( const [key,value] of myMap.entries()) {
  console.log("key: ", key, "value :", value);
}

// convert array of objects to map of student by id

const studentsArray = [
  {id: 1, name: "ABCD"},
  {id: 2, name: "PQRS"}
];

const studentMap = new Map(studentsArray.map(student => [student.id, student]));
console.log(studentMap.get(2));

// convert back from map to array objects

const studentArray = Array.from(studentMap, ([key, value]) => ({
  ...value,
  key  // optionally include the original key
}));

//Set
