function createPromise() {
  return new Promise(function (resolve, reject) {
    let x = setTimeout(function givenValue() {
      return 2;
    }, 3000);
    if (x % 2 == 0) {
      resolve("Successful");
    } else {
      reject("rejected");
    }
  });
}
