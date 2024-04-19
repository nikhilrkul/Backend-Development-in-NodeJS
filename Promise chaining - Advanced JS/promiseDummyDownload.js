function download(url) {
  console.log("Started downloading from URL", url);
  return new Promise(function processPromise(resolve, reject) {
    setTimeout(function () {
      console.log("Dowload completed");
      let content = "Web data";
      resolve(content);
    }, 5000);
  });
}

let p = download("www.google.com");
p.then(
  function fulfillHandler1(value) {
    console.log("Downloaded data is :", value);
    return "new promise string";
  },

  function rejectionHandler1(value) {
    console.log("rejected with", value);
  }
).then(function newFulfillHanlder(value) {
  console.log("value from chained promise is :", value);
});
