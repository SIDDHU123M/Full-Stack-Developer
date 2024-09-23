// type_guards_example.ts

// Custom type guard to check if a value is a string
function isString(value: any): value is string {
    return typeof value === "string";
}

function printValue(value: string | number): void {
    if (isString(value)) {
        console.log(`String value: ${value}`);
    } else {
        console.log(`Number value: ${value}`);
    }
}

// Usage
printValue("Hello"); // Output: String value: Hello
printValue(42); // Output: Number value: 42
printValue(true); // Type error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
