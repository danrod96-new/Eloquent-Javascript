// A Class Definition

class Person {
  // Constructor
  constructor(name) {
    this.name = name;
  }

  hello() {
    return 'Hello, I am ' + this.name + '.';
  }
};

// When the object is initialized, the constructor method is called, 
// with any parameters passed.

const flavio = new Person('Flavio');

console.log(flavio.hello());


/*
 * A class can extend another class, and objects initialized using 
 * that class inherit all the methods of both classes.
 */

/*
 * If the inherited class has a method with the same name as one of the 
 * classes higher in the hierarchy, the closest method takes 
 * precedence:
 */

class Programmer extends Person {
  hello() {
    return super.hello() + ' I am a programmer';
  }
}

const flavia = new Programmer("Flavia");

console.log(flavia.hello());

/* Normally methods are defined on the instance, not on the class.
 * Static methods are executed on the class instead */

class Person2 {
  static genericHello() {
    return "Hellooo";
  }
}

console.log(Person2.genericHello());

/* You can add methods prefixed with get or set to create a getter and 
 * setter, which are two different pieces of code that are executed 
 * based on what you are doing: accessing the variable, or modifying 
 * its value. */

class Person3 {
  constructor(name) {
    this.name = name;
  }

  set name(value) {
    this.name = value;
  }

  get name() {
    return this.name;
  }
}

const newPerson = new Person3("IT Guy");

console.log(newPerson.name);