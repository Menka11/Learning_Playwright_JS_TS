"use strict";
function buildEndpoint(base, path) {
    return base + path;
}
function isSuccessCode(code) {
    return code >= 200 && code < 300;
}
function logTestStep(step) {
    console.log("[STEP] " + step);
}
console.log(buildEndpoint("https://api.com", "/users"));
console.log("200 is success:", isSuccessCode(200));
console.log("404 is success:", isSuccessCode(404));
logTestStep("Navigate to login page");
