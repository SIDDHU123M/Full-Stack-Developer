// Async Example

// Example 1: Using setTimeout with a callback
console.log('Before setTimeout');
setTimeout(() => {
  console.log('Inside setTimeout callback');
}, 2000);
console.log('After setTimeout');

// Example 2: Using Promises
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

console.log('Before delay');
delay(2000)
  .then(() => {
    console.log('Inside delay Promise');
  })
  .finally(() => {
    console.log('After delay');
  });

// Example 3: Using async/await
const wait = async () => {
  console.log('Before wait');
  await delay(2000);
  console.log('After wait');
};

wait();

// Example 4: Error handling with async/await
const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

fetchData();