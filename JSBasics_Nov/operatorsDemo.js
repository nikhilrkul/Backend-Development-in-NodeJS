// Arithmetic Operators
let x = 10;
let y = 3;

console.log(x + y); // addition
console.log(x - y); // substraction
console.log(x * y); // multiplication
console.log(x / y); // division -> quotient
console.log(x % y); // division -> remainder
console.log(y ** 3); // exponent

// Assignment Operators

let a = 10; // here = is just assigning the value on the rhs to lhs
a += 7; // here += is actually doing a = a + 2
console.log("Value of a after addition is ", a);
a %= 3;
console.log("Value of a after storing a remainder is ", a);
a *= 5;
console.log("Value of a after multiplication is ", a);
a -= 3;
console.log("Value of a after substraction is ", a);
a /= 2;
console.log("Value of a after storing quotient is ", a);
a **= 2;
console.log("Value after exponet is", a);

// Relational Operators

let x1 = 10;
let y1 = 20;
let z = 5;
let a1 = 10;

console.log("x1 < z", x1 < z);
console.log("y1 > z", y1 > z);
console.log("x1 <= z", x1 <= z);
console.log("x1 >= a", x1 >= a);

// Logical Operators
console.log(true && false);
console.log(false || false);
console.log(true && true);
console.log(5 < 10 && 10 > 20);
console.log(!false);

console.log(6 && 10);
console.log(10 || 0);
console.log(6 || 19);
console.log(0 || -0);
