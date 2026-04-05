async function testAPI(){
    try{
        let result = await Promise.reject("503 service unavailable");
        console.log(result);

    }catch(error){
        console.log(error);
    }finally{
        console.log("clean up ");
    }
}

testAPI();