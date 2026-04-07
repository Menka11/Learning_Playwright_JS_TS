class Person{
    #child1;
    #child2;

    constructor(name, ch1, ch2){
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }

    getAccessChild1(){
        return this.#child1;
    }

    getAccessChild2(){
        return this.#child2;
    }



}

let accessChild = new Person("Amit","Jenny", "Aanya");
console.log(accessChild.name);
// console.log(accessChild.#child1); //now allow to access bcoz it is private member of the class
// To access private member of the class use method for example: get and set method
console.log(accessChild.getAccessChild1());
console.log(accessChild.getAccessChild2());
