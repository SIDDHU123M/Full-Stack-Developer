// Import the necessary modules and functions for testing
import { sum, subtract } from './02_Functions';

// Test the sum function
test('sum function should return the sum of two numbers', () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(-1, 1)).toBe(0);
  expect(sum(0, 0)).toBe(0);
});

// Test the subtract function
test('subtract function should return the difference between two numbers', () => {
  expect(subtract(5, 3)).toBe(2);
  expect(subtract(1, -1)).toBe(2);
  expect(subtract(0, 0)).toBe(0);
});