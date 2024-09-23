// Illustrates how to implement inheritance in TypeScript.
class Person {
    name: string;  // Property to store the person's name
    age: number;   // Property to store the person's age

    // Constructor to initialize the properties
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method to greet the person
    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Employee extends Person {
    employeeId: number;  // Property to store the employee ID

    // Constructor to initialize the properties, including those of the superclass
    constructor(name: string, age: number, employeeId: number) {
        super(name, age); // Call the constructor of the superclass (Person)
        this.employeeId = employeeId; // Initialize the employee ID
    }

    // Method to display employee information
    displayEmployeeInfo(): void {
        console.log(`Employee ID: ${this.employeeId}`);
    }
}

// Create an instance of the Employee class
const employee1 = new Employee("Bob", 30, 12345);
employee1.greet(); // Output: Hello, my name is Bob and I am 30 years old.
employee1.displayEmployeeInfo(); // Output: Employee ID: 12345
