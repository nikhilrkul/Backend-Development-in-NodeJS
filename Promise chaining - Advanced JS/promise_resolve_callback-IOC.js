function download(url, cb) {
  console.log("Started downloading from URL :", url);
  setTimeout(function exec() {
    console.log("Download completed");
    let data = "downloaded content";
    cb(data);
  }, 5000);
}

download("www.google.com", function processDownload(data) {
  console.log("Downloaded data is :", data);
});
