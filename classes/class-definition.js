
/* In 2015 the ECMAScript 6 (ES6) standard introduced classes. */

/* A Class Definition in JS (ES6) */

class Person {
  // This shall be the constructor ?
  constructor(name) {
    this.name = name;
  }

  hello() {
    return 'Hello, I am ' + this.name + '.'
  }
}

// A class has an identifier, which we can use to create new objects using new ClassIdentifier().

/* When the object is initialized, the constructor method is called, with any parameters passed.
 * A class also has as many methods as it needs. In this case hello is a method and can be called on all 
 * objects derived from this class: */

const daniel = new Person('Daniel Rodriguez');

console.log(daniel.hello());

/* Class inheritance */

/* A class can extend another class, and objects initialized using that class inherit all the 
 * methods of both classes. */

/* If the inherited class has a method with the same name as one of the classes higher in the 
 * hierarchy, the closest method takes precedence: */

class Programmer extends Person {
  hello() {
    return super.hello() + ' I am a programmer. '
  }
}

const toto = new Programmer("Toto");

console.log(toto.hello());

/* Static methods */

/* Normally methods are executed on the instance, not on the class.
 * Static methods are executed on the class instead: */

class AnotherPerson {
  static genericHello() {
    return "Hello there";
  }
};

console.log(AnotherPerson.genericHello());

/* Getters and setters */

/* You can add methods prefixed with get or set to create a getter and setter, which are two 
 * different pieces of code that are executed based on what you are doing: 
 * accessing the variable, or modifying its value. */

class Person2 {
  constructor(name) {
      this.setName(name);
  }

  getName() {
      return this.name;
  }

  setName(newName) {
      newName = newName.trim();
      if (newName === '') {
          throw 'The name cannot be empty';
      }
      this.name = newName;
  }
}

// Must be declared as "let" of course
let person = new Person2('Jane Doe');

console.log(person); // Jane Doe

person.setName('Jane Smith');

console.log(person.getName()); // Jane Smith
