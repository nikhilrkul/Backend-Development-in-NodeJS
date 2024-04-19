console.log("Start of the file");

setTimeout(function timer1() {
  console.log("Timer 1 done");
}, 0);

for (let i = 0; i < 100000000; i++) {}

let x = Promise.resolve("Nikhil's promise");
x.then(function processPromise(value) {
  console.log("Who's promise?", value);
});

setTimeout(function timer2() {
  console.log("Timer 2 done");
}, 0);

console.log("End of the file");

/**
 * Output :
 *
 * Start of the file
 * End of the file
 * Who's promise? Nikhil's promise
 * Timer 1 done
 * Timer 2 done
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
 * Callback queue : timer1(), timer2()
 * Microtask queue : processPromise()
 *
 * Console : Start of the file
 */
