// function validateStatusCode(statusCode){
//     if(statusCode >=200 && statusCode <=300){
//         console.log("Request is fine");
//     }

// }

// validateStatusCode(200);
// validateStatusCode(300);
// validateStatusCode(400);

// //Expression
// let validateStatutsCodeExp = function(statusCode){
//     if(statusCode >=200 && statusCode <=300){
//         console.log("Request is fine");
//     }

// }
// validateStatutsCodeExp(200);

//Arrow function
let validateStatutsCodeArrow = (statusCode) => {
    if(statusCode >=200 && statusCode <=300){
        console.log("Request is fine");
    }

}
validateStatutsCodeArrow(200);