function createPromise() {
  return new Promise(function executor(resolev, reject) {
    console.log("Resolving the promise");
    resolev("Done");
  });
}

setTimeout(function process() {
  console.log("Timer Completed..");
}, 0);

let p = createPromise();
p.then(
  function fulfillment(value) {
    console.log("We fulfilled 1 with value", value);
  },
  function rejection() {}
);

p.then(function fulfillment2(value) {
  console.log("We fulfilled 2 with value", value);
});

p.then(function fulfillment2(value) {
  console.log("We fulfilled 3 with value", value);
});

for (let i = 0; i < 100000000; i++) {}
console.log("ending..");
