function getStatus(code){
    if(code >= 200 && code < 300) return "success";
    if(code >= 400 && code < 500) return "client error"
    if(code >= 500) return "server error";
}

getStatus(200);
getStatus(404);
getStatus(500);

function logTest(name){
    console.log(`Running: ${name}`);
}
let msg = logTest("Hi, This is a log");
console.log('msg',msg);    // when return nothing => undefined

function aaa(){
    return [2, 2, 3, 5, 4];
}
console.log(aaa());