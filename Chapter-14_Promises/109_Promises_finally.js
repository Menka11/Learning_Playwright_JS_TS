let testRun = new Promise(function (resolve, reject) {
    reject("Assertion failed");
});

testRun.then(function (msg){
    console.log(msg);
}).catch(function (error){
    console.log(error);
}).finally(function (){
    console.log("I'll be executed anyhow!");
})