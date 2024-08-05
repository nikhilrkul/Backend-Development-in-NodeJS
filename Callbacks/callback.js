/**
 * fn -> HOF ? -> It takes fn (which is an function) as an argument
 *
 * x -> number
 * fn -> function 
 */

function fun(x, fn) {
  for (let i = 0; i < x; i++) {
    console.log(i);
  }

  fn();
}

fun(10, function execute() {
  console.log("I am executed");
});
