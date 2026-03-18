let env = "staging";   //global scope

function setupConfig(){
    let timeout = 3000; //local scope
    console.log(env);   //env access inside function as it is global scope
    console.log(timeout); //it is also accessible bcoz of local scope
}

setupConfig();
console.log(env);
console.log(timeout); //not allow to access

//Nested scope | blocked scope

function outer(){
    let x = 10;

    function inner(){
        let y = 20;
        console.log(x); //inner can access outer variable 
    }
    inner();
    console.log(y); //outer can't access inner variable 
}