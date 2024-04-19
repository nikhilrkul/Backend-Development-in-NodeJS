/**
 * Tasks:
 *
 * 1. Write a function to download data from url
 * 2. Write a function to save the downloaded data in a file and return a filename
 * 3. Write a function to upload the file written in previous step to a newurl
 *
 * Note : The above tasks should be written using callbacks, not promise
 */

// function download(url) {
//   return new Promise(function processPromise(resolve, reject) {
//     console.log("Starting Downloading...");
//     setTimeout(function () {
//       console.log("Completed downloading");
//       let data = "Dummy data";
//       resolve(data);
//     }, 5000);
//   });
// }

function download(url, cb) {
  /**
   * Downloads content from the given url and
   * pass the downloaded content to the callback
   */
  console.log("Starting Downloading...");
  setTimeout(function () {
    console.log("Completed downloading");
    let data = "Dummy data";
    cb(data);
  }, 5000);
}

function writeDataToFile(fileName, cb) {
  /**
   *   Writes the given data to new file.
   */
  console.log("Writing downloaded data to file :", fileName);
  setTimeout(function () {
    console.log("Writing completed");
    let fileName = "abc.txt";
    cb(fileName);
  }, 7000);
}

function uploadFile(newUrl, fileName, cb) {
  /**
   *   Uploads the data from file to new URL
   */
  console.log("Uploading file :", fileName + " to a url :", newUrl);
  setTimeout(function exec() {
    console.log("Uploading completed");
    let response = "SUCCESS";
    cb(response);
  }, 2000);
}

download("www.xyz.com", function processDownload(data) {
  console.log("We are now going to process downloaded data :", data);
  writeDataToFile(data, function processWrite(fileName) {
    console.log(
      "We have written the data to file, now we will upload",
      fileName
    );
    uploadFile("www.google.com", fileName, function processUpload(response) {
      console.log(
        "We have successfully uploaded the data from file to new URL:",
        response
      );
    });
  });
});

// writeDataToFile("Random data", function process(fileName) {
//   console.log("File written with name", fileName);
// });
