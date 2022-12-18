
class Rabbit {
  constructor(type) {
    this.type = type;
  }

  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

killerRabbit.speak("test");

let object = new class { getWord() { return "Test44"; }};
console.log(object.getWord());

Rabbit.prototype.teeth = "small";

console.log(killerRabbit.teeth);

killerRabbit.teeth = "Tests";

console.log(killerRabbit.teeth);

console.log(blackRabbit.teeth);

console.log(Rabbit.prototype.teeth);

console.log(Array.prototype.toString == Object.prototype.toString);

console.log([1, 2].toString());

console.log(Object.prototype.toString.call([1, 2]));