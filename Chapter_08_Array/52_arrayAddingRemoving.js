let arr=[1,2,3];
console.log(arr);

arr.push(4); //add element at the end
console.log(arr);

arr.pop(); //remove from end
console.log(arr);

arr.push(5,6); //add 2 elements at the end of array
console.log(arr);

arr.unshift(0); //Add the element at the beginning
console.log(arr);

arr.shift(); //remove from beginning 
console.log(arr);

arr.splice(2,1); //remove 1 element at index 2
console.log(arr);

arr.splice(2,0,99); //remove 0 element from index 2 and add 99 at  index 2
console.log(arr);

arr.splice(1,2,10,20);
console.log(arr);//remove 2 elements from index 1 and add 10, 20 
