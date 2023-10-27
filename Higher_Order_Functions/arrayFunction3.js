/**
 * Reduce function
 * Reduce is also a higher order function
 * reduce also takes a function f as an argument,
 * what reduce does is, it one by one goes to every element of an array,
 * say the current element is arr[i]
 * reduce ill pass the element to the function f, accumulate the results of the further function calls
 * with particular result
 */

let arr = [1, 2, 3, 4, 5, 6];

function sum(prevResult, currValue) {
  //   console.log(prevResult, currValue);
  return prevResult + currValue;
}

const result = arr.reduce(sum);
// console.log(result);

/*********  Real life example of reduce function */
function addPrices(prevProductPrice, currentProductPrice) {
  let newPrice = prevProductPrice.price + currentProductPrice.price;
  return { price: newPrice };
}

let cart = [
  { price: 100000, name: "IPhone" },
  { price: 500, name: "Backcover" },
  { price: 300, name: "Tempered glass" },
];

const totalProductPrice = cart.reduce(addPrices);
console.log(totalProductPrice.price);
