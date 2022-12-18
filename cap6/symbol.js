
let sym = Symbol("name");

console.log(sym == Symbol("name"));

class Rabbit {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}
let blackRabbit = new Rabbit("black");

Rabbit.prototype[sym] = 55;

console.log(blackRabbit[sym]);

const toStringSymbol = Symbol("toString");

//The string you pass to Symbol is included when you convert it to a string and can make it easier to recognize a symbol when, for example, showing it in the console. But it has no meaning beyond that—multiple symbols may have the same name.
// Being both unique and usable as property names makes symbols suitable for defining interfaces that can peacefully live alongside other properties, no matter what their names are.
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue socks`;
};

console.log([1, 2].toString());

console.log([1, 2][toStringSymbol]());

// It is possible to include symbol properties in object expressions and classes by using square brackets around the property name. That causes the property name to be evaluated, much like the square bracket property access notation, which allows us to refer to a binding that holds the symbol.
let stringObject = {
  [toStringSymbol]() { return "a jute rope"; }
};

console.log(stringObject[toStringSymbol]());
