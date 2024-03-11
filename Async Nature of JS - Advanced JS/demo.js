function timeConsumingByLoop() {
  console.log("Loop starts");

  for (let i = 0; i < 100000000; i++) {
    // some task
  }

  console.log("Loop ends");
}

function timeConsumingByRuntimeFeature() {
  console.log("Timer starts");

  setTimeout(() => {
    console.log("Timer done");
  }, 5000);
}

console.log("Hi");

timeConsumingByLoop();
timeConsumingByRuntimeFeature();
timeConsumingByLoop();

console.log("Bye");

/* Output :
Hi
Loop starts
Loop ends
Timer starts
Loop starts
Loop ends
Bye 

Timer done
*/
