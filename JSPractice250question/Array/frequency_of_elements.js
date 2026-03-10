// find frequency of element

let arr = [100, 200, 200, 300, 500, 200];
let frequency = {};

arr.forEach(element =>{
    frequency[element] = (frequency[element]||0) + 1;

})
console.log(frequency);