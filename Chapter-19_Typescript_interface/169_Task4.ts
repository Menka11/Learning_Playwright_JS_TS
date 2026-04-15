//Implement interfaces in classes
interface APITestCases{
    testID: string,
    name: string,
    status: string,
    execute(): void
}

class LoginTestCase implements APITestCases{
    testID: string;
    name: string;
    status: string;

    constructor(testID: string, name: string, status: string) {
        this.testID = testID;
        this.name = name;
        this.status = status;
    }

    execute(): void {
        console.log(`Executing test case: ${this.name}`);
    }
}

class SignupTestCase implements APITestCases{
    testID: string;
    name: string;
    status: string;  
    constructor(testID: string, name: string, status: string) {
        this.testID = testID,
        this.name = name,
        this.status = status
    }      
    execute():void{
        console.log(`Executing test case: ${this.name}`);
    }
}

let loginTest = new LoginTestCase("TC001", "Login with valid credentials", "Pending");
loginTest.execute();
let signupTest = new SignupTestCase("TC002", "Signup with valid details", "Pending");
signupTest.execute();
