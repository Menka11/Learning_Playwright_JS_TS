function placeOrder(item, callback){
    console.log("Place Order");
    callabck();//callback function call
}
//function definition 
function print(){
    console.log("Normal Fn- done with the order");
}

//first way
placeOrder("Burger", print);

// Sencond Way Anoy
placeOrder("Burger", function () {
    console.log("Anoy Fn, I am also a function wihtout name!")
});

// Third Way - Arrow Fn
placeOrder("Burger", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});

function test(text, callback) {
    console.log("Hi, this is test");
    callback();
}

test("Verify that the login page is working", async (page) => {
    console.log("Running TC1")
});