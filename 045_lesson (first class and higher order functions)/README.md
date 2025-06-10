- - -
### Higher-order functions
- A function that __receives__ another function as an argument, that __returns__ a new function, or __both__
- This is only possible because of first-class functions
```js
const greet = () => console.log("Hello, Maksym");
btnClose.addEventListener("click", greet);
```
Where:
- `addEventListener` - higher-order function
- `greet` - callback function
- - -