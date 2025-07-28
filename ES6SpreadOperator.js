function spreadOperatorDemo() {
    data = [1,2,3];
    finalData = [...data, 4,5,6]
    console.log(finalData); // 1,2,3,4,5,6
}

function restDemo(a,b,...args) {
    console.log(args); //3,4,5
}

spreadOperatorDemo();
restDemo(1,2, [3,4,5]);