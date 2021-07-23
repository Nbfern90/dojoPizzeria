function pizzaOven(crustType, sauceType, cheeses, toppings){
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}


var P1 = pizzaOven("Deep Dish", "Traditional", "Mozzarella", ["Pepperoni", "Sausage"]);
console.log(P1);

var P2 = pizzaOven("Hand Tossed", "Marinara",["Mozarella","Feta"],["Mushrooms", "Olives","Onions"]);
console.log(P2);

var P3 = pizzaOven("Gluten-Free", "Alfredo","Parm",["Sausage", "Onions"]);
console.log(P3);

var P4 = pizzaOven("Deep Dish", "Alfredo", ["Olives", "Mushrooms"]);
console.log(P4);

var P5 = pizzaOven ("Gluten-Free", "Traditional",["Feta,", "Parm"], "Olive" )
console.log(P5);


var crustType = [
  "Deepdish", "Gluten-Free","Hand Tossed"
];

var sauceType=["Traditional", "Marinara", "Alfredo"];

var cheeses=["Mozzarella", "Feta", "Parm"];

var toppings=["Pepperoni", "Sausage", "Olives", "Mushrooms", "Olives"];


function randomPick(arr){
  var i = Math.floor(arr.length * Math.random());
  return arr[i];
}

function randomPizza() {
  var pizza = {};
  pizza.crustType = randomPick(crustType);
  pizza.sauceType = randomPick(sauceType);
  pizza.cheeses = randomPick(cheeses);
  pizza.toppings = randomPick(toppings);
  {
    return pizza;
  }
}

console.log(randomPizza());
