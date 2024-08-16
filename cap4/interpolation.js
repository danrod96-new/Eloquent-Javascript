// Template literals provide an easy way to interpolate variables and expressions into strings.

const myVariable = 'test';

const string = `something ${myVariable}`;

console.log(string);

// inside the ${} you can add anything, even expressions:

const string2 = `Something ${1 + 2 + 3}`;

console.log(string2); //6

const string3 = `Something ${(1 == 2) ? 'x' : 'y'}`;

console.log(string3);