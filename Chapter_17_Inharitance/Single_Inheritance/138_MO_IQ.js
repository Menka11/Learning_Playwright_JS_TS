class BaseTest{
    setup(){
        console.log("Base: Open Browser");
    }
    tearDown(){
        console.log("Base: Close Browser");
    }
}

class UITest extends BaseTest{
    setup(){
        super.setup(); //UITest will help you to call your parent function. super() - for constructor and super.fname() - function name
        console.log("UI: maximize window");
    }

    tearDown(){
        console.log("UI: take screenshot");
        super.tearDown();
    }
}

let test = new UITest();
test.setup();
console.log("......");
test.tearDown();