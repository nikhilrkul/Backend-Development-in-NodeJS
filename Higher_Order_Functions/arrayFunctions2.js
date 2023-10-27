/**
 * Filter function
 * Filter is also a higher order function
 * Filter also loops over the array elements
 * there is one special thing about filter function i.e., the argument function f which we have to pass inside
 * filter should always return boolean, otherwiser the output will be converted to boolean
 *
 * Filter loops over every element, passes that element in the argument function and then if the output of this
 * function call is true, then it stores the original element in the new array otherwise doesn't add
 * this add element to the array
 */

function oddOrEven(x) {
  return x % 2 == 0;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = arr.filter(oddOrEven);
console.log(result);
