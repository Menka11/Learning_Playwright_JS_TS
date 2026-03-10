let arr = [100, 500, 600, 700, 800];
let reverseArray = [];

for(let i = arr.length-1, j = 0; i>=0; i--, j++){
    reverseArray[i] = arr[j];

}
console.log(reverseArray);