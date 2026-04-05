function openBrowser(callback){
    console.log("Opening the browser");
    setTimeout(function(){
        console.log("Step-1: Open Browser");
        callback();
    },500);
}

function goToLoginPage(callback){
    setTimeout(function(){
        console.log("Step-2: Login Page Loaded");
        callback();
    }, 500);
}

function enterCredentials(callback){
    setTimeout(function(){
        console.log("Step-3: Credential entered");
        callback();
    }, 500);
}


function clickLogin(callback){
    setTimeout(function(){
        console.log("Step-4: Login button clicked");
        callback();
    }, 500)
}

openBrowser(function(){
    goToLoginPage(function(){
        enterCredentials(function(){
            clickLogin(function(){
                console.log("Test Completed");
            })
        })

    })
})