- - -
### Types of functions
1. Function declaration - function that can be used before it's declared
```js
function calculateAge(birthYear) {
    return 2025 - birthYear;
}
```

2. Function expression - essentially a function _value_ stored in a variable
```js
const calculateAge = function (birthYear) {
    return 2025 - birthYear;
}
```

3. Arrow function - great for a quick one-line functions. Has no `this` keyword
```js
const calculateAge = birthYear => 2025 - birthYear;
```
- - -
