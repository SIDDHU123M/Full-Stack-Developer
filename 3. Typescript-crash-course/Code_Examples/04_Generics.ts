// Implementation of a generic stack data structure

class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

// Example usage

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

console.log(numberStack.pop()); // Output: 3
console.log(numberStack.peek()); // Output: 2
console.log(numberStack.isEmpty()); // Output: false
console.log(numberStack.size()); // Output: 2

const stringStack = new Stack<string>();
stringStack.push("Hello");
stringStack.push("World");

console.log(stringStack.pop()); // Output: "World"
console.log(stringStack.peek()); // Output: "Hello"
console.log(stringStack.isEmpty()); // Output: false
console.log(stringStack.size()); // Output: 1