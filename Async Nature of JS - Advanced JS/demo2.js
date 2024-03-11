function timeConsumingByLoop() {
  console.log("Loop starts");

  for (let i = 0; i < 100000000; i++) {
    // some task
  }

  console.log("Loop ends");
}

function timeConsumingByRuntimeFeature0() {
  console.log("Staring Timer");

  setTimeout(function exec() {
    console.log("Completed the Timer0");
    for (let i = 0; i < 10000000; i++) {
      // some task
    }
  }, 5000); // 5 sec timer
}

function timeConsumingByRuntimeFeature1() {
  console.log("Staring Timer");

  setTimeout(function exec() {
    console.log("Completed the Timer1");
  }, 0); // 0 sec timer
}

function timeConsumingByRuntimeFeature2() {
  console.log("Staring Timer");

  setTimeout(function exec() {
    console.log("Completed the Timer2");
  }, 200); // 200 milli sec timer
}

console.log("Hi");

timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();

console.log("Bye");

/* Output :
  Hi
  Loop starts
  Loop ends

  Staring Timer
  Completed the Timer1

  Staring Timer
  Completed the Timer2

  Staring Timer
  Completed the Timer0

  Bye 
  */
