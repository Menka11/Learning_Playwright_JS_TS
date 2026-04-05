Promise.allSettled([
    Promise.resolve('Test A passed'),
    Promise.reject('Test B failed'),
    Promise.resolve('Test C passed')
]).then(function(results){
    results.forEach(function (r, i){
        console.log('Test' + (i + 1) + "i", r.status, "-", r.value || r.reason);
    })
})