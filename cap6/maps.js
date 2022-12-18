
let ages = {
  Boris: 29,
  Liang: 22,
  Julie: 62,
};

console.log(ages.Boris);

console.log(`Julie is ${ages["Julie"]}`);

console.log("Is Jack's age known?", "Jack" in ages);

console.log("Is toString's age known?", "toString" in ages);

console.log("toString" in Object.create(null));

//Fortunately, JavaScript comes with a class called Map that is written for this exact purpose. It stores a mapping and allows any type of keys.
let ages2 = new Map();

ages2.set("Boris", 39);
ages2.set("Ling", 12);
ages2.set("Tota", 50);

console.log(`Tota is ${ages2.get("Tota")}`);

console.log({x: 1}.hasOwnProperty("x"));

console.log({x: 1}.hasOwnProperty("toString"));