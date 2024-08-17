
/* If you need to synchronize different promises, 
 * Promise.all() helps you define a list of promises, and 
 * execute something when they are all resolved. */

const f1 = fetch('https://jsonplaceholder.typicode.com/posts/3');
const f2 = fetch('https://jsonplaceholder.typicode.com/posts/4');

console.log("Array Of RESULTS...........................")

Promise.all([f1, f2])
  .then(res => {
    console.log('Array of results', res);
  })
  .catch(err => {
    console.error(err);
  });


// The ES2015 destructuring assignment syntax allows you to also do

console.log("The ES2015 destructuring assignment syntax allows you to also do");

Promise.all([f1, f2]).then(([res1, res2]) => {
  console.log('Results: ', res1, res2);
});