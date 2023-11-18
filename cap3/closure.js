
/**
 * The following code shows an example of this. It defines a function, 
 * wrapValue, that creates a local binding. 
 * It then returns a function that accesses and returns this local 
 * binding. 
 */

function wrapValue(n) {
  let local = n;

  // This is weird...
  return () => local;
}

/*
 * This feature—being able to reference a specific instance of a 
 * local binding in an enclosing scope—is called closure. 
 * A function that references bindings from local scopes around 
 * it is called a closure. This behavior not only frees you from 
 * having to worry about lifetimes of bindings but also makes it 
 * possible to use function values in some creative ways.
 */
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1());
console.log(wrap2());

/*
 * In the example, multiplier is called and creates an environment 
 * in which its factor parameter is bound to 2. 
 * The function value it returns, which is stored in twice, 
 * remembers this environment. So when that is called, 
 * it multiplies its argument by 2.
 */

function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);

console.log(twice(5));

