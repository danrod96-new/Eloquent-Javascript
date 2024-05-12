
/* Write a function arrayToList that builds up a list structure like the one 
 * shown when given [1, 2, 3] as argument. Also write a listToArray function that
 * produces an array from a list. Then add a helper function prepend, which takes 
 * an element and a list and creates a new list that adds the element to the 
 * front of the input list, and nth, which takes a list and a number and 
 * returns the element at the given position in the list (with zero 
 * referring to the first element) or undefined when there is no such element.*/

const arrayToList = (theArray) => {
  let list = null;

  for (let i = theArray.length - 1; i >= 0; i--) {
    list = {
      value: theArray[i],
      rest: list
    };
  }

  return list;
};

const listToArray = (theList) => {
  let theArray = [];

  for (let node = theList; node; node = node.rest) {
    theArray.push(node.value);
  }

  return theArray;
}

/* Then add a helper function prepend, which takes an element and a list and 
 * creates a new list that adds the element to the front of the input list
 * element: Integer */
const prepend = function(theList, element) {
  let newList = theList;

  for (let node = theList; node; node = node.rest) {
    if (node.rest == null) {
      node.rest = {
        value: element,
        rest: null
      }

      break;
    }
  }

  return newList;
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

function prepend2(value, list) {
  return {value, rest: list};
}

let myArray = [1, 3, 4, 6];

console.log(arrayToList([10, 20, 30, 45, 10]));

theList = arrayToList([10, 20, 30, 45, 10]);

console.log(listToArray({ value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }));

console.log(prepend({ value: 10, rest: { value: 20, rest: null } }, 54));

console.log(nth(theList, 2));

console.log(prepend2(10, {value: 1010, rest: null}))