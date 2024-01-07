
/* Repeat function to do something N-times */

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i)
  }
}

repeat(10, console.log);

/* We don’t have to pass a predefined function to repeat. Often, it is easier 
 * to create a function value on the spot instead. */
let labels = [];

repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});

console.log(labels);