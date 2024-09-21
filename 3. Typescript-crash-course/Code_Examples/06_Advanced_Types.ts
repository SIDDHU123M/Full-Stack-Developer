// Examples demonstrating advanced types in TypeScript

// Intersection Types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const employee: ElevatedEmployee = {
  name: 'John Doe',
  privileges: ['create', 'edit'],
  startDate: new Date(),
};

// Union Types
type Combinable = string | number;

function combine(input1: Combinable, input2: Combinable) {
  if (typeof input1 === 'string' || typeof input2 === 'string') {
    return input1.toString() + input2.toString();
  }
  return input1 + input2;
}

const result = combine('Hello', 'World');
console.log(result);

// Type Guards
function addWithCheck(
  input1: Combinable,
  input2: Combinable,
  resultConversion: 'as-number' | 'as-string'
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const additionResult = addWithCheck(5, 10, 'as-number');
console.log(additionResult);

// Type Aliases
type User = { name: string; age: number };
const user: User = { name: 'John Doe', age: 30 };

// Mapped Types
type ReadonlyUser = Readonly<User>;
const readonlyUser: ReadonlyUser = { name: 'John Doe', age: 30 };
// readonlyUser.age = 31; // Error: Cannot assign to 'age' because it is a read-only property

// Conditional Types
type Check<T> = T extends string ? boolean : number;
type StringCheck = Check<string>; // boolean
type NumberCheck = Check<number>; // number