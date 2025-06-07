- - -
### Main pillars of JavaScript
1. High-level:
    - Low-level - developer has to manage resources manually
    - High-level - developer does NOT have to worry, everything happens automatically
2. Garbage-collected - cleaning the memory so we don't have to do it
3. Interpreted or just-in-time compiled:
    - `JS code` -> `Machine code` (convert to machine code = compiling)
4. Multi-paradigm:
    - Procedural programming
    - Object-oriented programming (OOP)
    - Functional programming
5. Prototype-based object-oriented
6. First-class functions:
    - In a language with __first-class functions__, functions are simply __treated as variables__. We can pass them into other functions, and return them from functions
7. Dynamic - dynamically typed language
8. Single-threaded
9. Non-blocking event loop
    - By using an __event loop__: takes long running tasks, executes them in the "background", and puts them back in the main thread once they are finished
- - -
### JavaScript Engine and Runtime
__Engine__ is a program that executes JS code

__Compilation__: Entire code is converted into machine code at once, and written to a binary that can be executed by a computer (Eg.: C)

__Interpretation__: Interpreter runs through the source code and executes it line by line (Eg.: JS)

JS runtime:
- Runtime in the browser
- Runtime in the `node.js`
- - -
### Execution contexts and the call stack
#### What is an execution context?
1. Creation of _global execution context_ (for top-level code)
    - Execution context - is an environment in which a piece of JavaScript is executed. Stores all the necessary information for some code to be executed
2. Execution of _top-level code_ (inside global EC)
3. Execution of _functions_ and waiting for _callbacks_

#### What is inside execution context?
1. Variable environment
    - `let`, `const`, and `var` declarations
    - Functions
    - `arguments` object
2. Scope chain
3. `this` keyword

#### The call stack
The __call stack__ is a "place" where execution contexts get stacked on top of each other, to keep track of where we are in the execution
- - -
### Scope and the scope chain
_Scoping:_ How our program's variables are __organized__ and __accessed__. "Where do variables live?" or "Where can we access a certain variable, and where not?"

_Scope_: Space or environment in which a certain variable is __declared__ (variable environment in case of functions). There is __global__ scope, __function__ scope, and __block__ scope

_Scope of a variable_: Region of our code where a certain variable can be __accessed__

!Scope has access to variables from all __outer__ scopes = scope chain. (Scope chain - has nothing to do with order in which functions were called)
- - -