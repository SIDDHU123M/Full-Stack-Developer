// callback_functions_example.ts

// Function simulating fetching data with a callback
function fetchData(callback: (data: string) => void) {
    // Simulate asynchronous operation
    setTimeout(() => {
        callback("Data fetched");
    }, 1000);
}

// Usage
fetchData((data) => {
    console.log(data); // Output after 1 second: Data fetched
});
