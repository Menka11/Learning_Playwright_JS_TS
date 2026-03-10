let arr = [6, 9, 1, 3, 11, 5, 8 ,10];
let max = arr[0];
let secondLargest = arr[0];
for(let i = 1; i< arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}
for(let i = 1; i< arr.length;i++){
    if(arr[i] < max){
        if(arr[i] > secondLargest)
            secondLargest = arr[i];
    }
}

console.log(secondLargest);