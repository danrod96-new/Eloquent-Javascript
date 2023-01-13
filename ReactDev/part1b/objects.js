
// There are a few different ways of defining objects in JavaScript. One very common method is using object literals, which happens by listing its properties within braces:
const object1 = {
  name: "Arvo Park",
  age: 35,
  education: 'PhD',
};

const object2 = {
  name: 'Full stack web application development',
  level: 'beginner',
  size: 5,
};

const object3 = {
  name: {
    first: 'Dan',
    last: 'Asimov',
  },
  grades: [2, 3, 5, 3],
  department: 'MIT',
};

// The properties of an object are referenced by using the "dot" notation, or by using brackets:
console.log(object1.name);

const fieldName = 'age';

console.log(object1[fieldName]);

// You can also add properties to an object on the fly by either using dot notation or brackets:
object1.address = "Ottawa";
object1["secret number"] = 1323252;

console.log(object1);