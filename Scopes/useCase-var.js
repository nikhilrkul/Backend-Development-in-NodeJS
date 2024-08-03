function fun() {
  let i; // same as var i as it is accessible throughout the function fun
  if (x % 2 == 0) {
    i = 0;
  } else {
    i = 1;
  }
}

function gun(x) {
  if (x % 2 == 0) {
    var i = 0;
  } else {
    var i = 1;
  }
  console.log(i);
}

gun(10);
