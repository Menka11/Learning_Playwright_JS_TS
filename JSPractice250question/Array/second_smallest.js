let arr = [6, 9, 1, 3, 11, 5, 8 ,10];
let min = arr[0];
let secondSmallest = arr[0];
for(let i = 1; i< arr.length; i++){
    if(min > arr[i]){
        min = arr[i];
    }
}
for(let i = 1; i< arr.length;i++){
    if(arr[i] > min){
        if(arr[i] < secondSmallest)
            secondSmallest = arr[i];
    }
}

console.log(secondSmallest);