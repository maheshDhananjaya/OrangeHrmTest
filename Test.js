/**
 *
 * @param  {...any} toppings
 * @returns
 *
 * here take topping as user input and return total and deatail of bought icecream.
 */

function BuyIceCream(...toppings) {
  const plainIceCream = 100;
  const peanut = 50;
  const whipped_cream = 55;
  const hard_chocolate = 80;

  if (toppings.length > 0) {
    let sum = plainIceCream;
    let output = "";
    for (let topping of toppings) {
      output = output + `${topping}` + ",";
      switch (topping) {
        case "peanut": {
          sum = sum + peanut;
          break;
        }
        case "whipped_cream": {
          sum = sum + whipped_cream;
          break;
        }
        case "hard_chocolate": {
          sum = sum + hard_chocolate;
          break;
        }
        default: {
          sum = sum + 0;
        }
      }
    }
    return `1). you bought plainIcecream with ${output} toppings
            2). total ${sum}`;
  } else {
    return `1). you bought plainIcecream
    2). total ${plainIceCream}`;
  }

}
//console.log(BuyIceCream("peanut", "whipped_cream"));
//console.log(BuyIceCream());
