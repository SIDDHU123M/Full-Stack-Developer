// Import the necessary functions to be tested
const { sum, multiply } = require('./helpers');

// Test the sum function
test('sum function should return the sum of two numbers', () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(-1, 1)).toBe(0);
  expect(sum(0, 0)).toBe(0);
});

// Test the multiply function
test('multiply function should return the product of two numbers', () => {
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(-1, 1)).toBe(-1);
  expect(multiply(0, 5)).toBe(0);
});