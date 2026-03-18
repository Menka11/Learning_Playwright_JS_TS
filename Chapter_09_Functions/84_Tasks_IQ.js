//what is output

console.log(greet("Alice")); //Hello, Alice   -- c
function greet(name) {
  return `Hello, ${name}!`;
}

//2
// console.log(getStatus(200));
// const getStatus = (code) => code >= 200 ? "ok" : "error"; //reference error  --d

//3
function analyze(scores = []) {
  return scores.filter(s => s >= 70).length; //0  -- b 
}
console.log(analyze());

//4
function makeCounter() {
  let count = 0;
  return () => ++count;
}
let counter = makeCounter();
counter();
counter();
console.log("4-->",counter());  //3  -- c

//5 what is pure function? --- //b
// a) function log(msg) { console.log(msg); } 
// b) function add(a, b) { return a + b; } 
// c) function getTime() { return Date.now(); } 
// d) function push(arr, val) { arr.push(val); return arr; }

//6.
function test(...args) {
  return args.length;
}
console.log(test("login", "pass", 200, true));  //4 -- c

//7
const obj = {
  env: "staging",
  getEnv: () => {
    return this.env;  //arrow function does not have their own this context 
  }
};
console.log(obj.getEnv()); //undefined -- b

//8
function double(n) { return n * 2; } //[2, 4, 6]
function addOne(n) { return n + 1; } //[3, 5, 7]
[1, 2, 3].map(double).map(addOne);  //[3, 5, 7]  -- b 

//9
function run(fn) {
  return fn("Login");
}
console.log(run(name => `Running: ${name}`)); //Running: Login -- b

//10. 
function outer() {
  let x = 10;
  function inner() {
    let x = 20;
    return x;
  }
  return x + inner();
}
console.log(outer());  //30  --- b 

