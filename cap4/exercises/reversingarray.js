
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
  let arrayLength = theArray.length;

  if (arrayLength % 2 == 0){
    for (let i = 0; i < ( arrayLength / 2); i++) {
      let oldNum = theArray[i];
      theArray[i] = theArray[arrayLength - (i + 1)]
      theArray[arrayLength - (i + 1)] = oldNum;
    }
  } else {
    for (let i = 0; i < Math.floor( arrayLength / 2); i++) {
      let oldNum = theArray[i];
      theArray[i] = theArray[arrayLength - (i + 1)]
      theArray[arrayLength - (i + 1)] = oldNum;
    }
  }
}

let theArray = [1, 2, 3, 4, 5, 8];

reverseArrayInPlace(theArray);

console.log(theArray);

let theArray2 = [1, 2, 3, 4, 5];

reverseArrayInPlace(theArray2);

console.log(theArray2);