/* ES Modules is the ECMAScript standard for working with modules.

While Node.js has been using the CommonJS standard for years, the 
browser never had a module system, as every major decision such as a 
module system must be first standardized by ECMAScript and then 
implemented by the browser.

This standardization process completed with ES6 and browsers started 
implementing this standard trying to keep everything well aligned, 
working all in the same way, and now ES Modules are supported in
 Chrome, Safari, Edge and Firefox (since version 60).

Modules are very cool, because they let you encapsulate all sorts of 
functionality, and expose this functionality to other JavaScript 
files, as libraries. */

/* In this example, the uppercase.js module defines a default export, 
 * so when we import it, we can assign it a name we prefer: */

// This is the ES Module syntax
import toUpperCase from './uppercase.mjs';

// CommonJS syntax
import { a } from './many-imports.mjs';

console.log(toUpperCase("Cholos"));

console.log(a);
