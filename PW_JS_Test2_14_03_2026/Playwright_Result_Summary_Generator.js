// Playwright Result Summary Generator
// You receive an array of Playwright step result objects in the format `{ name, status, durationMs }`,
// where status can be `"passed"`, `"failed"`, or `"skipped"`. Write a JavaScript function that 
// prints a summary report with total steps, passed count, failed count, skipped count, total duration, 
// and a comma-separated list of failed step names.

testResults = [
    {name: "open login", status: "passed", durationMe: 400},
    {name: "fill form", status: "failed", durationMe: 700},
    {name: "submit", status: "skipped", durationMe: 0},
];
let totalSteps = 0;
let passedCount = 0;
let failedCount = 0;
let skippedCount = 0;
let totalDuration = 0;
let commaSep = [];

function summaryReport(testResults){
    totalSteps = testResults.length;
    for(const testResult of testResults){
        if(testResult.status == "passed"){
            passedCount++;
        }else if(testResult.status == "failed"){
            failedCount++;
            commaSep.push(testResult.name);
        }else if(testResult.status == "skipped"){
            skippedCount++;
        }
        totalDuration = totalDuration + testResult.durationMe;
    }
    console.log(`Total Steps: ${totalSteps} Passed: ${passedCount} Failed: ${failedCount} Skipped: ${skippedCount} Total Duration: ${totalDuration}ms Failed Steps: ${commaSep.join(', ')}`);
}

summaryReport(testResults);