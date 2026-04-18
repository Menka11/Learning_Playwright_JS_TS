function Role (role: string){
    return function(constructor: Function){
        constructor.prototype.role = role;
    };
}
@Role("admin")
class Admin{

}

const admin = new Admin();
console.log((admin as any).role);