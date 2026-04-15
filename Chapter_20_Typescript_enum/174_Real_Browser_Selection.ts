enum Browser{
    Chrome = "chrome",
    Firefox = "firefox",
    Safari = "safari",
    Edge = "Edge"
}

function launchBrowser(browser: Browser): void{
    switch(browser){
        case Browser.Chrome:
            console.log("Launching Chromium (Chrome V120)");
            break;
        case Browser.Firefox:
            console.log("Launching firefox (firefox v115)");
            break;
        case Browser.Safari:
            console.log("Launching Safari (Safari v16)");
            break;
        case Browser.Edge:
            console.log("Launching Edge (Edge v120)");
            break;
        }
    }

    launchBrowser(Browser.Chrome);
    launchBrowser(Browser.Firefox);
    launchBrowser(Browser.Safari);
    launchBrowser(Browser.Edge);