// 16. Build a simple HTTP routing system without using any frameworks.

const http = require("http");
http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome Page");
  }
  else if (req.url === "/about") {
    res.end("About Page");
  }
  else if (req.url === "/stats") {
    res.end(`
PID: ${process.pid}
Uptime: ${process.uptime()}
Memory: ${JSON.stringify(process.memoryUsage())}
`);
  }
  else {
    res.end("404 Not Found");
  }
}).listen(3000);