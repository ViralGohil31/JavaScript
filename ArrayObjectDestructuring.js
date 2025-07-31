function getUsers() {
    // return array of objects
    return [
        {id: "1", FullName: "ABC", grade: "A"},
        {id: "2", FullName: "PQR", grade: "B"},
        {id: "3", FullName: "XYZ", grade: "C"},
        {id: "4", FullName: "QWE", grade: "A"},
        {id: "5", FullName: "TYU", grade: "B"},
        {id: "6", FullName: "FGH", grade: "C"},
        {id: "7", FullName: "RST", grade: "C"}
    ];
}

let [user1, user2, user3] = getUsers();

console.log({user1, user2, user3});

let[user4, user5, ...args] = getUsers();

console.log({user4, user5, args});

let users = getUsers();

let tenthUser = users[10] != undefined ? users[10] : {};

console.log({tenthUser});

function getItems() {
    return null;
}

let[a=10, b=20] = getItems() || []; //assigning with the default values with passing blank array if getItems returns a null or undefined
console.log(a); //10
console.log(b); //20



// Nested Array Destructuring

function getProfile() {
    return [
        "Viral",
        "Gohil",
        [
            "Mira Road",
            "Thane"
        ]
    ]
}

let [
    firstName,
    lastName,
    [
        addressLine1,
        addressLine2
    ]
] = getProfile();


console.log({firstName, addressLine1});

//Object destructuring

let employee = {
    id: 101,
    name: {
        firstName: "John",
        lastName: "Doe"
    }
};


let {
    id,
    name: {
        firstName1,
        lastName1
    }
} = employee;

console.log(firstName1);
console.log(id);


//Nested Array of Object destruction

function getUserProfile() {
    return [
        {id: "1", FullName: "Viral Gohil", grade: "A", address: [{city: "Mira Road", district: "Thane"}, {city: "Kandivali", district:"Mumbai"}]},
        {id: "2", FullName: "PQR", grade: "B", address: [{city: "Goregaon", district:"Mumbai"}]}
    ]
}

let [firstUser] = getUserProfile();

[{id, FullName, grade, address: [{city, district}] }] = getUserProfile(); // get first user with first address only

console.log("FullName ", FullName, "address City", city);


[{id, FullName, grade, address }] = getUserProfile(); //first user with both the address refer in address field

for(const {city, district} of address) {
    console.log("City", city, "district", district);
}


//Looping all the elements of userProfile

for(const {id, fullName, grade, address} of getUserProfile()) {
    console.log("Id : ", id, "FullName : ", fullName, "grade : ", grade);
    for(const {city, district} of address) {
        console.log("city : ", city, "district :", district);
    }
}