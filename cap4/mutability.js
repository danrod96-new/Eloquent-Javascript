
/*
 * The object1 and object2 bindings grasp the same object, which is why changing 
 * object1 also changes the value of object2. They are said to have the same 
 * identity. The binding object3 points to a different object, which initially 
 * contains the same properties as object1 but lives a separate life.
 */

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

/* Bindings can also be changeable or constant, but this is separate from the way their values behave. 
 * Even though number values don’t change, you can use a let binding to keep track of a changing number 
 * by changing the value at which the binding points. Similarly, though a const binding to an object 
 * can itself not be changed and will continue to point at the same object, the contents of that object
 * might change. */
const score = {visitors: 0, home: 0};
//this is ok
score.visitors = 1;
// this is not ok
// score = {visitors: 1, home: 1};

/* journal will hold an array of objects */
let journal = [];

/* function that adds a log entry to the journal */
function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

/* Adding a few entries */
addEntry(["work", "tele", "pizza", "beer"], false);
addEntry(["weekend", "tree", "peanuts", "beer"], true);
addEntry(["broccoli", "cheetos", "biking", "writing"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

/* This is the function that computes the phi coefficient from a flat array [1, 2, 3, 4] 
 * The phi coefficient measures how close the variables are related: 1 means that 
 * are related, 0 are not, -1 are related but opposite */
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
  Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}

/* To extract a two-by-two table for a specific event from the journal, we must loop over all 
 * the entries and tally how many times the event occurs in relation to squirrel transformations */
function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    /* Arrays have an includes method that checks whether a given value exists in the array. The 
     * function uses that to determine whether the event name it is interested in is part of the 
     * event list for a given day. */
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  
  return table;
}

console.log(tableFor("pizza", journal));

console.log(phi([76, 9, 4, 1]));

/* There is a simpler way to loop through an array in JS */
console.log("Looping through an array in Javascript to see the number of events in each journal log:");
for (let entry of journal) {
  console.log(`${entry.events.length} events.`);
}

/* We need to compute a correlation for every type of event that occurs in the dataset. 
 * To do that, we first need to find every type of event */
function journalEvents(journal) {
  let events = [];

  // Loop through every array in journal
  for (let entry of journal) {
    for (let event of entry.events) {
      //if event is not in the events array yet, include it
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }

  return events;
}

console.log("Events available:")
console.log(journalEvents(journal));

/* Using the function journalEvents, we can see all the correlations */
console.log("Calculating the correlations for each event:")
for (let event of journalEvents(journal)) {
  console.log(event + " : ", phi(tableFor(event, journal)));
}

/* filter the results to show only correlations greater than 0.1 or less than -0.1 */
console.log("Narrow down the results:")
for (let event of  journalEvents(journal)) {
  let correlation = phi(tableFor(event, journal));

  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
  }
}