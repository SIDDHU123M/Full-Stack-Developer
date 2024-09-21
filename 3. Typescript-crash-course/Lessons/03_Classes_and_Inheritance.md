# Classes and Inheritance

In TypeScript, classes provide a way to define blueprints for objects. They encapsulate data and behavior into a single unit, making it easier to manage and reuse code. In this lesson, we will explore the concepts of classes, inheritance, and method overriding in TypeScript.

## Class Syntax

The syntax for defining a class in TypeScript is as follows:

```typescript
class ClassName {
  // Properties
  property1: type;
  property2: type;

  // Constructor
  constructor(parameter1: type, parameter2: type) {
    this.property1 = parameter1;
    this.property2 = parameter2;
  }

  // Methods
  method1() {
    // Method implementation
  }

  method2() {
    // Method implementation
  }
}
```

In the above example, `ClassName` is the name of the class. It can have properties, a constructor, and methods. Properties are defined with their respective types. The constructor is a special method that is called when an object of the class is created. Methods are functions defined within the class.

## Inheritance

Inheritance allows a class to inherit properties and methods from another class. The class that is being inherited from is called the base class or superclass, and the class that inherits from it is called the derived class or subclass. In TypeScript, we can use the `extends` keyword to implement inheritance.

```typescript
class BaseClass {
  // Properties and methods
}

class DerivedClass extends BaseClass {
  // Additional properties and methods
}
```

In the above example, `DerivedClass` inherits from `BaseClass`. This means that `DerivedClass` will have access to all the properties and methods defined in `BaseClass`. It can also define its own additional properties and methods.

## Method Overriding

Method overriding allows a subclass to provide its own implementation of a method that is already defined in the superclass. This allows the subclass to customize the behavior of the inherited method. To override a method, we use the `override` keyword.

```typescript
class BaseClass {
  method() {
    // Base implementation
  }
}

class DerivedClass extends BaseClass {
  override method() {
    // Derived implementation
  }
}
```

In the above example, `DerivedClass` overrides the `method` defined in `BaseClass` with its own implementation. When the `method` is called on an object of `DerivedClass`, the derived implementation will be executed instead of the base implementation.

## Practical Examples

Let's look at some practical examples to understand classes and inheritance in TypeScript.

### Example 1: Vehicle Management System

```typescript
class Vehicle {
  brand: string;
  color: string;

  constructor(brand: string, color: string) {
    this.brand = brand;
    this.color = color;
  }

  start() {
    console.log(`Starting the ${this.brand} vehicle.`);
  }

  stop() {
    console.log(`Stopping the ${this.brand} vehicle.`);
  }
}

class Car extends Vehicle {
  drive() {
    console.log(`Driving the ${this.brand} car.`);
  }
}

class Bike extends Vehicle {
  ride() {
    console.log(`Riding the ${this.brand} bike.`);
  }
}

// Usage
const car = new Car("Toyota", "Red");
car.start(); // Output: Starting the Toyota vehicle.
car.drive(); // Output: Driving the Toyota car.
car.stop(); // Output: Stopping the Toyota vehicle.

const bike = new Bike("Honda", "Blue");
bike.start(); // Output: Starting the Honda vehicle.
bike.ride(); // Output: Riding the Honda bike.
bike.stop(); // Output: Stopping the Honda vehicle.
```

In the above example, we have a `Vehicle` class that has properties `brand` and `color`, and methods `start` and `stop`. The `Car` class and `Bike` class inherit from the `Vehicle` class. The `Car` class has an additional method `drive`, and the `Bike` class has an additional method `ride`. We create objects of `Car` and `Bike` and call their respective methods.

### Example 2: Method Overriding

```typescript
class Animal {
  makeSound() {
    console.log("Animal is making a sound.");
  }
}

class Dog extends Animal {
  override makeSound() {
    console.log("Dog is barking.");
  }
}

class Cat extends Animal {
  override makeSound() {
    console.log("Cat is meowing.");
  }
}

// Usage
const animal = new Animal();
animal.makeSound(); // Output: Animal is making a sound.

const dog = new Dog();
dog.makeSound(); // Output: Dog is barking.

const cat = new Cat();
cat.makeSound(); // Output: Cat is meowing.
```

In the above example, we have an `Animal` class with a `makeSound` method. The `Dog` class and `Cat` class inherit from the `Animal` class and override the `makeSound` method with their own implementations. We create objects of `Animal`, `Dog`, and `Cat` and call the `makeSound` method on each object.

## Exercises

1. Create a `Shape` class with properties `color` and `area`. Implement a method `calculateArea` that calculates and sets the `area` property. Create subclasses `Circle` and `Rectangle` that inherit from `Shape` and override the `calculateArea` method with their own implementations. Create objects of `Circle` and `Rectangle` and calculate their areas.

2. Create a `Person` class with properties `name` and `age`. Implement a method `introduce` that prints the name and age of the person. Create a subclass `Student` that inherits from `Person` and adds a property `grade`. Override the `introduce` method in the `Student` class to include the grade. Create objects of `Person` and `Student` and call the `introduce` method on each object.

## Conclusion

In this lesson, we learned about classes, inheritance, and method overriding in TypeScript. Classes provide a way to define blueprints for objects, and inheritance allows a class to inherit properties and methods from another class. Method overriding allows a subclass to provide its own implementation of a method defined in the superclass. These concepts are essential for building complex applications in TypeScript.

In the next lesson, we will explore generics in TypeScript, which allow us to create reusable code that can work with different types.