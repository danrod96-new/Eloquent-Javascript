
// The following example program tries to convert a whole number to a string in a given 
//base (decimal, binary, and so on) by repeatedly picking out the last digit and then 
// dividing the number to get rid of this digit. But the strange output that it currently 
// produces suggests that it has a bug.
function numberToString(n, base = 10) {
  let result = "";
  let sign = "";

  if (n < 0) {
    sign = "-";
    n -= n;
  }

  do {
    result = String(n % base) + result;
    n = Math.floor(n / base);
  } while (n > 0);

  return sign + result;
}

console.log(numberToString(13, 10));
console.log(numberToString(15453, 2));