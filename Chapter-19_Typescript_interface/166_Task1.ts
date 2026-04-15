//Define interfaces for user data 

interface User{
    name: string,
    email: string,
    occupation: string,
    salary: number,
    sleep(hours:number): void
}

let user1: User = {
    name:  "Jenny",
    email:  "jenny@gmail.com",
    occupation: "Dr",
    salary: 500000,
    sleep(hours){
        console.log(`${this.name} is sleeping for ${hours} hours`);
    }
};

let user2: User = {
    name: "Parker",
    email: "parker@gmail.com",
    occupation: "Writer",
    salary: 98765,
    sleep(hours){
        console.log(`${this.name} is sleeping for ${hours} hours`);
    }
};

user1.sleep(8);
user2.sleep(4);



