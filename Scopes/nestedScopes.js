function fun() {
  // fun -> function scope
  var x = 10; // x -> fun scope
  function gun() {
    // gun -> fun scope
    var y = 20; // y -> gun scope
    console.log(x);
    console.log(y);
  }
  gun();
  console.log(x);
  console.log(y);
}

fun();
