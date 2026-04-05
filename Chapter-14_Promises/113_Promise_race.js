Promise.race([

])

let fastServer = new Promise(function (resolve){
    setTimeout(function(){
        resolve("Test 180 ms");
    }), 100
});

let slowServer = new Promise(function (resolve){
    setTimeout(function(){
        resolve("Test 500 ms");
    }), 500
});

Promise.race([fastServer, slowServer]).then(function (winner){
    console.log("Winner", winner);
})
