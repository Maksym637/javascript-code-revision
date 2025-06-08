- - -
### The `this` keyword
- _`this` keyword/variable_: Special variable that is created for every execution context (every function). Takes the value of (points to) the "owner" of the function in which the `this` keyword is used;
- `this` is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called

_Differences_:
- Method - `this` = `<Object that is calling the method>`
- Simple function call - `this` = `undefined`
- Arrow functions - `this` = `<this of surrounding function (lexical this)>`
- Event listener - `this` = `<DOM element that the handler is attached to>`
- - -