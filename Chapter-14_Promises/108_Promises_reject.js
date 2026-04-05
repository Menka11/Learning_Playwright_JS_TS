let apiCall = new Promise(function(resolve, reject){
    reject("500 Error");
});

apiCall.then(function (response) {
    console.log(response);
    console.log(response.status);
    console.log(response.body);
}).catch(function (response){
    console.log(response);
})