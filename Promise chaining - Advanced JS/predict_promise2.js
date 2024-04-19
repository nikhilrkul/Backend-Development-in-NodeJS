function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Started Downloading from..", url);
    setTimeout(function processDownloading() {
      let data = "Dummy Data";
      resolve(data);
      console.log("Download Completed");
    }, 7000);
  });
}

console.log("Start");
let p = fetchData("www.google.com");
p.then(function A(value) {
  console.log("Value is :", value);
});
console.log("End");
