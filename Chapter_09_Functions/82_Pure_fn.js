// A Pure function always have same output for the same input and no side effect

//Pure - no side effects, predictable output

function calculatePassRate(total, passed){
    return ((passed / total) * 100).toFixed(2);
}

console.log(calculatePassRate(10, 7));
console.log(calculatePassRate(10, 7));