
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};

console.log(day1.squirrel);

console.log(day1.wolf);

day1.wolf = false;

console.log(day1.wolf);

let description = {
  work: "Went to work",
  "touched tree": "Yes",
};

let anObject = {
  left: 1,
  right: 2,
};

console.log(anObject.left);

delete anObject.left;

console.log(anObject.left);

console.log("left" in anObject);

console.log("right" in anObject);

console.log(Object.keys({x: 0, y: 0, z: 2}));

let objectA = {a: 1, b: 2};

console.log(objectA);

Object.assign(objectA, {b: 3, c: 4});

console.log(objectA);
