# Classes and Objects in TypeScript

## Overview
In this lesson, we will explore the concepts of classes and objects in TypeScript, which are fundamental to object-oriented programming (OOP). Classes provide a structure for creating complex data types that encapsulate data and behavior, while objects are instances of classes that represent specific entities. Understanding how to create and utilize classes and objects will empower you to design and implement complex applications efficiently.

## Learning Objectives
By the end of this lesson, you will be able to:
- Understand the principles of object-oriented programming in TypeScript.
- Create and use classes, including properties, methods, constructors, inheritance, and access modifiers.
- Implement advanced OOP concepts like abstract classes and interfaces.

## Key Concepts

### 1. Introduction to Classes
A class is a blueprint for creating objects. It defines properties (attributes) and methods (functions) that the created objects will have. Classes allow for the organization of code, making it easier to manage and understand.

#### Defining a Class
- **Syntax**:
  ```typescript
  class ClassName {
      propertyName: type;

      constructor(parameter: type) {
          this.propertyName = parameter;
      }

      methodName(): returnType {
          // method body
      }
  }
  ```
- **Example**:
  ```typescript
  class Person {
      name: string;
      age: number;

      constructor(name: string, age: number) {
          this.name = name;
          this.age = age;
      }

      greet(): void {
          console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      }
  }
  ```

### 2. Creating Objects
You can create an instance of a class (an object) using the `new` keyword. Each object created from the class can have its own values for the properties defined in the class.

- **Example**:
  ```typescript
  const person1 = new Person("Alice", 28);
  person1.greet(); // Output: Hello, my name is Alice and I am 28 years old.
  ```

### 3. Class Properties and Methods
Classes can have properties and methods that define the behavior and state of objects.

#### Properties
Properties can be defined in the class body. They represent the attributes of an object and can have different access modifiers.

#### Methods
Methods define the behaviors of a class and can access and manipulate the class properties.

- **Example**:
  ```typescript
  class Car {
      model: string;
      year: number;

      constructor(model: string, year: number) {
          this.model = model;
          this.year = year;
      }

      displayInfo(): string {
          return `Model: ${this.model}, Year: ${this.year}`;
      }
  }

  const car = new Car("Toyota", 2021);
  console.log(car.displayInfo()); // Output: Model: Toyota, Year: 2021
  ```

### 4. Constructors
Constructors are special methods that are called when an instance of a class is created. They are typically used to initialize properties of the class.

- **Example**:
  ```typescript
  class Animal {
      type: string;

      constructor(type: string) {
          this.type = type;
      }

      makeSound(): string {
          return `${this.type} makes a sound.`;
      }
  }

  const animal = new Animal("Dog");
  console.log(animal.makeSound()); // Output: Dog makes a sound.
  ```

### 5. Inheritance
Inheritance allows one class (subclass) to inherit properties and methods from another class (superclass), enabling code reuse and the creation of hierarchical relationships. This promotes the DRY (Don't Repeat Yourself) principle in software design.

- **Syntax**:
  ```typescript
  class SubClass extends SuperClass {
      // additional properties and methods
  }
  ```

- **Example**:
  ```typescript
  class Employee extends Person {
      employeeId: number;

      constructor(name: string, age: number, employeeId: number) {
          super(name, age); // Call the constructor of the superclass
          this.employeeId = employeeId;
      }

      displayEmployeeInfo(): void {
          console.log(`Employee ID: ${this.employeeId}`);
      }
  }

  const employee1 = new Employee("Bob", 30, 12345);
  employee1.greet(); // Output: Hello, my name is Bob and I am 30 years old.
  employee1.displayEmployeeInfo(); // Output: Employee ID: 12345
  ```

### 6. Access Modifiers
Access modifiers control the visibility of properties and methods in a class. TypeScript supports three access modifiers:

- **Public**: Members are accessible from anywhere.
- **Private**: Members are only accessible within the class.
- **Protected**: Members are accessible within the class and its subclasses.

- **Example**:
  ```typescript
  class BankAccount {
      private balance: number;

      constructor(initialBalance: number) {
          this.balance = initialBalance;
      }

      public deposit(amount: number): void {
          this.balance += amount;
      }

      public getBalance(): number {
          return this.balance;
      }
  }

  const account = new BankAccount(100);
  account.deposit(50);
  console.log(account.getBalance()); // Output: 150
  // console.log(account.balance); // Error: Property 'balance' is private and only accessible within class 'BankAccount'.
  ```

### 7. Getters and Setters
Getters and setters provide a way to access and modify properties while allowing for additional logic when getting or setting values. They encapsulate the internal representation of the property and provide a controlled interface.

- **Example**:
  ```typescript
  class Person {
      private _age: number;

      constructor(age: number) {
          this._age = age;
      }

      get age(): number {
          return this._age;
      }

      set age(value: number) {
          if (value < 0) {
              throw new Error("Age cannot be negative.");
          }
          this._age = value;
      }
  }

  const person = new Person(30);
  console.log(person.age); // Output: 30
  person.age = 25;
  console.log(person.age); // Output: 25
  ```

### 8. Abstract Classes
Abstract classes are classes that cannot be instantiated directly and are intended to be extended by other classes. They can contain abstract methods that must be implemented in derived classes. This is useful for defining a common interface for a group of related classes.

- **Example**:
  ```typescript
  abstract class Shape {
      abstract area(): number; // Abstract method

      displayArea(): void {
          console.log(`Area: ${this.area()}`);
      }
  }

  class Circle extends Shape {
      constructor(private radius: number) {
          super();
      }

      area(): number {
          return Math.PI * this.radius * this.radius;
      }
  }

  const circle = new Circle(5);
  circle.displayArea(); // Output: Area: 78.53981633974483
  ```

### 9. Interfaces and Classes
Interfaces can be used to define contracts for classes. A class that implements an interface must provide implementations for all of its members. This promotes consistency and helps in defining the shape of an object.

- **Example**:
  ```typescript
  interface Vehicle {
      model: string;
      year: number;
      start(): void;
  }

  class Motorcycle implements Vehicle {
      constructor(public model: string, public year: number) {}

      start(): void {
          console.log(`Starting ${this.model}...`);
      }
  }

  const motorcycle = new Motorcycle("Harley", 2020);
  motorcycle.start(); // Output: Starting Harley...
  ```
  
## Summary
In this lesson, we explored the principles of classes and objects in TypeScript. We covered how to define classes, create objects, implement inheritance, manage visibility with access modifiers, and utilize abstract classes and interfaces. Mastering these concepts will enable you to write well-structured, maintainable code and effectively apply object-oriented programming principles.

## Suggested Next Steps
- Proceed to the next lesson: [Functions in TypeScript](04_functions_in_typescript.md) to learn about defining and using functions in TypeScript.

## Useful Resources
- [TypeScript Handbook - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [Understanding TypeScript's Class Syntax](https://www.digitalocean.com/community/tutorials/understanding-typescripts-class-syntax)
- [OOP Concepts in TypeScript](https://www.freecodecamp.org/news/object-oriented-programming-in-typescript/)
