// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
    let numCakes = 0;
    let avail = {...recipe};
    for (let ingredient in recipe) {
        console.log(ingredient);
        console.log(recipe[ingredient]);
        for (let stock in available) {
            console.log(stock);
            console.log(available[stock]);
            // if (ingredient == stock && recipe[ingredient] <= available[stock]) {
            //     avail[ingredient] += 1;
            //     available[stock] -= recipe[ingredient];
            // }
        }
    }
    console.log(avail)
    return numCakes;
  }


console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))