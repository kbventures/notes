# Features of ES Modules (ESM):

## Syntax:

import and export are used for importing and exporting code between files.

```Exporting from one file
export const myFunction = () => {};
```
Importing in another file
```
import { myFunction } from './myModule.js';
```
## Static Structure:

ES modules have a static structure, meaning that imports are resolved at compile time. This allows tools like bundlers (Webpack, Rollup) to optimize code better.

## Support for Top-Level await:

With modern implementations, ES modules allow top-level await, which means you can use await at the top level of a module, without wrapping it inside an async function.

## Strict Mode by Default:

All code in an ES module runs in strict mode automatically, meaning it adheres to stricter parsing and error-checking rules.

## File Extensions:

ES Modules require file extensions (e.g., .js, .mjs, .ts), unlike CommonJS (another module system) where extensions are optional in require() calls.
Works in Browsers and Node.js:

ES Modules can be used both in modern browsers and in Node.js (from version 12.x onwards).

### Example:

// myModule.js
```
export const greet = () => {
  console.log('Hello, world!');
};
```
// main.js
```
import { greet } from './myModule.js';
greet();  
```

 // Outputs: Hello, world!