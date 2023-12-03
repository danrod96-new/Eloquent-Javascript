
/* Values of the type object are arbitrary collections of properties. 
 * One way to create an object is by using braces as an expression. */
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};

console.log(day1.squirrel);

console.log(day1.wolf);

day1.wolf = false;

console.log(day1.wolf);

/* Inside the braces, there is a list of properties separated by commas. 
 * Each property has a name followed by a colon and a value. 
 * When an object is written over multiple lines, indenting it like in the 
 * example helps with readability. Properties whose names aren’t valid binding 
 * names or valid numbers have to be quoted. */

/*
 * You may think of objects as octopuses with any number of tentacles, each of which has a name tattooed on it. 
 */
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

/* The binary in operator, when applied to a string and an object, tells you whether that object has a property with that name. The difference between setting a property to undefined and actually deleting it is that, in the first case, the object still has the property (it just doesn’t have a very interesting value), whereas in the second case the property is no longer present and in will return false. */

console.log("left" in anObject);

console.log("right" in anObject);

/* To find out what properties an object has, you can use the Object.keys function. You give it an object, and it returns an array of strings—the object’s property names. */

console.log(Object.keys({x: 0, y: 0, z: 2}));

let objectA = {a: 1, b: 2};

console.log(objectA);

Object.assign(objectA, {b: 3, c: 4});

console.log(objectA);

let journal = [
  {events: ["work", "touched tree", "telepizza"], squirrel: false},
  {events: ["work", "bike", "taco"], squirrel: false},
];

console.log(journal[0].squirrel);

console.log(journal[0].events);