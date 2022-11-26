
const power = (base, exponent) => {
  let result = 1;

  for (let count = 0; count < exponent; count++) {
    result *= base;
  }

  return result;
};

let result = power(2, 4);
console.log(result);

const square = (x) => { return x * x };
const square2 = (x) => x * x;

console.log(square(2));
console.log(square(45));

const horn = () => {
  console.log("Tootsie");
}

console.log(horn());

function greet(who) {
  console.log("Hello " + who);
}

greet("Harry");
console.log("Bye");