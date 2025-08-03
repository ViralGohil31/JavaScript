class Student {
    constructor(id, name, grade) {
        this.id = id;
        this.name = name;
        this.grade = grade;
    }


    display() {
        return `ID: ${this.id}, Name: ${this.name}, Grade: ${this.grade}`;
    }
}

async function mockFetchStudents() {
    const students = [
        new Student(1, 'Alice', 'A'),
        new Student(1, 'Bob', 'B'),
        new Student(2, 'Jack', 'C'),
        new Student(3, 'Dave', 'D')
      ];

    console.log("student data", JSON.stringify(students));

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(
                 new Response(JSON.stringify(students), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                  })
            );
        }, 3000);
    });
}

function getStudentUsingPromise() {
    const url = "https://api.example.com/students";

    //fetch(url)
    mockFetchStudents()
    .then((response) => {
        if(!response.ok) {
            throw new Error("Error while fetching students"); //this will caught by catch block
        }
        console.log("response",response);
        return response.json(); // this .json also return a promise ,as then always return a new promise but here we are already return a promise so it will adopt the state of already return prmoise and will return this prmoise only to next then
    })
    .then((data) => {
        console.log("data", data); // this waits until .json() resolves in previous .then 
        if(!Array.isArray(data)) {
            throw new Error("Invalid student data format"); //will get caught by catch block
        }
       
        return data.map((item) => new Student(item.id, item.name, item.grade)); // wrap the Student object into Promise
    })
    .then((students) => {
        console.log("Promise result");
        students.forEach((s) => console.log(s.display()));
    })
    .catch(error => {
        console.error("Error" , error.message);
    });
}

// below example using Async await


async function fetchStudentsUsingAsyncAwait() {
    const url = "https://api.example.com/students";
    try{
        //const response = await fetch(url);
        const response = await mockFetchStudents();
        if(!response.ok) {
            throw new Error("error while fetching students");
        }

        const data = await response.json();
        if(!Array.isArray(data)) {
            throw new Error("Unexpected response format");
        }
        
        const students = data.map((item)=> new Student(item.id, item.name, item.grade));
        console.log("Async-await result");
        students.forEach(student => console.log(student.display()));


    } catch(error) {
        console.error("Caught error", error.message);
    }
}

getStudentUsingPromise();

fetchStudentsUsingAsyncAwait();