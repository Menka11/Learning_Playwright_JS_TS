class Father{
    constructor(name){
        this.name = name;
    }
    printFatherName(){
        console.log("Father name is", this.name);
    }
}

class son1 extends Father{
    constructor(){
        super("Harsh");
    }
    


}

class son2 extends Father{
    constructor(){
        super("Ram");
    }

}

let s1 = new son1();
s1.printFatherName();
let s2 = new son2();
s2.printFatherName();