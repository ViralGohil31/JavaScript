//crating an object

const person = {
    name: "Akshay",
    age: 25,
    greet: function() {
        console.log("Hello , My Name is", this.name)
    }
}


console.log(person.age);
person.greet();

//Define a class

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hi , I am ",this.name," and ",this.age," years old");
    }
}

const per = new PersonClass("Akshay",29);
per.greet();


//Add a method dynamically to a an object

person.sayBye = function() {
    console.log("Bye");
}

person.sayBye();

function createMachineUsingLiteralSyntax(name, status) {
    return {
        name,
        status
    };
}

console.log(createMachineUsingLiteralSyntax("Test", "running")); //{name: 'Test', status: 'running'}


