// mapped_types_example.ts

// Using mapped types to create a read-only version of an existing type
type Person = {
    name: string;
    age: number;
};

type ReadonlyPerson = {
    readonly [K in keyof Person]: Person[K];
};

const person: ReadonlyPerson = {
    name: "Bob",
    age: 30,
};

// Usage
console.log(person);
// person.age = 31; // Type error: Cannot assign to 'age' because it is a read-only property.
