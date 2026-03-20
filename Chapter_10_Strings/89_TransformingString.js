let str = " Hello, World! ";

console.log(str.toUpperCase());
console.log(str.toLowerCase());

//trim 
console.log(str.trim());

console.log(str.trimStart());
console.log(str.trimEnd());

//replace
let msg = "Test: FAIL. Retry: FAIL";
console.log(msg.replace("FAIL","PASS")); //first matched is replaced
console.log(msg.replaceAll("FAIL","PASS")); //all matched is replaced

console.log(msg.replace(/FAIL/g,"PASS")); //g in regex means it is global 
// console.log(msg.replaceAll(/FAIL/g,"PASS"));

//concatenation

console.log("Hello"+ " " +"World");
console.log("Hello".concat(" " ,"World"));

let url = "https://app.vwo.com/";
console.log(url.replace(/app/,"qa"));

//split & Join 

// Split - string to array
//Join - array to string

console.log("Pass, fail, skip".split(","));
console.log(['Pass', 'fail', 'skip'].join(" ,"));

let parts = ["2025", "03", "02"];
let date = parts.join("-");
console.log(date);
