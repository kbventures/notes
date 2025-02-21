# Features of CommonJS Modules

## Syntax:

In CommonJS, `module.exports` is used to export functionality, and `require()` is used to import it into another file.

### Exporting from one file:

```module.exports.myFunction = () => {
  console.log('Hello from myFunction!');
};
```

### Importing in another file:

```
const { myFunction } = require('./myModule');
myFunction();  
```

// Outputs: Hello from myFunction!

## Dynamic Module Resolution:
CommonJS modules are resolved dynamically at runtime. This allows for flexibility when requiring modules, as require() can accept variables or expressions.

Example:
```
const moduleName = './myModule';
const myModule = require(moduleName);
```

## Synchronous Loading:
CommonJS modules are loaded synchronously, meaning that the code will wait until the module is fully loaded before continuing. This is different from ES Modules, which are designed for asynchronous loading.

Example:
```
const fs = require('fs');  
```

// This is a synchronous load in CommonJS

## No File Extension Requirement (Mostly):
In CommonJS, file extensions are generally optional when requiring .js files. Node.js will assume .js if no extension is specified.

Example:
```
const myModule = require('./myModule'); 
```

// No need to add .js

## Strict Mode Not by Default:
Unlike ES Modules, CommonJS modules do not automatically run in strict mode. You need to explicitly enable strict mode if required.

Example:

```
'use strict';
module.exports.myFunction = () => {
  console.log('Strict mode is enabled!');
};
```

## Works in Node.js:
CommonJS modules are widely used in Node.js applications and are the default module system for Node.js prior to the adoption of ES Modules.

Example:
// myModule.js
```
module.exports.greet = () => {
  console.log('Hello from CommonJS!');
};
```

// main.js
```
const { greet } = require('./myModule');
greet();
```
// Outputs: Hello from CommonJS!

## Key Differences from ES Modules:
Syntax: CommonJS uses module.exports and require(), whereas ES Modules use export and import.
Synchronous Loading: CommonJS modules are loaded synchronously, while ES Modules can be loaded asynchronously.
File Extensions: CommonJS does not require file extensions in require(), but ES Modules do.
Strict Mode: CommonJS modules are not in strict mode by default, while ES Modules are.