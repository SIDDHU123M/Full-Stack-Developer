
class Person {
    private _age: number;

    constructor(age: number) {
        this._age = age;
    }

    // Getter for age
    get age(): number {
        return this._age;
    }

    // Setter for age with validation
    set age(value: number) {
        if (value < 0) {
            throw new Error("Age cannot be negative.");
        }
        this._age = value;
    }
}

// Usage
const person = new Person(30);
console.log(person.age); // Output: 30

person.age = 25; // Setting a new age
console.log(person.age); // Output: 25

// Uncommenting the following line will throw an error
// person.age = -5; // Error: Age cannot be negative.
