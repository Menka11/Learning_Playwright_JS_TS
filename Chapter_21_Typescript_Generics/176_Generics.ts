function getFirstResult(name: string): string{
    return name;
}


function getFirstResults<T>(name: T[]): T | undefined{
    return name[1];
}

console.log(getFirstResult("Hello World"));
console.log(getFirstResults(["Hello", 123]));