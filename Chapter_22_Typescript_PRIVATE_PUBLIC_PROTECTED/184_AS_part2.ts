let element: unknown = {
    tagName: "Button",
    textContent: "Submit",
    id: "submit-id",
    disabled: false
}

let button = element as {tagName: string, textContent: string, id: string, disabled: boolean};

console.log("Tag Name:", button.tagName);
console.log("Text Content:", button.textContent);
console.log("ID:", button.id);
console.log("Disabled:", button.disabled);