// Normalize Locator Error Messages
// Given a raw Playwright error message string, 
// write a function that trims extra spaces, converts the message to lowercase, 
// collapses multiple spaces into a single space, and prints a category. 
// Use `TIMEOUT` if the normalized message contains `"timeout"`, 
// `LOCATOR` if it contains `"locator"`, otherwise `GENERAL`.

let rawMessage = " Locator not found after TIMEOUT ";

function trimExtraSpace(rawMessage){
    normalizedMessage = rawMessage.trim().toLowerCase().replace(/\s+/g,' ');
    if(normalizedMessage.includes('timeout')){
        Category = "TIMEOUT";
    }else if(normalizedMessage.includes('locator')){
        Category = "LOCATOR";
    }else{
        Category = "GENERAL";
    }

    console.log(`Normalized: ${normalizedMessage}`);
    console.log(`Category: ${Category}`)

}

trimExtraSpace(rawMessage);