// Code Examples - Arrays

// Example 1: Creating an array
const fruits = ['apple', 'banana', 'orange'];

// Example 2: Accessing array elements
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'
console.log(fruits[2]); // Output: 'orange'

// Example 3: Modifying array elements
fruits[1] = 'grape';
console.log(fruits); // Output: ['apple', 'grape', 'orange']

// Example 4: Adding elements to the end of an array
fruits.push('mango');
console.log(fruits); // Output: ['apple', 'grape', 'orange', 'mango']

// Example 5: Removing elements from the end of an array
fruits.pop();
console.log(fruits); // Output: ['apple', 'grape', 'orange']

// Example 6: Adding elements to the beginning of an array
fruits.unshift('kiwi');
console.log(fruits); // Output: ['kiwi', 'apple', 'grape', 'orange']

// Example 7: Removing elements from the beginning of an array
fruits.shift();
console.log(fruits); // Output: ['apple', 'grape', 'orange']

// Example 8: Iterating over an array using a for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Example 9: Iterating over an array using forEach method
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// Example 10: Using map method to transform array elements
const uppercasedFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase();
});
console.log(uppercasedFruits); // Output: ['APPLE', 'GRAPE', 'ORANGE']

// Example 11: Using filter method to filter array elements
const filteredFruits = fruits.filter(function(fruit) {
  return fruit.length > 5;
});
console.log(filteredFruits); // Output: ['orange']

// Example 12: Using reduce method to calculate the sum of array elements
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function(acc, curr) {
  return acc + curr;
}, 0);
console.log(sum); // Output: 15