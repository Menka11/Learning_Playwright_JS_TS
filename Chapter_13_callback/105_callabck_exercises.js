function greetTester(name, callback){
    console.log("Welcome," + name);
    callback();   
}

greetTester("Dev", function(){
    console.log("Let's start testing");
});


//example-2

function runTest(testName, callback){
    let status = 'PASS';
    callback(testName, status);
}
runTest("Login Test",function(name, result){
    console.log(name + "->" + result);
});


function calculate(a, b, operation){
    return operation(a, b);
}

let sum = calculate(10, 5, function (x, y){
    return x + y;
});

console.log(sum);

console.log("A: Test suite started");

setTimeout(function(){
    console.log("B: Slow API test finished");
},1000);

console.log("C: Fast Unit test finished");