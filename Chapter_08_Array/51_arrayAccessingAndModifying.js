//Accessing and modifying

let testStatus = ["pass","fail","skip"];
console.log(testStatus[0]);
console.log(testStatus);

console.log(testStatus.at(-1));   //last element
console.log(testStatus.at(-2));
console.log(testStatus.at(-3));
console.log(testStatus.at(-4));

// Modify
testStatus[1] = "blocked";
console.log(testStatus);

console.log(testStatus.length);