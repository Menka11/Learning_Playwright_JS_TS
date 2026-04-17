class APIClient{
    public baseURL: string;
    private apiKey: string;
    protected timeout: number;

    constructor(baseURL: string, apiKey: string, timeout: number){
        this.baseURL = baseURL;
        this.apiKey = apiKey;
        this.timeout = timeout;

    }

    private getAuthHeader(): string{
        return "Bearer" + this.apiKey;
    }

    public sendResquest(path: string):void{
        console.log("GET:" + this.baseURL + path);
        console.log("AUth:"+ this.getAuthHeader());
        console.log("Timeout:" + this.timeout + "ms");
    }
        
}

class CustomAPIClient extends APIClient{
    getUsers(): void{
        console.log("Fetching user (timeout: " + this.timeout + "ms");
        console.log("URL:" + this.baseURL + "/users");
    }
        
    }

let client = new APIClient("https://api.staging.com", "key_secret_123",5000);
console.log(client.baseURL);
client.sendResquest("/health");