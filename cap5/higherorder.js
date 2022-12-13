
// Higher-order functions allow us to abstract over actions, not just values. They come in several forms. For example, we can have functions that create new functions.
function greaterThan(n) {
  return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(13));

// And we can have functions that change other functions.
function noisy(f) {
  return (...args) => {
    // show the arguments
    console.log("calling with", args);
    // assign the function to a variable
    let result = f(...args);
    // print the arguments and the result
    console.log("called with", args, ", returned", result);
    return result;
  }
}

noisy(Math.min)(3, 2, 1);

// We can even write functions that provide new types of control flow.
