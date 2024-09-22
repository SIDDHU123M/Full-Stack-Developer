// Example 1: Error handling with try...catch block
try {
  // Code that may throw an error
  throw new Error('Something went wrong');
} catch (error) {
  // Code to handle the error
  console.error(error);
}

// Example 2: Custom error creation
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

try {
  throw new CustomError('Custom error message');
} catch (error) {
  if (error instanceof CustomError) {
    console.error('Custom error:', error.message);
  } else {
    console.error('Unknown error:', error);
  }
}