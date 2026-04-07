let checkAuth = Promise.resolve("Auth OK");
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache OK");

Promise.all([checkAuth, checkDB, checkCache]).then(function(results){
    console.log("All checkes", results);
})

Promise.all([
    Promise.resolve("Ok"),
    Promise.reject('DB Down'),
    Promise.resolve('Ok')
]).then(function (r) {console.log(r)})
.catch(function (err) {console.log(err)});