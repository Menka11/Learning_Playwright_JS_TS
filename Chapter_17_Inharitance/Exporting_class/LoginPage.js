// import {BasePage} from "./Basepage.js";

const {BasePage} = require("./Basepage.js");

export class LoginPage extends BasePage{
    constructor(){
        super ("Login Page");
    }
    loginuser(){
        console.log(user + "logged in");
    }
}