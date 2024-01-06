
/**
 * Arrays have a reverse method that changes the array by inverting the 
 * order in which its elements appear. For this exercise, write two functions, 
 * reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array
 * as argument and produces a new array that has the same elements in the 
 * inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
*/

const reverseArray = (theArray) => {
  let newArray = [];

  for (arrayElem of theArray) {
    newArray.unshift(arrayElem);
  }

  return newArray;
}

console.log(reverseArray([1, 2, 3, 4]));

const reverseArrayInPlace = (theArray) => {
  return (reverseArray(theArray));
}

console.log(reverseArrayInPlace([1, 2, 3, 4]));