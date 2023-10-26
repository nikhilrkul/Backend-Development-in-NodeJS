/**
 * Problem :
 *
 * Given three integer values, and find the minimum value among the three input values.
 */

let x = 10,
  y = 3,
  z = 100;

if (x < y && x < z) {
  console.log("x is minimum", x);
} else if (y < z && y < x) {
  console.log("y is minimum", y);
} else {
  console.log("z is minimum", z);
}
