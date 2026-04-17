abstract class BaseTest{
    protected testName: string;
    constructor(testName: string){
        this.testName = testName;
    }
    abstract setup(): void;
    abstract execute(): void;
    abstract teardown(): void;
    
}

class UITest extends BaseTest{
    setup():void{
        console.log("Set up launch browser"); 
    }
    execute(): void{
        console.log("Execute UI Test: fill form and submit");
    }
    teardown(): void{
        console.log("Tear down close browser");
    }
}

let uiTest = new UITest("Login Test");
uiTest.setup();
uiTest.execute();
uiTest.teardown();