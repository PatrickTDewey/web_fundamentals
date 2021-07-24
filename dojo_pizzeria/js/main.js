function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {
        "crustType": crustType,
        "sauceType": sauceType,
        "cheese": cheese,
        "toppings": toppings,
        "getIngredients": function() {
            console.log(`Crust: ${crustType}`);
            console.log(`Sauce: ${sauceType}`);
            console.log(`Cheese: ${cheese}`);
            console.log(`Toppings: ${toppings}`);
        }
    };
    return pizza;
}
// pizza1.getIngredients();
// pizza2.getIngredients();
// pizza3.getIngredients();

let crusts = ['flat', 'deep dish', 'pan', 'stuffed'];
let sauces = ['marinara', 'alfredo', 'olive oil', 'thirty year old fish sauce'];
let cheeses = ['mozzerlla', 'parmesean', 'feta', 'blue', 'asiago'];
let toppings = ['chicken', 'canadian bacon', 'ham', 'sausage', 'pepporni', 'pineapple', 'basil'];

function randomIndex(arr){
    let randomIndice = arr[Math.floor((Math.random() * arr.length))];
    return randomIndice;
    
}
// console.log(randomIndex(crusts));

let randomPizza = pizzaOven(randomIndex(crusts),randomIndex(sauces),randomIndex(cheeses), randomIndex(toppings));
console.log(randomPizza);

// randomPizza.getIngredients()

