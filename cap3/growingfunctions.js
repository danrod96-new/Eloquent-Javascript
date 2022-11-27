
function printFarmInventory(cows, chickens) {
  let cowString = String(cows);

  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }

  console.log(`${cowString} Cows`);

  let chickenString = String(chickens);

  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }

  console.log(`${chickenString} Chickens`);
}

printFarmInventory(44, 10);

function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);

  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }

  console.log(`${numberString} ${label}`);
}

function printFarmInventory2(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "cows");
  printZeroPaddedWithLabel(chickens, "chickens")
  printZeroPaddedWithLabel(pigs, "pigs");
}

printFarmInventory2(4, 2, 4);

function zeroPad(number, width) {
  let string = String(number);

  while (string.length < width) {
    string = "0" + string;
  }

  return string;
}

function printFarmInventory3(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory3(7, 13, 1);