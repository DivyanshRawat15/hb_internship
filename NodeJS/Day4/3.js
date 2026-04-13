// 3. Create a simple HTTP server that logs every incoming request.

const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
  const log = `[${new Date().toLocaleTimeString()}] PID:${process.pid} ${req.method} ${req.url}\n`;
  fs.appendFile("server.log", log, err => {
    if (err) console.log(err);
  });
  res.end("Request Logged");
}).listen(5000);
console.log("Server running on port 5000");