
let journal = [];

/**
 * Note that the object added to the journal looks a little odd. 
 * Instead of declaring properties like events: events, it just gives a 
 * property name. This is shorthand that means the same thing—if a property 
 * name in brace notation isn’t followed by a value, its value is taken from 
 * the binding with the same name.
*/

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

addEntry(["work", "tele", "pizza", "beer"], false);
addEntry(["weekend", "tree", "peanuts", "beer"], true);
addEntry(["broccoli", "cheetos", "biking"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

/*
 * We’ll interpret the indices to the array as two-bit binary numbers, where the leftmost (most significant) digit refers to the squirrel variable and the rightmost (least significant) digit refers to the event variable. For example, the binary number 10 refers to the case where Jacques did turn into a squirrel, but the event (say, “pizza”) didn’t occur. This happened four times. And since binary 10 is 2 in decimal notation, we will store this number at index 2 of the array
 */

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
  Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}

/*
 * To extract a two-by-two table for a specific event from the journal, we must 
 * loop over all the entries and tally how many times the event occurs in relation 
 * to squirrel transformations.
 */

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