
let size = 16;

for (i = 0; i < size; i++) {
  let row = "";
  for (j = i; j < size + i; j++) {
    if (j % 2 == 0) {
      row += " ";
    } else {
      row += "#";
    }
  }

  console.log(row);
}