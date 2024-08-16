/* Promises are one way to deal with asynchronous code, without 
 * writing too many callbacks in your code. */

/* Once a promise has been called, it will start in pending state. 
 * This means that the caller function continues the execution, 
 * while it waits for the promise to do its own processing, and 
 * give the caller function some feedback. At this point, the caller 
 * function waits for it to either return the promise in a resolved 
 * state, or in a rejected state, but as you know JavaScript is 
 * asynchronous, so the function continues its execution while the 
 * promise does it work. */

/* As you can see the promise checks the done global constant, and if 
 * that's true, we return a resolved promise, otherwise a rejected 
 * promise. Using resolve and reject we can communicate back a value, in the above case we just return a string, but it could be an object as well. */

let done = true;

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built';
    resolve(workDone);
  } else {
    const why = "Still Working on this";
    reject(why);
  }
});

// Let's consume the Promise

const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log(ok);
    })
    .catch(err => {
      console.log(err);
    })
}

/* Running checkIfItsDone() will execute the isItDoneYet() promise and 
 * will wait for it to resolve, using the then callback, and if there 
 * is an error, it will handle it in the catch callback. */

checkIfItsDone();