/* Async functions are a combination of promises and generators, 
 * and basically, they are a higher level abstraction over promises. +
 * Let me repeat: async/await is built on promises. */

 // An async function returns a promise:

 const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did this'), 3000);
  });
 };

console.log("Running Promise first...");

/* When you want to call this function you prepend await, 
 * and the calling code will stop until the promise is 
 * resolved or rejected. One caveat: the client function 
 * must be defined as async  */
const doSomething = async () => {
  console.log(await doSomethingAsync());
};

console.log("Before");
doSomething();
console.log("After");


/* Prepending the async keyword to any function means that the function 
 * will return a promise.
 * Even if it’s not doing so explicitly, it will internally make it return a promise.
 * This is why this code is valid */

const aFunction = async () => {
  return 'My Personal Test';
}

aFunction().then(res => {
  console.log(res);
});
