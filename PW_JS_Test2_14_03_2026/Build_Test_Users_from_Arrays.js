// Build Test Users from Arrays
// Write a JavaScript function that receives two arrays: 
// one with names and one with roles. Return a new array of user 
// objects in the format `{ username, email, role }`. 
// The username should be lowercase with spaces replaced by underscores, 
// and the email should use the domain `@playwrightbatch.com`.

let names = ["Amit Kumar", "Neha Singh"];
let roles = ["admin", "viewer"];
let finalUserdetails;
function buildTestUserArray(names, roles){
    return names.map((name, index) =>{
        const username = name.toLowerCase().replace(" ", "_");
        const email = `${username}@playwright.com`;
        
        return{
            finalUserdetails: `username: ${username}, email: ${email}, role: ${roles[index]}`
        }
    })


}

const users = buildTestUserArray(names, roles);
console.log(users);