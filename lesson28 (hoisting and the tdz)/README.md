- - -
### Hoisting and The TDZ
__Hoisting__: Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope".

|            Type                 | Hoisted? | Initial value        | Scope               |
| --------------------------------| -------- | -------------------- | ------------------- |
| function declarations           | Yes      | Actual function      | Block  (strict mode)|
| var variables                   | Yes      | undefined            | Function            |
| let and const variables         | No       | <uninitialized>, TDZ | Block               |
| function expression and arrows  | Depends  | Depends              | Depends             |
- - -