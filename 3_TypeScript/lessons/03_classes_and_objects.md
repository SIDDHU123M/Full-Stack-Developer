# Classes and Objects

This lesson covers the concept of classes and objects in TypeScript.

## Classes

A class is a blueprint for creating objects. It defines the properties and methods that an object of that class will have. In TypeScript, we can define a class using the `class` keyword.

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
```

In the above example, we define a `Person` class with `name` and `age` properties, and a `sayHello` method. The `constructor` method is used to initialize the properties of the object when it is created.

## Objects

An object is an instance of a class. We can create objects of a class using the `new` keyword followed by the class name and any required arguments for the constructor.

```typescript
const person1 = new Person("John Doe", 25);
person1.sayHello(); // Output: Hello, my name is John Doe and I am 25 years old.

const person2 = new Person("Jane Smith", 30);
person2.sayHello(); // Output: Hello, my name is Jane Smith and I am 30 years old.
```

In the above example, we create two `Person` objects, `person1` and `person2`, with different names and ages. We then call the `sayHello` method on each object to display a greeting.

## Inheritance

In TypeScript, we can create a class that inherits properties and methods from another class using the `extends` keyword. This is known as inheritance.

```typescript
class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
  }
}
```

In the above example, we define a `Student` class that extends the `Person` class. The `Student` class has an additional `grade` property and a `study` method. We use the `super` keyword in the constructor to call the parent class's constructor and initialize the `name` and `age` properties.

```typescript
const student1 = new Student("Alice Johnson", 15, "9th");
student1.sayHello(); // Output: Hello, my name is Alice Johnson and I am 15 years old.
student1.study(); // Output: Alice Johnson is studying in grade 9th.
```

In the above example, we create a `Student` object and call both the `sayHello` and `study` methods.

## Conclusion

Classes and objects are fundamental concepts in object-oriented programming. They allow us to create reusable and modular code by defining blueprints for objects. In TypeScript, we can define classes using the `class` keyword and create objects using the `new` keyword. We can also use inheritance to create subclasses that inherit properties and methods from a parent class.

```

Please note that the file is intentionally left blank as per your request.