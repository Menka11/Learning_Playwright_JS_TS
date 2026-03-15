//Arrow function (ES6)


//if you want to convert normal function to arrow function 
//remove the keyword function, remove the keyword return, remove curly braces, and add => 

const greet1 = (name) => `Hello, ${name}`;
console.log(greet1("Jenny"));

const doubleIt = n => n * 2;
console.log(doubleIt(2));

const getEnv = () => "staging";
console.log(getEnv());


const getResult = score => {
    if(score >= 70) return "pass";
    return "fail";
}
console.log(getResult(80));


