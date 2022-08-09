// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
    let avail = {...recipe};
    for(var key in avail) {
        avail[key] = 0;
    }
    for (let ingredient in recipe) {
        for (let stock in available) {
            if (ingredient == stock && recipe[ingredient] <= available[stock]) {
                avail[ingredient] = Math.floor(available[stock] / recipe[ingredient]);
                available[stock] -= recipe[ingredient];
            }
        }
    }
    return Math.min(...Object.values(avail));
  }


console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))

console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}))