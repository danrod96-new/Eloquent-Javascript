
let number = 0;

while (number <= 100){
  console.log(number);
  number += 3;
}

let number2 = 0;

do {
  number2 += 1;
  console.log(number2);
} while (number2 < 1000);

let result = 1;

for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}

console.log(result);

for (let current = 20; ; current += 1){
  if (current % 7 == 0){
    console.log(current);
    break;
  }
}