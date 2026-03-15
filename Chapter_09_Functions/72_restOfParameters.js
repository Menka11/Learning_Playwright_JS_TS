function logResults(suiteName, ...Results){
    console.log(`Suite: ${suiteName}`);
    console.log(`Result: ${Results.join(", ")}`)
}

logResults("Auth suite","pass","fail","Pass", "skip");


