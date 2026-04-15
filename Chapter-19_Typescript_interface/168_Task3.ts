// Extend interfaces for inheritance

interface Vehicle{
    wheels: number,
    color: string,
    fuel: string,
    drive(): void
}

interface Jupitor extends Vehicle{
    make: string,
    engine: string,
    year: number

}

interface MiniCooper extends Vehicle{
    make: string,
    model: string,
    year: number,
    sunroof: boolean
}

let JupiorTwoWheeler: Jupitor = {
    wheels: 2,
    color: "Grey",
    fuel: "Petrol",
    make: "TVS",
    engine: "110",
    year: 2023,
    drive(){
        console.log(`The ${this.color} ${this.make} with ${this.engine} driving with ${this.fuel} is two wheeler`);
    }
}


let car: MiniCooper = {
    wheels: 4,
    color: "Red",
    fuel: "Electric",
    make: "Mini Cooper",
    model: "Countryman",
    year: 2023,
    sunroof: true,
    drive(){
        console.log(`The ${this.color} ${this.make} ${this.model} is driving with ${this.fuel}`);
    }

}

JupiorTwoWheeler.drive();
car.drive();