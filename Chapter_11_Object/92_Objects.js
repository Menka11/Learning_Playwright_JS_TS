//collection of key-value pairs
let students1 = {name: "Jenny", age: 25};
console.log(students1);
console.log(students1["name"]);

// JSON have " " in key EX. "name"

console.log(students1.age);
let a = {status: "Pass"};
console.log(a.status); 
//keys are case sensitive 

//object assign to another object it copy the reference 
let b = a;
b.status = "fail";
console.log(a.status);


const user = {
    name: "Jenny",
    age: 25,
    email: "jenny@gmail.com"
}
const key = "age";
console.log(user);

user.name="abc";
console.log(user);


