/**
 * 1. Inversion of control
 * 2. Callback hell -> readability problem
 */

// const arr = [1, 10, 1000, 9, 2, 7];

// arr.sort(function cmp(a, b) {
//   return a - b;
// });

// console.log(arr);

function doTask(fn, x) {
  // whole implementation is done by Team A
  fn(x * x); // calling my callback with sqaure of x
  fn(x * x);
}

// here, Team B tries to use this function
doTask(function exec(num) {
  // due to callbacks, I am passing the control of how exec should be called to doTask
  console.log("Num is", num);
}, 9);
