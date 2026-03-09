//searching

let results = ["pass","fail","pass","error", "fail"];
//index of method to find the index of element, return -1 if element  not found

console.log(results.indexOf("fail")); //1  - gives index of 1st matched element 
console.log(results.indexOf("pass")); //0
console.log(results.indexOf("error")); //3
console.log(results.indexOf("skip")); // -1

console.log(results.lastIndexOf('fail')); // 4 - gives index of last matched element 

console.log(results.includes("error")); //true
console.log(results.includes("skip"));  //false

// find - return first matching element 

let nums = [10, 20, 30, 40];
console.log(nums.find(n => n > 20)); //return first matching element which satisfy the condition 

console.log(nums.findIndex(n=> n > 20)); //return index of first matched element

console.log(nums.findLast(n => n > 20)); // return last matched element 
console.log(nums.findLastIndex(n => n > 20)); //return index of last matched element