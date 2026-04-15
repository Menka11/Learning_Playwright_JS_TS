interface BugReport {
    id: number;
    title: string;
    severity: string;
    stepsToReproduce: string[];
}

function logBug(bug: BugReport): void {
    console.log("Bug--" + bug.id + " [" + bug.severity + "] " + bug.title);
    bug.stepsToReproduce.forEach(function (step: string, i: number) {
        console.log(" " + (i + 1) + " , " + step);
    });
}


logBug({
    id: 1,
    title: "Login button not working",
    severity: "HIGH",
    stepsToReproduce: ["Step-1 Open page", "Step-2 click on Login button"]
});
