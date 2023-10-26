function isEvenorOdd(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

let x = 10;
let y = 20;
let z = 81;

console.log("X is", isEvenorOdd(x));

console.log("Y is", isEvenorOdd(y));

console.log("Z is", isEvenorOdd(z));
