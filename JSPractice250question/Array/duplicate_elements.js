//Find duplicate elements of an array

let arr = [100, 200, 500, 100, 200];
let fruits = ["apple","banana", "Orange", "apple","Kiwi","Orange","Kiwi","Orange","Cherry","Kiwi","apple"];
let presentInArr= [];
let duplicate = [];
for(let element of fruits){
    if(!(presentInArr.includes(element))){
        presentInArr.push(element);
    }    
    else{
        if(!(duplicate.includes(element)))
            duplicate.push(element);
    }

}
console.log("Duplicate elements", duplicate);