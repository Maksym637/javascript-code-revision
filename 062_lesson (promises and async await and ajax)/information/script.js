console.log("Test start"); // <1>

setTimeout(() => console.log("0 second timer"), 0); // <2>

Promise.resolve("Resolved promise 1").then((response) => console.log(response)); // <3>

console.log("Test end"); // <4>

// Execution order:
// <1>, <4>, <3>, <2>
