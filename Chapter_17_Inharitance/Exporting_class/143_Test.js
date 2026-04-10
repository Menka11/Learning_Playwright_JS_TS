// import {LoginPage} from "./LoginPage.js";

const { LoginPage } = require("./LoginPage.js");

let page = new LoginPage();
page.open();
page.login("admin");