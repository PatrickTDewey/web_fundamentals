console.log(`Hi Lesson`);
let tortilla = `soft corn tortilla`;
let protein = `tinga chicken`;
let cheese = `cotija cheese`;
let toppings = [`lettuce`,`pico de gallo`, `guacamole`];


var taco1 = {
    "tortilla": "soft corn tortilla",
    'protein': 'tinga chicken',
    'cheese': `cotija cheese`,
    "toppings": [`lettuce`, `pico de gallo`, 'guacamole'],
    'printIngredients': function() {
        console.log(this.tortilla);
        console.log(this.protein);
        console.log(this.cheese);
        console.log(this.toppings);
    }
}

var sandwich = {
    bread:    "sourdough",
    protein:  "london broil",
    cheese:   "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};

console.log(sandwich);

taco1.printIngredients();