const readline = require('readline');

const r1 = readline.Interface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
r1.question("Enter the username",function(name){
    r1.question("Enter the password",function(password){
        console.log(`Hey, name = ${name} and password = ${password} is correct`)
    }
)
})


