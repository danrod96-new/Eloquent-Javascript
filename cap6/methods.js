
let rabbit = {};

rabbit.speak = function(line) {
  console.log(`The rabbit says ${line}`);
};

rabbit.speak("I'm alive");

rabbit.speak("Tota");

function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type: "white", speak};

let hungryRabbit = {type: "white", speak};

whiteRabbit.speak("Tota");

hungryRabbit.speak("burger");

function normalize() {
  console.log(this.coords.map(n => n / this.length));
}

normalize.call({coords: [0, 2, 3], length: 5});