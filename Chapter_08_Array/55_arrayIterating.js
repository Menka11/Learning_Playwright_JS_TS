let tests = ["login","checkout","search"];

for(let i = 0;i < tests.length; i++){
    console.log(tests[i])
}

console.log("-----");

//for..of (cleanest for values)
for(let test of tests){
    console.log(test); //value
}

console.log("-----");

//forEach (no return value)
tests.forEach((test,index) =>{
    console.log(`${index}: ${test}`);
});

console.log("-----");

for(let [i, test] of tests.entries()){
    console.log(i, test);
}

console.log("----");

let students = ["methis", "senthil", "ajay","rahul"];

for(let student in students){ //for..in gives index
    console.log(student," -> ", students[student]);
}