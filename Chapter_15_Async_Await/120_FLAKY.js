let attempt = 0;

function falkyAPI(){
    attempt++;
    if(attempt < 3){
        return Promise.reject("Attempt" + attempt + "failed!");
    }
    return Promise.resolve("Attempt" + attempt + "Success!");

}

async function retryTesting(maxRetries){
    for(let i = 1; i<= maxRetries; i++){
        try{
            let result = await falkyAPI();
            console.log(result);
            break;
        }
        catch(error){
            console.log(error);
        }
    }
}
retryTesting(5);