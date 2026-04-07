class Car{
    #engine;

    constructor(name, engineName){
        this.name = name;
        this.#engine = engineName;
    }

    getEngineName(){
        return this.#engine;
    }



}

let c1 = new Car("Grand i10","v8");
let c2 = new Car("Tesla","v10");

console.log(c1.name + " and it's engine is " + c1.getEngineName());
console.log(c2.name + " and it's engine is " + c2.getEngineName());

