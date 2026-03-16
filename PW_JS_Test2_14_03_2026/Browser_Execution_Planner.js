// Browser Execution Planner
// You have an array of all supported browsers and another array of temporarily 
// blocked browsers. Write a function that returns the runnable browsers, 
// the blocked browsers, and a printable execution plan string 
// such as `"Run on: chromium, webkit | Skip: firefox"`.

let allBrowsers = ["chromium", "firefox", "webkit"];
let blockedBrowsers = ["firefox"]
let blocked = [];
let runnableBrowser = [];

function Browser(allBrowsers, blockedBrowser){
    const runnable = allBrowsers.filter(element => !blockedBrowsers.includes(element));
    const runList = runnable.join(', ');
    const skipList = blockedBrowsers.join(', ');

    const plan = `Run on: ${runList} | skip: ${skipList}`;

    return { 
        runnable: runnable, 
        blocked: blockedBrowser,
        Plan: plan,
    }
}

let browserExecutionPlanner = Browser(allBrowsers, blockedBrowsers)
console.log(browserExecutionPlanner);
