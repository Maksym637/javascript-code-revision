- - -
### General information
1. __Asynchronous behind the scenes:__ In a nutshell, _the web APIs environment_, _the callback queue_, and _the event loop_, all together, make it possible that asynchronous code can be executed in a non-blocking way even with only one thread of execution in the engine.
2. __Microtasks queue for promises:__ Like callback queue, but for the callbacks related to promises. Has priority over callback queue.
- - -