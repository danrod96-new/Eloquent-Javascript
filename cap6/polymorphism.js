
class Rabbit {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}


Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
}

let blackRabbit = new Rabbit("black");

console.log(String(blackRabbit));