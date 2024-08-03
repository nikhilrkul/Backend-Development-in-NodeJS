function fun() {
  for (let i = 0; i < 10; i++) {
    //do something
  }
  console.log(i);
}

fun();

function process(x, y) {
  if (x > y) {
    let temp = x;
    x = y;
    y = temp;
  }

  return y - x;
}

console.log(process(10, 9));
