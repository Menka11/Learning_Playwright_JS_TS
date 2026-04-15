interface Executable{
    name: string;
    run(): void;
    getStatus(): string;
}

class TestCase implements Executable{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    run(): void{
        console.log("Run test case:", this.name);
        }
    getStatus(): string{
        return "PASSED";
    }
}

let TC = new TestCase("Login Test");
TC.run();
console.log("Status:", TC.getStatus());