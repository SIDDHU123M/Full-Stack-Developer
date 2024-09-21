// Examples showcasing functions and interfaces in TypeScript

// Function with type annotations for parameters and return type
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Optional and default parameters
function introduce(name: string, age?: number, occupation: string = 'Unknown'): string {
  if (age) {
    return `My name is ${name}, I'm ${age} years old, and I work as a ${occupation}.`;
  } else {
    return `My name is ${name}, and I work as a ${occupation}.`;
  }
}

// Interface for a person
interface Person {
  name: string;
  age: number;
  occupation: string;
}

// Function that takes an interface as a parameter and returns a value
function displayPerson(person: Person): void {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(`Occupation: ${person.occupation}`);
}

// Example usage
const person: Person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Engineer'
};

console.log(greet('Alice'));
console.log(introduce('Bob', 25, 'Web Developer'));
console.log(introduce('Charlie', undefined, 'Designer'));
displayPerson(person);