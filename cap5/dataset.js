
let SCRIPTS = [
  {
    name: "Coptic",
    ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
    direction: "ltr",
    year: -200,
    living: false,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
  },
  {
    name: "Korean",
    ranges: [1009, 1130],
    direction: "ltr",
    year: -560,
    living: true,
    link: "https://en.wikipedia.org/wiki/Korean_alphabet"
  },
  {
    name: "Mongolian",
    ranges: [1150, 1230],
    direction: "ttb",
    year: -100,
    living: true,
    link: "https://en.wikipedia.org/wiki/Mongolian_alphabet"
  }
];

/* To find the scripts in the data set that are still in use, the following 
 * function might be helpful. It filters out the elements in an array that don’t 
 * pass a test. */

/* The function uses the argument named test, a function value, to fill a “gap” in 
 * the computation—the process of deciding which elements to collect. 
 * Note how the filter function, rather than deleting elements from the existing 
 * array, builds up a new array with only the elements that pass the test. 
 * This function is pure. It does not modify the array it is given. */

function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));

// Like forEach, filter is a standard array method. The example defined the 
// function only to show what it does internally. From now on, we’ll use it like 
// this instead:

console.log(SCRIPTS.filter(s => s.direction == "ttb"));
