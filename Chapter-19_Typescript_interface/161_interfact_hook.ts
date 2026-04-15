interface TestHook {
    (TestName: string): void;
}

let beforeEachHook: TestHook = function (testName: string): void {
    console.log("[Before] settings up:", testName);
}

let afterEachHook: TestHook = function (testName: string) {
    console.log("[After] Tearing down:", testName);
}

beforeEachHook("LoginTest");


//Test

interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}

let test1: TestCase = {
    id: 1,
    name: "LOgin with valid credentials",
    status: "FAILDED",
    duration: 3234
};

let test2: TestCase = {
    id: 2,
    name: "LOgin with Invalid credentials",
    status: "PASSED",
    duration: 3234
};

console.log("TC--" + test1.id + " " + test1.status);
console.log("TC--" + test2.id + " " + test2.status);

afterEachHook("LoginTest");