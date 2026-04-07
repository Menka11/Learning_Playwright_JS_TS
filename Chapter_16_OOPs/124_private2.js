class student{
    static collegeName = "PW AI Batch";

    constructor(name){
        this.name = name;
    }

    static display(){
        console.log(this.name + "are part of " + student.collegeName);
    }
}

let x = new student("amit");
let y = new student("jenny");
let z = new student("Pinku");

console.log(student.collegeName);
console.log(x.name);
console.log(y.name);
console.log(z.name);