
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = rabbit;
  return rabbit;
}

// Constructor type
// Constructors (all functions, in fact) automatically get a property named prototype, which by default holds a plain, empty object that derives from Object.prototype. You can overwrite it with a new object if you want. Or you can add properties to the existing object, as the example does.
function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak = function(line) {
  console.log(`This ${this.type} rabbit says '${line}'`)
}

let weirdRabbit =  new Rabbit("weird");

weirdRabbit.speak("Tota");

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);

console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);

