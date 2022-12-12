
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

const score = {visitors: 0, home: 0};
//this is ok
score.visitors = 1;
// this is not ok
// score = {visitors: 1, home: 1};

let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

addEntry(["work", "tele", "pizza", "beer"], false);
addEntry(["weekend", "tree", "peanuts", "beer"], true);
addEntry(["broccoli", "cheetos", "biking"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
  Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", journal));

console.log(phi([76, 9, 4, 1]));

for (let entry of journal) {
  console.log(`${entry.events.length} events.`);
}

function journalEvents(journal) {
  let events = [];

  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }

  return events;
}

console.log(journalEvents(journal));

for (let event of journalEvents(journal)) {
  console.log(event + " : ", phi(tableFor(event, journal)));
}

for (let event of  journalEvents(journal)) {
  let correlation = phi(tableFor(event, journal));

  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
  }
}