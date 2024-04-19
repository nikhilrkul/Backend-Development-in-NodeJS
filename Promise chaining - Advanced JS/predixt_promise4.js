function blocking_for_loop() {
  for (let i = 0; i < 10000000000; i++) {}
}

console.log("Start of the file");

setTimeout(function timer1() {
  console.log("Timer 1 done");
}, 0);

blocking_for_loop();

let x = Promise.resolve("Nikhil's promise 1");
x.then(function processPromise(value) {
  console.log("Who's promise?", value);
  blocking_for_loop();
});

let y = Promise.resolve("Nikhil's promise 2");
y.then(function processPromise(value) {
  console.log("Who's promise?", value);
  setTimeout(function () {
    console.log("ok done");
  }, 0);
});

let z = Promise.resolve("Nikhil's promise 3");
z.then(function processPromise(value) {
  console.log("Who's promise?", value);
});

setTimeout(function timer2() {
  console.log("Timer 2 done");
}, 0);

console.log("End of the file");

/**
 * Output :
 * ...Wait for loop completion
 * Start of the file
 * ...Wait for loop completion
 * End of the file
 * Who's promise? Nikhil's promise 1
 * Who's promise? Nikhil's promise 2
 * Who's promise? Nikhil's promise 3
 * Timer 1 done
 * Timer 2 done
 * ok Done
 *
 * -----Background tasks-------
 *
 * 1. Notify about timer1() to be executed after 0. Upon completion of 0 second, placed inside callback queue
 * that it can be executed by event loop.
 * 2. Promise object created with status "fulfilled", value as "Nikhil promise" and onFulfillment function.
 * processPromise function be placed inside microtask queue.
 * 3. Notify about timer1() to be executed after 0. Upon completion of 0 second, placed inside callback queue
 * that it can be executed by event loop.
 *
 * Callback queue : timer1(), anonym.fn, timer2()
 * Microtask queue : processPromise(),
 *
 * Console : Start of the file
 */
