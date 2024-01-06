
/**
 * Write a range function that takes two arguments, 
 * start and end, and returns an array containing all the 
 * numbers from start up to (and including) end.
*/
const range = (start, end, step = 1) => {
  let numbers = [];

  if (step > 0) {
    if (start > end) {
      for (let i = start; i >= end; i = i - step) {
        numbers.push(i);
      }
    }
    for (let i = start; i <= end; i = i + step) {
      numbers.push(i);
    }
  } else {
    if (start > end) {
      for (let i = start; i >= end; i = i + step) {
        numbers.push(i);
      }
    } else {
      console.log("Error");
    }
  }

  return numbers;
}

/**
 * Next, write a sum function that takes an array of numbers and returns the sum 
 * of these numbers. Run the example program and see whether it does indeed return 55.
*/
const sum = (numbers) => {
  let summatory = 0;

  for (number of numbers) {
    summatory += number;
  }

  return summatory;
}

console.log(range(1, 10, 2));
console.log(sum(range(1, 10, 2)));
console.log(range(10, 2, -2));
console.log(sum(range(5, 2)));

console.log("AND Finally");

console.log(sum(range(1, 10)));