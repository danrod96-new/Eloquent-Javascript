

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

/*
 * Another common thing to do with arrays is to compute a single value from them. 
 * Our recurring example, summing a collection of numbers, is an instance of this. 
 * Another example is finding the script with the most characters.
 */

/* The higher-order operation that represents this pattern is called reduce 
 * (sometimes also called fold). It builds a value by repeatedly taking a single 
 * element from the array and combining it with the current value. When summing 
 * numbers, you’d start with the number zero and, for each element, add that to 
 * the sum. */

function reduce(array, combine, start) {
  let current = start;

  for (let element of array) {
    current = combine(current, element);
  }

  return current;
}

// This is like a sum of nums
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

/* To use reduce (twice) to find the script with the most characters, 
 * we can write something like this */
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));