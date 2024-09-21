// Error Handling Example

// Function to divide two numbers
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Try-catch block to handle errors
try {
  const result = divide(10, 0);
  console.log("Result:", result);
} catch (error) {
  console.error("Error:", error.message);
}