interface TestConfig{
    browser: string;
    headless: boolean;
    baseURL: string;
    timeout?: number;
    retries?: number;
}

let cliConfig: TestConfig = {
    browser: "Chrome",
    headless: true,
    baseURL:  "https://staging.app.com",
}

let localConfig: TestConfig ={
    browser: "Firefox",
    headless: false,
    baseURL: "http://localhost:3000",
    timeout: 5000,
    retries: 2
}

console.log("CLI config:", cliConfig);
console.log("Local config:", localConfig);
