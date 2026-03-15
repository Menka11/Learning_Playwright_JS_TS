// maximum number using normal function
// function max(a, b){
//     if(a > b){
//         return `${a} is greater`;
//     }
//     else{
//         return `${b} is greater`;
//     }
// }
// console.log(max(12,90));

// maximum number using function expression 
// let max = function(a, b){
//     if(a > b){
//         return `${a} is greater`;
//     }
//     else{
//         return `${b} is greater`;
//     }
// }

// console.log(max(12,90));

//maximum using arrow function
// let max = (a, b) => { if(a > b) return `${a} is greater`; else{ return `${b} is greater`; } }
// console.log(max(12,90));

//IIFE 
(function(a, b){
    if(a > b){
        console.log(`${a} is greater`);
    }
    else{
        console.log(`${b} is greater`);
    }
})(12,90);