let scores = [90, 80, 70, 60];

for(const score of scores) {
    console.log(score);
}

//The arrays.entries() method returns both [index, element] in each iteration.

let ratings = [
    {user: "ABC", score: "A"},
    {user: "XYZ", score: "B"},
    {user: "PQR", score: "C"},
    {user: "STU", score: "D"}
];

for(const [index,rating] of ratings.entries()) {
    console.log("score" , rating.score, "User", rating.user);
}

//In-place Object destruction

let sum = 0;
for(const {score} of ratings) {
    sum += score;
}

console.log("sum ", sum);
