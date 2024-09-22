# Advanced JavaScript Patterns

In JavaScript, there are several advanced design patterns that can be used to solve complex problems and improve code organization. These patterns leverage the flexibility and dynamic nature of the language to create reusable and maintainable code. In this document, we will explore some of the most commonly used advanced JavaScript patterns.

## Module Pattern

The Module Pattern is a design pattern that encapsulates related variables and functions into a single object, providing a way to create private and public members. It helps to prevent naming conflicts and provides a clean and organized way to structure code. Here's an example of the Module Pattern:

```javascript
const module = (function() {
  // Private members
  let privateVariable = 'Private';

  function privateFunction() {
    console.log('This is a private function');
  }

  // Public members
  return {
    publicVariable: 'Public',
    publicFunction() {
      console.log('This is a public function');
    }
  };
})();

console.log(module.publicVariable); // Output: Public
module.publicFunction(); // Output: This is a public function
console.log(module.privateVariable); // Output: undefined
module.privateFunction(); // Output: TypeError: module.privateFunction is not a function
```

## Singleton Pattern

The Singleton Pattern is a creational design pattern that restricts the instantiation of a class to a single object. It ensures that only one instance of the class exists throughout the application and provides a global point of access to it. Here's an example of the Singleton Pattern:

```javascript
const singleton = (function() {
  let instance;

  function createInstance() {
    // Private members
    const privateVariable = 'Private';

    function privateFunction() {
      console.log('This is a private function');
    }

    // Public members
    return {
      publicVariable: 'Public',
      publicFunction() {
        console.log('This is a public function');
      }
    };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instance1 = singleton.getInstance();
const instance2 = singleton.getInstance();

console.log(instance1 === instance2); // Output: true
```

## Factory Pattern

The Factory Pattern is a creational design pattern that provides an interface for creating objects but allows subclasses to decide which class to instantiate. It encapsulates object creation logic and provides a way to create different types of objects based on a common interface. Here's an example of the Factory Pattern:

```javascript
class Product {
  constructor(name) {
    this.name = name;
  }

  display() {
    console.log(`Product: ${this.name}`);
  }
}

class ProductFactory {
  createProduct(type, name) {
    switch (type) {
      case 'A':
        return new ProductA(name);
      case 'B':
        return new ProductB(name);
      default:
        throw new Error('Invalid product type');
    }
  }
}

class ProductA extends Product {
  display() {
    console.log(`Product A: ${this.name}`);
  }
}

class ProductB extends Product {
  display() {
    console.log(`Product B: ${this.name}`);
  }
}

const factory = new ProductFactory();
const productA = factory.createProduct('A', 'Product A');
const productB = factory.createProduct('B', 'Product B');

productA.display(); // Output: Product A: Product A
productB.display(); // Output: Product B: Product B
```

These are just a few examples of advanced JavaScript patterns. By understanding and applying these patterns, you can write more maintainable and scalable JavaScript code.
