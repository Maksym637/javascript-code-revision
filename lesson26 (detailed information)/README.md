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