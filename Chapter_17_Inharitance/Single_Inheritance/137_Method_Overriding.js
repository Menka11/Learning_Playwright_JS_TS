class BaseTest{
    setup(){
        cosnole.log("Base: open Browser");
    }
}
class APITest extends BaseTest{
    setup(){    //METHOD OVERRIDING - method with same name as parent class with different argument and body content etc.
        console.log("APITest: open Browser");
    }
}

let apitest = new APITest();
apitest.setup();