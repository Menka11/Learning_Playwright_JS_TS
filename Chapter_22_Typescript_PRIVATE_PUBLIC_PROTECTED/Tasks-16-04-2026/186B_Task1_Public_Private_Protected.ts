import {BasePage} from "./186A_Task1_Public_Private_Protected";

class testLoginPage extends BasePage{
    getBaseURL(): void{
        console.log("Base URL asscess from outside the class and child class:" + this.baseURL); //baseURL is public so, able to access by child class and outside
    }
    // getapiKey(): void{
    //     console.log("APIKey is private and trying to access from outside the class and child class but it is not allowed:"+ this.apiKey); 
    // }
    getTImeout():void{
        console.log("Time out is protected and trying to access from outside the class and child class"+ this.timeout);
    }
}

// Demonstrating the difference between PUBLIC and PROTECTED when accessed from OUTSIDE the class
const page = new testLoginPage("https://example.com", "secret123", 5000);

// PUBLIC - Can be accessed from OUTSIDE
console.log("PUBLIC - Accessing from outside:", page.baseURL);  // Works - public allows access from anywhere

// PROTECTED - CANNOT be accessed from OUTSIDE (Uncomment to see error)
//console.log("PROTECTED - Accessing from outside:", page.timeout);  
// Error: Property 'timeout' is protected and only accessible within the class hierarchy
// console.log("Protected is only accessible with the class", page.timeout);

