
/* There is a construct called switch that is intended to express such a “dispatch” in a more direct way. 
 * Unfortunately, the syntax JavaScript uses for this (which it inherited from the C/Java line of programming languages) is 
 * somewhat awkward—a chain of if statements may look better. */

let weather = "snowy";

switch (weather) {
  case "rainy":
    console.log("Get an umbrella");
    break;
  case "sunny":
    console.log("Dress lighty");
    break;
  case "snowy":
    console.log("Bundle up");
    break;
  default:
    console.log("Unknown weather");
    break;
}