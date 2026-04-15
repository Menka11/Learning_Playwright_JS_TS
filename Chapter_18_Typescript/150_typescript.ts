let name:string = "Jenny";
let age:number = 25;
let isActive: boolean = true;
let nothing:null= null;
let noDefined:undefined = undefined;

//Array

let numbers: number[]=[1, 2, 3];
let names: Array<string> = ["John","Jane"];

//unknown - safer than any

let unknown: unknown = "Hello";

//any

let anyThing: any = "Hi";
console.log(anyThing.toUpperCase()); // No error, but can cause runtime errors if anyThing is not a string