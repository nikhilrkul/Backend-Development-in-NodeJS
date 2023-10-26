/**
 * Program to check and print which numbers are odd or even between 1 - 50
 */
function isOddorEven(num) {
  if (num % 2) {
    return "Odd";
  } else {
    return "Even";
  }
}

for (let i = 1; i <= 50; i++) {
  console.log(i, "is", isOddorEven(i));
}
