enum Severity{
    Low,
    Medium, 
    High,
    Critical
}

console.log(Severity.High);

function needsImmediatAttention(severity: Severity): boolean{
    return severity >= Severity.High;
}

console.log("Low urgent:",needsImmediatAttention(Severity.Low));
console.log("High urgent:",needsImmediatAttention(Severity.High));  
console.log("Critical urgent:",needsImmediatAttention(Severity.Critical));

enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://QA.api.com",
    Prod = "https://prod.api.com",
}

console.log(Environment.Dev);