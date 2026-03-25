
const obj1 = {a: "1", b:"20"};
const obj2 = {1:1, 2:2};

const copy = {...obj1,...obj2};
console.log(copy);

for(const key in obj1){
    console.log(`${key}: ${obj1[key]}`);
}
