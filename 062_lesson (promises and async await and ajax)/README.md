- - -
### Asynchronous JavaScript, AJAX, and APIs
Asynchronous JavaScript And XML (__AJAX__): Allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can _request data_ from web servers dynamically.
- - -
### Callback Hell
```js
setTimeout(() => {
  console.log("1 second passed");
  setTimeout(() => {
    console.log("2 seconds passed");
    setTimeout(() => {
      console.log("3 seconds passed");
      setTimeout(() => {
        console.log("4 seconds passed");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
```
- - -