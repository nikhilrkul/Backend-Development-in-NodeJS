function getRandomInt(max) {
  return Math.floor(Math.random * max);
}

function createPromiseWithTimer() {
  return new Promise(function executor(resolve, reject) {
    setTimeout(function () {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        // If the number is even, we fulfill
        console.log("fulfilling");
        resolve(num);
        console.log("Completed fulfilling");
        resolve(11);
        console.log("Completed fulfilling again");
        return num;
      } else {
        console.log("rejecting");
        reject(num);
        console.log("Completed rejecting");
        reject(10);
        console.log("Completed rejecting again");
      }
    }, 10000);
  });
}
