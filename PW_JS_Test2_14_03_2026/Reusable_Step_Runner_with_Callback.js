// Reusable Step Runner with Callback
// Write a higher-order function `runStep(stepName, actionFn)` that logs the 
// start of a step, executes the callback, and returns an object in the 
// format `{ stepName, passed, message }`. 
// If the callback throws an error, catch it and return 
// `passed: false` with the error message.

function runStep(stepName, actionFn) {
  console.log(`Starting step: ${stepName}`);

  try {
    const result = actionFn();
    return {
      stepName,
      passed: true,
      message: result
    };
  } catch (error) {
    return {
      stepName,
      passed: false,
      message: error.message
    };
  }
}

// Example usage:
const success = runStep("open dashboard", () => "Page loaded");
console.log(success);

const failure = runStep("click login", () => {
  throw new Error("Button not found");
});
console.log(failure);
