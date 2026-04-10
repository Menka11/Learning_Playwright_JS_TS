class Animal{
    constructor(name){
        this.name = name;

    }
    eat(){
        console.log(this.name + " is eating");
    }
    sleep(){
        console.log(this.name + " is sleeping");
    }

}

class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }

    bark(){
        console.log(this.name + " is barking");
    }
}

let dog = new Dog("Rex", "Labrador");
dog.eat();
dog.sleep();
dog.bark();
