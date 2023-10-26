/**
 * Problem :
 *
 * Given three integers a, b and c. Check if we can form a triangle with the sides of triangle having length a, b and c
 *
 */
let a = 10;
let b = 12;
let c = 5;

if (a + b > c && b + c > a && c + a > b) {
  console.log("valid triangle can be formed");
} else {
  console.log("Couldn't form valid triangle");
}
