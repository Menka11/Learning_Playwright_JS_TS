
let promises = new Promise(function(resolve, reject) {
    let foodReady = true;
    if(foodReady)
        resolve("Pizza is delivered");
    else
        reject("Cancelled");
})




console.log(promises);