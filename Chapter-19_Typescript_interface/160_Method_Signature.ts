interface Calculator{
    
    add(a:number, b:number): number;
    subtract(a:number, b:number): number;
    multiply: (a:number, b: number) => number; //use : after function name when use => for return

}

const Calc: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b
}

console.log("Addition:", Calc.add(5, 3));
console.log("Subtraction:", Calc.subtract(5, 3));
console.log("Multiplication:",Calc.multiply(5, 3));