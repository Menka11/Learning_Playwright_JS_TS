function runTest(name, status, duration){
    return `${name}: ${status} ${duration}ms`
}

console.log(runTest("Login","pass",320));