var teacher = "Nikhil"; // teacher -> global scope -> Nikhil

function ask(question) {
  // ask -> global scope, question  -> ask scope
  console.log(teacher, question); // teacher -> global
}

function fun() {
  // fun -> global scope
  var teacher = "Akash"; // teacher -> fun scope -> Akash
  ask("why?"); // ask -> fun scope
}

fun();
