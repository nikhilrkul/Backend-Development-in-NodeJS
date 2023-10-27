if (false) {
  var x = 20;
}

console.log(x);

function fun() {
  console.log(y); // y is accessible here
  var y = 10; // not accessible outside the function fun
}

// console.log(y); // throws error since we are trying to access variable which resides inside function scope
// fun();  // undefined as y is accessed inside function fun

function gun() {
  console.log(z);
  let z = 100;
}

console.log(z);
gun();
