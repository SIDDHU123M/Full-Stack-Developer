// Async.js

// Example 1: Using Promises
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Data fetched successfully';
      resolve(data);
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// Example 2: Using async/await
async function fetchDataAsync() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchDataAsync();

// Example 3: Chaining Promises
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { name: 'John', age: 30 };
      resolve(user);
    }, 1000);
  });
}

function fetchPosts(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = ['Post 1', 'Post 2', 'Post 3'];
      resolve({ user, posts });
    }, 1500);
  });
}

fetchUser()
  .then((user) => fetchPosts(user))
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });