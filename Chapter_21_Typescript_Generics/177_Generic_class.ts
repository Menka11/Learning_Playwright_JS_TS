class TestDataStorage <T>{
    private item: T[] = [];
    add(item:T) : void{
        this.item.push(item);
    }
    getFirst(): T | undefined{
        return this.item[0];
    }

    getALL(): T[]{
        return this.item;
    }

    count(): number{
        return this.item.length;
    }
}
let codeStore = new TestDataStorage<string>();
let testStore = new TestDataStorage<number>();

codeStore.add("Hi");
codeStore.add("Hello World");

testStore.add(200);
testStore.add(404);
testStore.add(500);

console.log("Codes:",codeStore.getALL());
console.log("Test Results:", testStore.getALL());
console.log("FirstCode:", codeStore.getFirst());
console.log("FirstTestResult:", testStore.getFirst());
console.log("Total Codes:", codeStore.count());
console.log("Total Test Results:", testStore.count());  