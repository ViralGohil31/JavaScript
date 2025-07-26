//setTimeout(callback, delay, ...args)
//setInterval(callback, delay, ..args)
//clearTimeout(timeoutId) 
//clearInerval(timeoutId)


function delay(ms) {
    return new Promise(resolve=> setTimeout(()=> {
        console.log(" 2 secs time completed");
        resolve();
    }, 2000));
}


async function runDelay(){
    console.log("Wait for 2 secs");
    await delay(2000);
    console.log("2 second time passed");
}

// above example in which we are not passing any value to resolve method so it takes undefined as input parameter value
//In JavaScript, if you call a function without passing a value for one of its parameters, that parameter will automatically be assigned the value undefined.


