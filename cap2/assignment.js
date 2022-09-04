let ten = 10;
console.log(ten * ten);

let mood = "light";
console.log(mood);
mood = "dark";
console.log(mood);

let lugisDebt = 140;
lugisDebt = lugisDebt - 35;
console.log(lugisDebt);

let one = 1, two = 2;
console.log(one + two);

var names = "Aida";
const greeting = "Hello ";
console.log(greeting + names);

let x = 30;
console.log("The value of x is", x);

console.log(Math.max(2, 4));

console.log(Math.min(-2, -4) + 100);

let theNumber = "400";

if (!Number.isNaN(theNumber)){
  console.log("Your number is the square root of " + theNumber * theNumber);
}

let num = 40;

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

let number = 0;

while (number <= 12){
  console.log(number);
  number = number + 2;
}

let result = 1;
let counter = 0;

while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}

console.log(result);

for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}

for (let current = 20 ; ; current = current + 1) {
  if (current % 7 == 0){
    console.log(current);
    break;
  }
}

let randnum = Math.floor(Math.random() * 20);

switch (randnum) {
  case (10):
    console.log("Low number");
    break;
  case (20):
    console.log("Hight numbber");
    break;
}

console.log(randnum);