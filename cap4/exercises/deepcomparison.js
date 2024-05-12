
/*
 * Write a function deepEqual that takes two values and returns true only if they 
 * are the same value or are objects with the same properties, where the values of 
 * the properties are equal when compared with a recursive call to deepEqual.
 */

const deepEqual = function(value1, value2) {
  if ((value1 == null) || (value2 == null)){
    return false;
  } else {
    if ((typeof value1 == "object") && (typeof value2 == "object")) {
      // do a deep comparison
      let value1Keys = Object.keys(value1);
      let value2Keys = Object.keys(value2);

       if (value1Keys.length == value2Keys.length) {
        for (valuekey of value1Keys) {
          if ((typeof value1[valuekey]) == (typeof value2[valuekey])) {
            if (typeof value1[valuekey] == "object") {
              // do a recursive comparison
              if (!deepEqual(value1[valuekey], value2[valuekey])) {
                return false;
              }
            } else {
              if (value1[valuekey] !== value2[valuekey]) {
                // there was an element mismatch, let's return it false.
                return false;
              }
            }
          } else {
            return false;
          }
        }

        return true;
       } else {
        return false;
       }
    } else {
      if (value1 === value2) {
        return true;
      } else {
        return false;
      }
    }
  }
}

console.log(deepEqual("this", "this"));

console.log(deepEqual(-1, "-1"));

let obj = {here: "this", object: 2};
let obj2 = {here: "thisaaa", object: 2};
let obj3 = {here: {is: "an"}, object: 2};
let obj4 = {here: {is: "boyyyy"}, object: 2};

console.log(deepEqual(obj, obj)); // true
console.log(deepEqual(obj, obj2)); // false
console.log(deepEqual(obj3, obj3)); // true
console.log(deepEqual(obj3, obj4)); // false