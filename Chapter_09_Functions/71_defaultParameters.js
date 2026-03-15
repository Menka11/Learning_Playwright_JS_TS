function retry(testName,maxRetries=3, delay= 1000){
    console.log(`Retrying ${testName} uoto ${maxRetries} times, ${delay} ms apart`);
}

retry("Login");
retry("Checkout",5);
