
// Tests usually take the form of little labeled programs that verify some aspect of your code. For example, a set of tests for the (standard, probably already tested by someone else) toUpperCase method might look like this:
function test(label, body) {
  if (!body()) {
    console.log(`Failed: ${label}`);
  } else {
    console.log(`Passed: ${label}`);
  }
}

test("convert Latin text to uppercase", () => {
  return "hello".toLocaleUpperCase() == "HELLO";
});

test("convert Greek text to uppercase", () => {
  return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
});

test("don't convert case-less characters", () => {
  return "مرحبا".toUpperCase() == "مرحبا";
});