
// Higher-order functions allow us to abstract over actions, not just values. 
// They come in several forms. For example, we can have functions that create
// new functions.
function greaterThan(n) {
  return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(13));

let greaterThan50 = greaterThan(50);

console.log(greaterThan50(348));

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
function unless(test, then) {
  if (!test) {
    then();
  }
}

for (let i = 0; i <= 10; i++) {
  unless(i % 2 == 1, () => {
    console.log(i, "is even");
  });
}

// There is a built-in array method, forEach, that provides something like a 
// for/of loop as a higher-order function.

["A", "B"].forEach(l => console.log(l));

function addCharA(theChar = "") {
  return (theChar + "A");
}

let theArray = ["food", "tokens", "market"];

theArray.forEach(l => console.log(addCharA(l)));