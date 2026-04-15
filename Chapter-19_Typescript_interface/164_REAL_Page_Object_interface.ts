interface BasePage{
    url: string;
    title: string;
}

interface LoginPage extends BasePage{
    usernameField: string;
    passwordField: string;
    loginButton: string;
}   

let loginPage: LoginPage = {
    url: "/login",
    title:"Login Page",
    usernameField: "#username",
    passwordField: "#password",
    loginButton: "#loginbtn"
}

console.log("URL:", loginPage.url);
console.log("Title:", loginPage.title);
console.log("Username Field:", loginPage.usernameField);