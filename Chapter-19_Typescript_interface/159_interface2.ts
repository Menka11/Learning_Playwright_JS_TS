// interface with optional and readonly properties

interface APIResponse{
    readonly statusCode: number;
    body: string;
    header?: object;
    responseTime?: number;
}

// readonly: can't modify the readonly property after initialization
// ? - optional

let response: APIResponse = {
    statusCode: 200,
body: '{"user" : "admin"}',
}

// response.statusCode = 400; // Error: Cannot assign to 'statusCode' because it is a read-only property.
console.log("status:", response.statusCode);
console.log("Body:", response.body);
console.log("Headers:", response.header);


console.log("-------------");

interface Point{
    readonly x: number;
    readonly y: number;
}
const point: Point = {x: 10, y : 20};
// point.x = 30; // Error: Cannot assign to 'x' because it is a read-only property.


//Readonly Array
interface Data{
    readonly items: readonly number[];
}

let d1: Data = {
    items: [1,2,3,4]
};

// d1.items.push(5); // Error: Property 'push' does not exist on type 'readonly number[]'.