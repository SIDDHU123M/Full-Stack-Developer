// Control Structures in JavaScript

// If statement
const age = 18;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Switch statement
const day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's Monday.");
    break;
  case "Tuesday":
    console.log("It's Tuesday.");
    break;
  case "Wednesday":
    console.log("It's Wednesday.");
    break;
  default:
    console.log("It's another day of the week.");
}

// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// Do-while loop
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 5);

// Break statement
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// Continue statement
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}