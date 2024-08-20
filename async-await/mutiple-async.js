/*
 * Async functions can be chained very easily, and the syntax is 
 * much more readable than with plain promises
 */

const promiseToDoSomething = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve("I did this !"), 2000);
  });
}

const watchOverSomeoneDoingSomething = async () => {
  const something = await promiseToDoSomething();
  return something + ' and I watched it !';
}

const finalWatch = async () => {
  const something = await watchOverSomeoneDoingSomething();
  return something + " final watch.";
}

finalWatch().then(res => {
  console.log(res); // I did this ! and I watched it ! final watch.
});

/* Debugging promises is hard because the debugger will not step 
 * over asynchronous code.
 * Async/await makes this very easy because to the compiler it’s 
 * just like synchronous code. */
