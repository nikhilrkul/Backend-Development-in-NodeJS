/**
 * Tasks:
 *
 * 1. Write a function to download data from url
 * 2. Write a function to save the downloaded data in a file and return a filename
 * 3. Write a function to upload the file written in previous step to a newurl
 *
 * Note : The above tasks should be written using callbacks, not promise
 */

function download(url) {
  return new Promise(function execute(resolve, reject) {
    console.log("Staring downloading...", url);
    setTimeout(function down() {
      console.log("Download completed");
      let data = "abc";
      resolve(data);
    }, 5000);
  });
}

function writeFile(data) {
  return new Promise(function executeWrite(resolve, reject) {
    console.log("Staring Writing..", data, "to a file");
    setTimeout(function write() {
      console.log("Write Completed");
      let fileName = "xyz.txt";
      resolve(fileName);
    }, 4000);
  });
}

function uploadFile(fileName, newUrl) {
  return new Promise(function executeUpload(resolve, reject) {
    console.log("Upload started on", newUrl, "with filename is", fileName);
    setTimeout(function upload() {
      console.log("Upload completed");
      let response = "SUCCESS";
      resolve(response);
    }, 3000);
  });
}

let downloadPromise = download("www.google.com");
downloadPromise
  .then(function processDownload(content) {
    console.log("Downloaded data is :", content);
    return writeFile(content);
  })

  .then(function processWrite(content) {
    console.log("Data is written with filename :", content);
    return uploadFile("www.drive.com", content);
  })

  .then(function processUpload(responseValue) {
    console.log(
      "We have now successfully uploaded file to new url :",
      responseValue
    );
    // return uploadFile("www.drive.com", content);
  });
