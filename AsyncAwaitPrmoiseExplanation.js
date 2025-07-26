// async makes function to return to Promise.
//  await pauses the function until the promise is resolved or rejected.
//  try,, catch is used to catch errors thrown by awaited functions.
//  async function in JS always returns a Promise, regardless of what you return inside it.



 async function example() {
    return 123;
 }

 //above function returns a Prmoise that resolve with the value 123 , like this

 example().then(value => console.log(value));



//above example eqivalent version using Promise

function example() {
    Promise.resolve(123);
}


//OR

function example() {
    return new Promise((resolve, reject) => {
        resolve(123);
    });
}

//what if it throws an error

async function riskyOperation(){
    const random = Math.random();

    if(random >0.5) {
        return "Sucess : Got the data!!";
    } else {
        throw new Error("Failure ! Something went wrong");
    }
}


riskyOperation()
.then(result=> console.log(result))
.catch(error => {
    console.error("caught error", error.message);
});
;

// call riskyOperation using try catch in sync function


async function handleRiskyOperation() {
    try {
        const result = await riskyOperation();
        console.log("Result", result);
    } catch(error){
        console.error("Caught error", error.message);
    }
}

//run it
handleRiskyOperation();


// HTTP fetchAPI also return a prmoise in return 
