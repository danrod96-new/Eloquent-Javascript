/* Another example of using a Promise() */

// But first, some NodeJS

const fs = require('node:fs');

fs.readFile('food.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let food = data.trim();

  const IsHealthyFood = new Promise((resolve, reject) => {
    if ((food == "avocado") || (food == "beans") || (food == "tomatoes")) {
      const isHealth = "Your food seems to be healthy";
      resolve(isHealth)
    } else {
      const why = "That's junk food, don't eat that";
      reject(why)
    }
  });

  // Consuming the Promise
  const checkIfItsHealthy = () => {
    IsHealthyFood
      .then(ok => {
        console.log(ok);
      })
      .catch(err => {
        console.log(err);
      })
  }

  checkIfItsHealthy();
});
