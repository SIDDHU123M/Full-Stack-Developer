
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

    // Implementing the abstract method
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    // Implementing the abstract method
    area(): number {
        return this.width * this.height;
    }
}

// Usage
const circle = new Circle(5);
circle.displayArea(); // Output: Area: 78.53981633974483

const rectangle = new Rectangle(4, 6);
rectangle.displayArea(); // Output: Area: 24
