let url = "https://staging.vwo.com/api/login?retryingtrue";

url.includes("https"); //true
url.includes("predictions"); //false


//starting with

url.startsWith("https"); //true
url.startsWith("http://"); //true
url.endsWith("true"); //true

//indexof
console.log(url.indexOf('a')); //10
console.log(url.lastIndexOf('a')); //24
console.log(url.indexOf('nothere')); //-1

//serach 
//searcg basically works in a way that it search with regex
console.log(url.search(/login/)); 

//regex
console.log(url.search(/\d+/));



