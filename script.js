var pizzaOption = {
  crustType: ["Deep Dish","Hand Tossed", "Gluten-Free"],
  sauceType: ["Marinara", "Traditional", "Alfredo"],
  cheeses: ["Mozzarella", "Feta", "Parm"],
  toppings: ["Pepperoni", "Sausage","Mushrooms","Olives", "Onions"]
}

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


/* IN PROGRESS!!!
function randomPizza(crustType, sauceType, cheeses, toppings){
  var pizza = {};
  pizza.crustType =  Math.floor(Math.random() * crustType);
  pizza.sauceType =  Math.floor(Math.random()* sauceType);
  pizza.cheeses =   Math.floor(Math.random() * cheeses);
  pizza.toppings = Math.floor(Math.random() * toppings);
  return pizza;
}


console.log(randomPizza(crustType, sauceType, cheeses, toppings));*/