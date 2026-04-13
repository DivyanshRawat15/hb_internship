// 8. Build an HTTP server that serves files from a directory.(PROBLEM QUESTION)

// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// http.createServer((req, res) => {
//   const filePath = path.join(__dirname, req.url);

//   fs.stat(filePath, (err, stat) => {
//     if (err || !stat.isFile()) {
//       res.end("File not found");
//       return;
//     }

//     const stream = fs.createReadStream(filePath);
//     stream.pipe(res);
//   });

// }).listen(3000);

const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req, res) => {

  let filePath;

  if (req.url === "/") {
    filePath = path.join(__dirname, "index.html");
  } else {
    filePath = path.join(__dirname, req.url);
  }

  fs.stat(filePath, (err, stat) => {

    if (err || !stat.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("File not found");
      return;
    }

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);

  });

}).listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});