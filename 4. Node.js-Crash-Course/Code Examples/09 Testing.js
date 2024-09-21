// This file contains an example of unit tests

// Import the necessary testing framework
const { describe, it } = require('mocha');
const { expect } = require('chai');

// Import the module to be tested
const mathUtils = require('../src/mathUtils');

// Test suite for the mathUtils module
describe('mathUtils', () => {
  // Test case for the add function
  describe('add', () => {
    it('should return the sum of two numbers', () => {
      const result = mathUtils.add(2, 3);
      expect(result).to.equal(5);
    });
  });

  // Test case for the subtract function
  describe('subtract', () => {
    it('should return the difference between two numbers', () => {
      const result = mathUtils.subtract(5, 3);
      expect(result).to.equal(2);
    });
  });

  // Test case for the multiply function
  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      const result = mathUtils.multiply(2, 3);
      expect(result).to.equal(6);
    });
  });

  // Test case for the divide function
  describe('divide', () => {
    it('should return the quotient of two numbers', () => {
      const result = mathUtils.divide(6, 3);
      expect(result).to.equal(2);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => mathUtils.divide(6, 0)).to.throw('Division by zero');
    });
  });
});