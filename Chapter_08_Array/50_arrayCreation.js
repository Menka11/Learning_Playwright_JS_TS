//Array

let fruits = [];  //empty array
let fruitsFresh = ['Apple','Banana','Orange','Kiwi'];
//length = 4 and index 0,1,2,3

let arr = [10,20,30,40]; //0-3: length = 4
console.log(arr.length);
//length is propoerty of an array
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[4]); //undefined

let testResults = ["Pass", "Fail","Pass","Skip"];
let mixed = [1,"hello",true, null]; //JS array allow to multiple types in one array

// // Array constructor
let scores = new Array(3); //create 3 empty array
let scores2 = new Array(1,2,3); //create [1,2,3]

let numbers = new Array(100,200,300,400);
console.log(numbers);

let test = Array.of(10,20,30,40,50);
console.log(test);
console.log(test[0]);

let chars = Array.from("Hello"); // gives chars from string 
console.log(chars); //['H','e','l','l','o']
