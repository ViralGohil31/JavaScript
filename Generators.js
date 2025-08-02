// ES6 introduces a new function that is different from a regular function: function generator or generator
// A generator can pause a midway and then continues from where it paused.


function* generate() {
    console.log("Invoked first time");
    yield 1;
    console.log("Invoked second time");
    yield 2;
}

let gen = generate();
let result = gen.next();
console.log(result); //{value: 1, done=false}

result = gen.next();
console.log(result); //{value: 2, done=false}

result = gen.next();
console.log(result); //{value: undefined, done=true}


//we can also able to iterate using for loop
for(const data of gen) {
    console.log("data",data);
}



// second example

function* forever() {
    let index = 0;
    while(true) {
        yield index++;
    }
}

let f = forever();
console.log(f.next());
console.log(f.next());


///Using Generator to implement Iterator

class Sequence {
    constructor( start=0, end= Infinity, interval = 1) {
        this.start = start;
        this.end = end;
        this.interval = interval;
    }

    *[Symbol.iterator]() {
        for( let index = this.start ; index <= this.end; index+=this.interval ) {
            yield index;
        }
    }
}



let oddNumbers = new Sequence(1, 10, 2);
for(const number of oddNumbers) {
    console.log(number);
}


//Using yield to return an array


function* yieldArray() {
    yield 1;
    yield [20, 30, 40, 50];
}

let y = yieldArray();

for (const no of yieldArray()) {
    console.log(no); //1 then [20,30,40,50]
}

// first call return {value: 1, done: false}
// second call return {value: [20,30,40,50] done:false}


// Using yield to retun individual element of an array

function* yieldArrayElemenets() {
    yield 1;
    yield* [10, 20, 30, 40, 50];
}

let a = yieldArrayElemenets();

console.log(a.next()); // {value: 1, done: false}
console.log(a.next()); // {value: 10, done: false}
console.log(a.next()); // {value: 20, done: false}
console.log(a.next()); // {value: 30, done: false}
console.log(a.next()); // {value: 40, done: false}
console.log(a.next()); // {value: 50, done: false}
console.log(a.next()); // {value: undefined, done: true}


// async generator

async function* asyncSequence(start , end) {
    for (let i= start; i<=end; i++) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(i);   
            }, 1000);
        });
    }
}

(async () => {
    let seq = asyncSequence(1, 30);

    for await (let no of seq) {
        console.log("async generator",no);       
    }
})();