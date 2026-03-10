let arr = [100, 5000, 600, 700, 800];
let min = arr[0];
for(let i = 1; i< arr.length; i++){
    if(min > arr[i]){
        min = arr[i];
    }
}
console.log("Smallest element of an array is:", min);
