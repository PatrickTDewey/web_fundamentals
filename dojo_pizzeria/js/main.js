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
let pizza1 = pizzaOven('flat', 'marinara', ['mozzerlla'], ['pepporoni']);
let pizza2 = pizzaOven('deep dish', 'alfredo', ['mozzerlla', 'parmesean',], ['chicken']);
let pizza3 = pizzaOven('pan', 'marinara', ['mozzerlla', 'feta', 'blue'], ['pineapple', 'canadian bacon']);
// pizza1.getIngredients();
// pizza2.getIngredients();
// pizza3.getIngredients();


let crusts = ['flat', 'deep dish', 'pan', 'stuffed'];
let sauces = ['marinara', 'alfredo', 'olive oil', 'stuffed'];
let cheeses = ['mozzerlla', 'parmesean', 'feta', 'blue', 'asiago'];
let toppings = ['chicken', 'canadian bacon', 'ham', 'sausage', 'pepporni', 'pineapple', 'basil'];

function randomIndex(arr){
    
}
randomIndex(crusts);
