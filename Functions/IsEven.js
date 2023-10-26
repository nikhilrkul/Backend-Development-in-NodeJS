function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

let x = 10;
let y = 20;
let z = 8;

if (isEven(x)) {
  console.log("x is Even");
} else {
  console.log("x is Odd");
}

if (isEven(y)) {
  console.log("y is Even");
} else {
  console.log("y is Odd");
}

if (isEven(z)) {
  console.log("z is Even");
} else {
  console.log("z is Odd");
}
// let x = 10;
// let result = isEven(x);

// if (result) {
//   console.log("Given number is even", x);
// } else {
//   console.log("Given number is Odd", x);
// }

/************ Program to print odd or even from 1 to 20 **********/
// for (let i = 1; i <= 20; i++) {
//   let res = isEven(i);
//   if (res) {
//     console.log(i, "is a Even number");
//   } else {
//     console.log(i, "is a Odd number");
//   }
// }
