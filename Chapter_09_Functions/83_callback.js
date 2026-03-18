//A callback is a function passed as an argument in another function to be called later 


function runTest(testName, callback){
    let result = "pass";
    //100 lines
    callback(testName, result)   //it is always on last line of function
}

function onComplete(name, result){
    console.log(`${name} finished with ${result}`);
}


runTest("loginTest",onComplete);