var sandwich = {
    bread: "sourdough",
    protein: "london broil",
    cheese: "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};

var pizza = {
    crustType: "000000",
    sauceType: "sauceType",
    cheeses: "cheeses",
    toppings: "toppings"
};
// console.log(sandwich);

function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza
}

// var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);

var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza1 = pizzaOven("Thin Crust", "Pesto Sauce", "Parmesan", ["Black olives", "Onion"]);
var pizza2 = pizzaOven("Cracker Crust", "Creamy Alfredo Sauce", ["Gouda", "feta"], ["mushrooms", "Fresh garlic", "onions"]);


function RandomPizza() {
    var RandomCrustType, RandomSauceType, RandomCheeses, RandomToppings;
    for (var i = 0; i < 3; i++) {
        var x = Math.floor((Math.random() * 4) + 1);
        switch(i) {
            case 1 :        
             switch(x) {
                case 1 : RandomCrustType = "deep dish";
                case 2 : RandomCrustType = "hand tossed";
                case 3 : RandomCrustType = "Thin Crust";
                case 4 : RandomCrustType = "Cracker Crust";
            }
            case 2 :       
            switch(x) {
               case 1 : RandomSauceType = "traditional";
               case 2 : RandomSauceType = "marinara";
               case 3 : RandomSauceType = "Pesto Sauce";
               case 4 : RandomSauceType = "Creamy Alfredo Sauce";
            }
            case 3 :  
            switch(x) {
               case 1 : RandomCheeses = "mozzarella";
               case 2 : RandomCheeses = ["mozzarella", "feta"];
               case 3 : RandomCheeses = "Parmesan";
               case 4 : RandomCheeses =  ["Gouda", "feta"];
            }
            case 4 :   
            switch(a) {
               case 1 : RandomToppings = ["pepperoni", "sausage"];
               case 2 : RandomToppings = ["mushrooms", "olives", "onions"];
               case 3 : RandomToppings = ["Black olives", "Onion"];
               case 4 : RandomToppings = ["mushrooms", "Fresh garlic", "onions"];
            }            
        }

    }
    var newpizza = pizzaOven(RandomCrustType,RandomSauceType,RandomCheeses,RandomToppings)
    console.log(newpizza);
}
