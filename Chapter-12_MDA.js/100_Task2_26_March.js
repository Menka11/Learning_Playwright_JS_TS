
// inverted triangle
// for(let i = 7; i >= 1; i--){
//     process.stdout.write(" ");
//     for(let j = 1; j < i; j++){
//         process.stdout.write("*");
//     }
//     console.log("\n");
    
// }
// let n = 7;
// for(let i = n; i >= 1; i--) {
//     let l = "";

//     for(let j = 0; j < n - i; j++){
//         l+=" ";
//     }

//     for(let k = 1; k <= i; k++){
//         l+="*";
//     }
//     console.log(l);

// }

let n = 7;
for(let i = n; i >= 1; i--) {
    let l = "";

    for(let j = 0; j < n - i; j++){
        l+=" ";
    }

    for(let k = 1; k <= (2 * i - 1); k++){
        l+="*";
    }
    console.log(l);

}