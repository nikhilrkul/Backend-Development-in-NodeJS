/**
 *
 * arrays are also the custom objects in Javascript
 * index of the element are referred as keys and values as the element itself
 *
 * ["abc", "def", "ghi"] -> {0 : 'abc', 1 : 'def', 2 : 'ghi'}
 */

/**
 *
 * Map function :
 *
 * map is a higher order function available within arrays
 * It takes function as an arguments -> f
 * It returns an array in which every value is actually populated by calling
 * function f with original array elements as argument
 *
 * Every element of original array is one by one passed inside function square
 *
 * map internally iterates over every element of an given original array
 * pass the element in the argument function f and store the returned value inside an array.
 */

function square(el) {
  return el * el;
}

function cube(x) {
  return x * x * x;
}

function isEvenOrOdd(x) {
  if (x % 2) {
    return "Odd";
  } else {
    return "Even";
  }
}
const arr = [1, 2, 3, 4]; // original array

const result = arr.map(square); // square is a function passed as an argument
/**
 * square(1) -> 1
 * square(2) -> 4
 * square(3) -> 9
 * square(4) -> 16
 */
console.log(result);

const cubeResult = arr.map(cube);
console.log(cubeResult);

const isOddorEvenResult = arr.map(isEvenOrOdd);
console.log(isOddorEvenResult);

/**
 * when to use maps?
 *
 * In any situation where we have to do an operation on every element of an array and
 * store the result of the operation, map can be good option
 *
 * For example :
 *
 * Flipkart : Array of products
 *
 */

const newArray = [9, 8, 7, 6, 5];

/**
 * If the function that we are passing in maps takes two arguments
 * then first arguments will be accessing the actual value
 * second arguments will be accessing the index of the actual value
 */
function print(element, index) {
  return `Element at index ${index} is ${element}`;
}

/**
 * Here, map is looping over every element
 * and then passing the element, index in the function print
 */
const newArrayResult = newArray.map(print);
// console.log(newArrayResult);

// Custom mapper function
function customMapper(arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
}

const value = customMapper(newArray, print);
console.log(value);
