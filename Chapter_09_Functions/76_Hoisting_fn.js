//Hoisting
// Function declartions are hoisted
// You can call them before they're call
// Function expressions and arrow functions are Not 

greet("Alice");  //Declaration - declaring hoisted works before definition

function greet(name){
    retrun `Hello, ${name}`;
}

//Type error: sayHi is not a function 
sayHi("Bob"); 

const sayHi = function (name){
    return `Hi, ${name}!`;
}