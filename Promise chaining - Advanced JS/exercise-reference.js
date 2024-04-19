/**
 * Tasks:
 *
 * 1. Write a function to download data from url
 * 2. Write a function to save the downloaded data in a file and return a filename
 * 3. Write a function to upload the file written in previous step to a newurl
 */

function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Download started from", url);
    setTimeout(() => {
      let data = "dummy data";
      console.log("Download completed.");
      resolve(data);
      //   resolve("nikhil");  these lines will not be executed as promise is fulfilled only once
      //   resolve(1234);
    }, 4000);
    console.log();
  });
}

function writeFile(data) {
  return new Promise(function (resolve, reject) {
    console.log("Started writing ", data, "in a file");
    setTimeout(() => {
      let fileName = "abc.txt";
      console.log("writing completed...");
      resolve(fileName);
    }, 3000);
  });
}

function uploadData(file, url) {
  return new Promise(function (resolve, reject) {
    console.log("Upload started on ", url, "filename is", file);
    setTimeout(() => {
      let result = "SUCCESS";
      console.log("Uploading done");
      resolve(result);
    }, 5000);
  });
}

/* Method 1 : avoids promise hell by chaining */
let downloadPromise = fetchData("www.datadrive.com");
downloadPromise
  .then(function processDownload(value) {
    console.log("Download promise fulfilled", value);
    return value;
  })
  .then(function processWriteFile(value) {
    // console.log("Writing promise fulfilled", value);
    return writeFile(value);
  })
  .then(function processUploadFile(value) {
    return uploadData(value, "www.drive.com");
  });

/* Method 2 : causes promise hell
  
  // let downloadPromise = fetchData("www.datadrive.com");
  // downloadPromise.then(function processDownload(value) {
  //   console.log("Download promise fulfilled", value);
  
  //   let writeFilePromise = writeFile(value);
  //   writeFilePromise.then(function executeWrite(value) {
  //     console.log("Writing promise fulfilled :", value);
  
  //     let uploadPromise = uploadData(value, "www.drive.google.com");
  //     uploadPromise.then(function upload(value) {
  //       console.log("Uploading promise fulfilled :", value);
  //     });
  //   });
  // });
  //   let writeFilePromise = writeFile(value);
  //   writeFilePromise.then(function executeWrite(value) {
  //     console.log("Writing promise fulfilled :", value);
  
  //     let uploadPromise = uploadData(value, "www.drive.google.com");
  //     uploadPromise.then(function upload(value) {
  //       console.log("Uploading promise fulfilled :", value);
  //     });
  //   });
  
  */
