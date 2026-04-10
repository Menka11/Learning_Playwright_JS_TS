const { exec } = require("node:child_process");

class BasePage{
    verify(){
        console.log("Verifying base page");
    }

}

class LoginPage extends BasePage{
    verify(){
        console.log("Verify: username field exists");
        console.log("Verify: password field exists");
        console.log("Verify: login button is visible");
    }
}

class DashboardPage extends BasePage{
    verify(){
        console.log("Verify:; welcome page shown");
        console.log("Verify:; sidebar menu loaded");
    }
}

class CartPage extends BasePage{
    verify(){
        console.log("Verify: cart items displayed");
        console.log("Verify: total price is correct");
    }
}

let page = [new LoginPage(), new DashboardPage(), new CartPage()];
page.forEach(function(page){
    page.verify();
    console.log("----");
});