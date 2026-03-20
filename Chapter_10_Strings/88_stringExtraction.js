let str = "Login Test Pass 001";
//slice(start, end) - exclude end

console.log(str.slice(0, 5)); //(0,4)- Login
console.log(str.slice(11)); //11 - end
console.log(str.slice(-3)); // 001

console.log(str.substring(6, 10));
console.log(str.at(2));
console.log(str.at(-1));
