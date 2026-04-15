//Create interfaces with optional properties

interface Car{
    model: string,
    color: string,
    year: number,
    sunroof?: boolean,  //optional property
    brand?: string, //optional property
    drive(): void
}

let car1: Car = {
    model: "Jeep",
    color: "Black",
    year: 2025,
    drive(){
        console.log(`The ${this.color} ${this.model} is auto drive`);
    }
}

let car2: Car = {
    model: "Class C",
    color: "White",
    year: 2026,
    brand: "Mercedes",
    drive(){
        console.log(`The ${this.color} ${this.model} from ${this.brand} is auto drive`);
    }
}

let car3: Car = {
    model:  "Mini Cooper",
    color: "Red",
    year: 2024,
    sunroof: true,
    drive(){
        console.log(`The ${this.color} ${this.model} with sunroof is auto drive`);
    }
}

car1.drive();
car2.drive();
car3.drive();