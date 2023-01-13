
// Another way to invoke the library that we need
import ordinal from "ordinal";

import {days, months} from "date-names";

const {parse} = require("ini");

console.log(parse("x = 10\ny = 20"));
// → {x: "10", y: "20"}