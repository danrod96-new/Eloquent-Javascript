
/* Bindings declared with let and const are in fact local to the block that they are 
 * declared in, so if you create one of those inside of a loop, the code before and 
 * after the loop cannot “see” it. In pre-2015 JavaScript, only functions created new 
 * scopes, so old-style bindings, created with the var keyword, are visible throughout
 * the whole function that they appear in—or throughout the global scope, if they are 
 * not in a function. */

let x = 10;

if (true) {
  let y = 20;
  var z = 30;

  console.log(x + y + z);
}

// y is not visible here
console.log(x + z);

