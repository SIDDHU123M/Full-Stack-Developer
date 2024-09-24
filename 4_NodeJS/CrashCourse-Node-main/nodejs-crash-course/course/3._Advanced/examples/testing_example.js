// Testing Example

// Import the necessary modules and libraries
const assert = require('assert');
const { add, subtract } = require('../../code-examples/02_core_modules');

// Test the add function
describe('add', () => {
  it('should return the sum of two numbers', () => {
    const result = add(2, 3);
    assert.strictEqual(result, 5);
  });

  it('should return NaN if one or both arguments are not numbers', () => {
    const result1 = add(2, '3');
    const result2 = add('2', '3');
    const result3 = add('2', 3);
    assert.strictEqual(isNaN(result1), true);
    assert.strictEqual(isNaN(result2), true);
    assert.strictEqual(isNaN(result3), true);
  });
});

// Test the subtract function
describe('subtract', () => {
  it('should return the difference between two numbers', () => {
    const result = subtract(5, 3);
    assert.strictEqual(result, 2);
  });

  it('should return NaN if one or both arguments are not numbers', () => {
    const result1 = subtract(5, '3');
    const result2 = subtract('5', '3');
    const result3 = subtract('5', 3);
    assert.strictEqual(isNaN(result1), true);
    assert.strictEqual(isNaN(result2), true);
    assert.strictEqual(isNaN(result3), true);
  });
});