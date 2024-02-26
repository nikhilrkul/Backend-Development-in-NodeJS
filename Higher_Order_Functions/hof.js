// // higher order function :
// // When a function is passed as an arguments to another function,these functions are called as higher order functions

// function fun(x, fn) {
//   /**
//    * x -> number
//    * fn -> function
//    */
//   console.log(x);
//   fn();
// }

// // fun(10, function execute() {
// //   console.log("I am an expression that is passed as an arguements to HOF");
// // });

// let arr = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3]; // unsorted array

// arr.sort(); // it sorts the given array // [expectation] -> this might arrange the elements in inc order
// // default implementation of arr.sort() is going to sort the array in lexicographical manner
// /**
//  * 0 -> A
//  * 1 -> B
//  * 2 -> C
//  * 3 -> D
//  * 4 -> E
//  * 5 -> F
//  * 6 -> G
//  * 7 -> H
//  * 8 -> I
//  * 9 -> J
//  * ...
//  * [B, BA, J, BAA, BAAA, BB, BC, BD, BE, C, D] // if we arrange these it according to dictionary
//  * [B, BA, BAA, BAAA, BB, BC, BD, BE, C, D, J]
//  */

// console.log(arr);

// let b = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3];

// b.sort((a, b) => a - b); // sort is a HOF,
// // if a < b -> a - b will be negative -> if comp function gives negative then a is placed before b (a<b)
// // if a > b -> a - b will be positive -> if comp function gives positive then b is placed before a (a>b)
// console.log(b);
