var teacher = "Nikhil";

function fun() {
  var teacher = "Akash";
  content = "JS";
  console.log(teacher);
  console.log(content);
}

function gun() {
  var student = "Soumya";
  console.log(student);
}

// console.log(content);  // Accessing the non formal decalarion of variable would throw undefined since it's not found inside any scope
fun();
// console.log(content);
gun();
console.log(teacher);
console.log(content);
