function getRandom(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithTimer() {
  return new Promise(function executor(resolve, reject) {
    console.log("Entering the executor callback in the promise constructor");
    setTimeout(function exec() {
      let num = getRandom(10);
      if (num % 2 == 0) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 1000);
    console.log("Exitting the executor callback in the promise constructor");
  });
}

console.log("Starting ...");
const p = createPromiseWithTimer();
console.log("We are now waiting promise to complete");
console.log("My current promise object is", p);
console.log("Going to register my 1st set of handlers");

p.then(
  function FulfillHandler1(value) {
    console.log("Inside the fulfill handler 1 with value :", value);
    console.log("Promise after fulfillment is", p);
  },
  function onRejectionHandler1(value) {
    console.log("Inside the rejection handler 1 with value :", value);
    console.log("Promise after rejection is", p);
  }
);

console.log("Going to register my 2nd set of handlers");

p.then(
  function fulFillmentHandler2(value) {
    console.log("Inside the fulfillment handler 2 with value", value);
    console.log("Promise after fulfillment", p);
  },
  function rejectionHandler2(value) {
    console.log("Inside the fulfillment handler 2 with value", value);
    console.log("Promise after fulfillment", p);
  }
);

for (let i = 0; i < 10000000000; i++) {}
console.log("Ending the loop also...");
