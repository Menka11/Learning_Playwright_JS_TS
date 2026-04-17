class BaseTest {
    setup(): void {
        console.log("Open setup");
    }
    teardown(): void {
        console.log("Close browser");
    }
}

class LoginTest extends BaseTest {
    override setup(): void {
        console.log("Open browser and navigate to login page");
        console.log("Type username and password");
    }
}

let loginPage = new LoginTest();
loginPage.setup();
loginPage.teardown();