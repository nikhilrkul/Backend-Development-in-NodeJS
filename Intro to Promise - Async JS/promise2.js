function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithTimer() {
  return new Promise(function executor(resolve, reject) {
    setTimeout(function () {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        // If the number is even, we fulfill
        resolve(num);
      } else {
        reject(num);
      }
    }, 10000);
  });
}

let y = createPromiseWithTimer();
console.log(y);
