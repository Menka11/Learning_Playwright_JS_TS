async function getTestResult(){
    let result = await Promise.resolve("Login test passed")
    console.log(result);

    let result2 = await Promise.resolve("Deshboard test passed");
    console.log(result2);
}

getTestResult();

