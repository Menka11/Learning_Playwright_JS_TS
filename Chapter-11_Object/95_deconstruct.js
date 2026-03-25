const user = {name: "Jenny", age: 30, city: 'NYC'};
const user1 = {name1: "Jenny1", age1: 31, city1: 'NYC'};

const{name, age}= user;
const{name1, age1}= user1;
console.log(name);
console.log(age);
console.log(name1);
console.log(age1);

//rename the variables

const{name: UserName, age: userAge} = user;
console.log(UserName);
console.log(user);

//default value 
const {country = "USA"} = user;
console.log(country);


//nested
const data = {user: {name: "Jenny", address: {city: "NYC"}}};
console.log(data);