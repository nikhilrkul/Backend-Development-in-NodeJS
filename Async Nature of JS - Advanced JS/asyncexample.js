console.log("Starts");
for (let i = 0; i < 3; i++) {
  setTimeout(function exec() {
    console.log("Timer done", i);
  }, 10);
}
for (let i = 0; i < 100000000; i++) {
  //
}
console.log("Ends");
