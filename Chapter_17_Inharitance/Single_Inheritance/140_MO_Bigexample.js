class TestCase{
    execute(){
        console.log("Running generic test");
    }
}
class UniTest extends TestCase{
    execute(){
        console.log("Running unit test- checking for function");
    }
}

class APITest extends TestCase{
    execute(){
        console.log("Running API test - sending HTTP request");
    }
}

class E2ETest extends TestCase{
    execute(){
        console.log("Running E2E test - opening browser");
    }
}

let tests = [new UniTest(), new APITest(), new E2ETest()];
tests. forEach(function(test){
    test.execute();
})