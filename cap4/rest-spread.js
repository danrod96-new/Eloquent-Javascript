// You can expand an array, an object or a string using the spread operator ...

const a = [1, 2, 3];

// you can create a new array by :

const b = [...a, 4, 5, 6]
const c = [...a];

console.log(a);
console.log(b);
console.log(c);

const car = {
  model: "Fiesta",
  manufacturer: "Ford",
  fullName: function() {
    return `${this.manufacturer} ${this.model}`
  }
}

// This works for objects as well. Clone an object with:

const newObj = {...car};

console.log(newObj.fullName());

// Using strings, the spread operator creates an array with each char in the string

const hey = "Hey";

const arrayized = [...hey];

console.log(arrayized);

// This operator has some pretty useful applications. The most important 
// one is the ability to use an array as function argument in a very simple way:

const f = (foo, bar) => { return (foo + bar); }
const z = [1, 2]

console.log(f(...z));

// The rest element is useful when working with array destructuring

const numbers = [1, 2, 3, 4, 5];

[first1, second1, ...others1] = numbers;

// 3, 4, 5
console.log(others1);

// and spread elements:

const nums = [1, 2, 3, 4, 5]
const sum = (a, b, c, d, e) => a + b + c + d + e
const sumOfNums = sum(...nums);

// 15
console.log(sumOfNums);

// Spread properties allow to create a new object by combining the 
// properties of the object passed after the spread operator

const { first, second, ...others } = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5
};

const items = { first, second, ...others };

console.log(others);