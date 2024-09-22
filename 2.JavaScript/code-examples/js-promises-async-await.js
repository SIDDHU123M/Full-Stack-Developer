// Promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 2000);
});

promise.then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});

// Async/Await
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncFunction() {
  try {
    console.log('Before delay');
    await delay(2000);
    console.log('After delay');
  } catch (error) {
    console.error(error);
  }
}

asyncFunction();