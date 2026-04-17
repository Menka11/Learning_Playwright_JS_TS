//parent class
export class BasePage{
    public baseURL: string;
    private apiKey: string;
    protected timeout: number;

    constructor(URL: string, apiKey: string, timeout: number){
        this.baseURL = URL;
        this.apiKey = apiKey;
        this.timeout = timeout;
    }
}

class LoginPage extends BasePage{
    getBaseURL():void{
        console.log("Base URL:"+ this.baseURL);
    }
    // getAPIKey(): void{
    //     console.log("API key:"+ this.apiKey);  //error: apiKey is private so, not able to access by child class 
    // }

    getTimeout(): void{
        console.log("Timeout:"+ this.timeout);  //timeout is protected so, able to access by child class
    }
}

let loginPage1 = new LoginPage("https://example.com", "secret123", 5000);
console.log(loginPage1.baseURL);
// console.log(loginPage1.apiKey); //apikey is private so,not allowed to access by outside the class
// console.log(loginPage1.timeout); //timeout is protected so, not able to access by outside the class but able to access by child class


