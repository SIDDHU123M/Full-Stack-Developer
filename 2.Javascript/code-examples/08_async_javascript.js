// Async JavaScript Example

// Example 1: Using setTimeout
console.log("Before setTimeout");
setTimeout(() => {
  console.log("Inside setTimeout");
}, 2000);
console.log("After setTimeout");

// Example 2: Using Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
};

console.log("Before fetchData");
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
console.log("After fetchData");

// Example 3: Using Async/Await
const fetchUserData = async () => {
  try {
    console.log("Before fetching user data");
    const response = await fetch("https://api.example.com/users");
    const data = await response.json();
    console.log(data);
    console.log("After fetching user data");
  } catch (error) {
    console.error(error);
  }
};

fetchUserData();