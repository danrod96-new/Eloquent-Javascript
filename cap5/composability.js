
let SCRIPTS = [
  {
    name: "Coptic",
    ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
    direction: "ltr",
    year: -200,
    living: false,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
  },
  {
    name: "Korean",
    ranges: [1009, 1130],
    direction: "ltr",
    year: -560,
    living: true,
    link: "https://en.wikipedia.org/wiki/Korean_alphabet"
  },
  {
    name: "Mongolian",
    ranges: [1150, 1230],
    direction: "ttb",
    year: -100,
    living: true,
    link: "https://en.wikipedia.org/wiki/Mongolian_alphabet"
  }
];

let biggest = null;

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

for (let script of SCRIPTS) {
  if (biggest == null ||
      characterCount(biggest) < characterCount(script)) {
    biggest = script;
  }
}