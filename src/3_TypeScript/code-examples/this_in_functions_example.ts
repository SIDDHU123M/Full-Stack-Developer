// this_in_functions_example.ts

// Class demonstrating the use of  keyword
class Counter {
    count: number = 0;

    increment() {
        this.count++;
        console.log(this.count);
    }

    // Arrow function to retain  context
    delayedIncrement() {
        setTimeout(() => {
            this.increment(); //  refers to Counter instance
        }, 1000);
    }
}

// Usage
const counter = new Counter();
counter.increment(); // Output: 1
counter.delayedIncrement(); // After 1 second: Output: 2
