/* Given an object, using the destructuring syntax you can 
 * extract just some values and put them into named variables: */

const person = {
  firstName: 'Tom',
  lastName: 'Dallas',
  actor: false,
  age: 41
};

const { firstName: name1, age } = person;

console.log(name1); // Tom
console.log(age); // 41


// The syntax also works on arrays
const a = [1, 2, 3, 4, 5];
const [first2, second2] = a;

console.log(first2); // 1
console.log(second2); // 2

// This statement creates 3 new variables by getting the items with 
// index 0, 1, 4 from the array a
const [first3, second3, , , fifth3] = a;

console.log(fifth3);