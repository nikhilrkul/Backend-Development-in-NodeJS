var teacher = "Nikhil"; // -> global scope

function fun() {
  // -> global scope
  var teacher = "Pulkit"; // function scope -> fun
  let content = "JS"; // function scope -> fun

  if (content == "JS") {
    let hours = "120+"; // block scope
    console.log(content, hours);
  }
  console.log(teacher, content); // teacher is accessible but not content as the scope of this variable is within the block.
}

fun();
console.log(teacher); //
// console.log(content);
