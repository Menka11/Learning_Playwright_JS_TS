class Credentials{
    #apikey;
    constructor(user, key){
        this.user = user;
        this.#apikey = key;
    }

    getAuthHeader(){
        return "Bearer " + this.#apikey;
    }
}

let cred = new Credentials("admin","#secret_key_123");
console.log(cred.user);  //public so able to access outside of class

// console.log(cred.#apikey); //not allow to access as private

//allow to access only through getAuthHeader() method

console.log(cred.getAuthHeader());