
// JavaScript can be made a little stricter by enabling strict mode. This is done by putting the string "use strict" at the top of a file or a function body. 
function canYouSpotTheProblem() {
  //"use strict";
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy");
  }
}

// → ReferenceError: counter is not defined
canYouSpotTheProblem();

function Person(name) {
  this.name = name;
}

let ferdi = Person("ferdi");

// So the bogus call to Person succeeded but returned an undefined value and created the global binding name. In strict mode, the result is different.
console.log(name);

"use strict";
function Person2(name) {
  this.name = name;
}

let ferdinand = Person2("Ferdinand"); // forgot new
// → TypeError: Cannot set property 'name' of undefined
console.log(ferdinand)

// (VillageState, Array) → {direction: string, memory: Array}
function goalOrientedRobot(state, memory) {
  // ...
}
