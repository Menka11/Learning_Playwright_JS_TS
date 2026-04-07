class ICICIBank{
    #balance;

    constructor(name, balance){
        this.name = name;
        this.#balance = balance;
    }

    getBalance(){
        return this.#balance;
    }

    setBalance(balance, isCashier){
        if(isCashier){
            return this.#balance = balance;
        }
        else{
            console.log("You are not allowed");
        }
    }
}

let p1 = new ICICIBank("Jenny",100);
console.log(p1.getBalance());
p1.setBalance(1000, false);
console.log(p1.getBalance());


let p2 = new ICICIBank("Richard",1000);
console.log(p2.getBalance());
p2.setBalance(100000, true);
console.log(p2.getBalance());
