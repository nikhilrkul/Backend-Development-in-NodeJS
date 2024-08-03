// (function x(y){
//     console.log("Hi,", y);
// })("Nikhil")

function f(){
    return 1;
}

function g(){
    return 2;
}

var i = 10;
var result = (function evaluate(i){
  if(i%2 == 0) return f();
  else return g()
})(i)

console.log(result)