
// It is not even necessary for such an object to compute and store such a property directly in the instance. Even properties that are accessed directly may hide a method call. Such methods are called getters, and they are defined by writing get in front of the method name in an object expression or class declaration.
let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  }
};

console.log(varyingSize.size);
console.log(varyingSize.size);

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);

console.log(temp.fahrenheit);

temp.fahrenheit = 86;

console.log(temp.celsius);