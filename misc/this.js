/* "this" is a concept that can be complicated to grasp, as it varies a lot depending on the context 
 * and also varies depending on the mode of JavaScript (strict mode or not). */

/* When defined as a method of an object, in a regular function "this" refers to the object, so you can do: */

const info = {
  city: 'Nazareth',
  country: 'Israel',
  fullCity: function() {
    return `${this.city} is a city in ${this.country}`
  }
};

console.log(info.fullCity());