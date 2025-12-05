
/*
 * JavaScript distinguishes not just global and local bindings. Blocks and functions can 
 * be created inside other blocks and functions, producing multiple degrees of locality.
 * For example, this function—which outputs the ingredients needed to make a batch of 
 * hummus—has another function inside it:
 */

const hummus = function(factor) {
  // Nested function
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;

    if (ingredientAmount > 1) {
      unit += "s";
    }

    console.log(`${ingredientAmount} ${unit} ${name}`);
  };

  // The code inside the ingredient function can see the factor binding from the outer 
  // function. But its local bindings, such as unit or ingredientAmount, are not visible 
  // in the outer function.
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "slice", "garlic");
  ingredient(2, "teaspoon", "olive oil");
  ingredient(0.5, "tablespoon", "cumin")
}

hummus(1);