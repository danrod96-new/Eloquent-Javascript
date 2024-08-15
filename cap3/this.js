/* This is a concept that can be complicated to grasp, as it varies a lot 
 * depending on the context and also varies depending on the mode of 
 * JavaScript (strict mode or not). */

/* When defined as a method of an object, in a regular function this refers to 
 * the object, so you can do: */

const car = {
  model: "Fiesta",
  manufacturer: "Ford",
  fullName: function() {
    return `${this.manufacturer} ${this.model}`
  }
}

console.log("My car is: " + car.fullName());


// Note, don't use arrow functions when using this, use regular function instead