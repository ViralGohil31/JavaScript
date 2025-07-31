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


function getUserProfile() {
    return [
        {id: "1", FullName: "ABC", grade: "A", address: ["Mira Road", "Thane"]},
        {id: "2", FullName: "PQR", grade: "B", address: ["Kandivali", "Mumbai"]}
    ]
}





