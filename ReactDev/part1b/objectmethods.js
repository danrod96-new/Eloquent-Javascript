
const arto = {
  name: "Arvo Park",
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log("hello, my name is " + this.name);
  },
  doAddition: function(a, b) {
    console.log(a + b);
  }
};

arto.growOlder = function() {
  this.age += 1;
}

console.log(arto.age);
arto.greet();
arto.growOlder();
console.log(arto.age);
arto.doAddition(1, 5);

// by storing a method reference in a variable and calling the method through the variable
const referenceToAddition = arto.doAddition

referenceToAddition(10, 15);

// When calling the method through a reference, the method loses knowledge of what the original this was
const referenceToGreet = arto.greet;
referenceToGreet();

// As mentioned, the value of this in JavaScript is defined based 
// on how the method is being called. When setTimeout is calling the 
// method, it is the JavaScript engine that actually calls the method 
// and, at that point, this refers to the global object.
//setTimeout(arto.greet(), 1000);

// There are several mechanisms by which the original this can be preserved. One of these is using a method called bind:
setTimeout(arto.greet.bind(arto), 500);