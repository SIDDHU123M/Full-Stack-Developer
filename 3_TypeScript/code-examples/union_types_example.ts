// union_types_example.ts

// Function that logs an ID, which can be a number or a string
function logId(id: number | string): void {
    console.log(`ID: ${id}`);
}

// Usage
logId(123); // Output: ID: 123
logId("abc"); // Output: ID: abc
logId(true); // Type error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
